<template>
  <div>
    <h1>Jenkins任务生成器</h1>
    <div class="refresh_btn">
      <var-button type="primary" @click="refresh">刷新生成</var-button>
    </div>
    <var-card
      title="任务脚本内容"
      :description="result"
    />
    <div>
      <var-radio-group v-model="deploy_type" @change="refresh">
        <var-radio :checked-value="0">发布服务</var-radio>
        <var-radio :checked-value="1">发布网页/配置文件</var-radio>
      </var-radio-group>
    </div>
    <div>
      <var-input @change="refresh" placeholder="请输入项目名" v-model="pro_name" />
    </div>
    <div v-if="deploy_type < 1">
      <var-radio-group v-model="service.env" @change="refresh">
        <var-radio :checked-value="0" @click="refresh">测试环境</var-radio>
        <var-radio :checked-value="1" @click="refresh">生产环境</var-radio>
      </var-radio-group>
      <var-input @change="refresh" placeholder="模块名称" v-model="service.mode_name" />
      <var-input @change="refresh" placeholder="部署别名" v-model="alias" />
      <var-input @change="refresh" placeholder="Git路径" v-model="git_path" />
      <var-input @change="refresh" placeholder="拉取分支" v-model="branch" />
      强制拉新：<var-switch @change="refresh" v-model="force_clone" />
      <var-input @change="refresh" placeholder="发布IP" v-model="tar_ip" />
      <var-input @change="refresh" placeholder="最大内存" v-model="service.max_mem" />
      <var-input @change="refresh" placeholder="工作端口" v-model="service.port" />
      <var-input @change="refresh" placeholder="Nacos" v-model="service.nacos" />
      <var-input @change="refresh" placeholder="NacosNS" v-model="service.nacosns" />
    </div>
    <div v-else>
      <var-input @change="refresh" placeholder="源目录" v-model="web.src_dir" />
      <var-input @change="refresh" placeholder="Git路径" v-model="git_path" />
      <var-input @change="refresh" placeholder="拉取分支" v-model="branch" />
      强制拉新：<var-switch @change="refresh" v-model="force_clone" />
      <var-input @change="refresh" placeholder="发布IP" v-model="tar_ip" />
      <var-input @change="refresh" placeholder="发布目录" v-model="web.base_path" />
      <var-input @change="refresh" placeholder="部署别名" v-model="alias" />
      执行更新脚本：<var-switch @change="refresh" v-model="web.need_update" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  name: 'MyComponent',
  setup() {
    // Component logic here
    const state = reactive({
      deploy_type: 0,
      result: 'sh /opt/releases-apps2/release.sh',
      pro_name: '',
      force_clone: false,
      git_path: '',
      branch: '',
      alias: '',
      tar_ip: '',
      service: {
        env: 0,
        mode_name: '',
        max_mem: '',
        port: '',
        nacos: '',
        nacosns: ''
      },
      web: {
        src_dir: '',        
        base_path: '',
        need_update: false
      }
    });
    return {
      ...toRefs(state),
      refresh() { 
        if (state.deploy_type > 0) { 
          state.result = 'sh /opt/releases-apps2/deploy.sh';
          state.result += ' ' + state.pro_name;
          state.result += ' ' + state.web.src_dir;
          state.result += ' ' + state.git_path;
          state.result += ' ' + state.branch; 
          if (state.force_clone) {
            state.result += ' true';
          } else {
            state.result += ' false';
          }
          state.result += ' ' + state.tar_ip;
          state.result += ' ' + state.web.base_path;
          state.result += ' ' + state.alias;
          if (state.web.need_update) {
            state.result += '&& sh /opt/releases-apps2/reboot_web.sh ' + state.tar_ip + ' ' + state.alias;
          }
        } else {
          state.result = 'sh /opt/releases-apps2/release.sh';
          state.result += ' ' + state.pro_name;
          if (state.service.env > 0) {
            state.result += ' pro';
          } else {
            state.result += ' test';
          }
          state.result += ' ' + state.service.mode_name;
          state.result += ' ' + state.alias;
          state.result += ' ' + state.git_path;
          state.result += ' ' + state.branch;
          if (state.force_clone) {
            state.result += ' true';
          } else {
            state.result += ' false';
          }
          state.result += ' ' + state.tar_ip;
          state.result += ' ' + state.service.max_mem + 'm';
          state.result += ' ' + state.service.port;
          state.result += ' ' + state.service.nacos;
          state.result += ' ' + state.service.nacosns;
        }

      }
    }
  }
})
</script>

<style scoped>
/* Component styles here */
.refresh_btn {
  position: fixed;
  top: 10px;
  right: 10px;
}
</style>