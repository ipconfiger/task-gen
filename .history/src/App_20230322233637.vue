<template>
  <div>
    <h1>Jenkins任务生成器</h1>
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
      <var-input @change="refresh" placeholder="请输入项目名" v-model="service.pro_name" />
      <var-radio-group v-model="service.env" @change="refresh">
        <var-radio :checked-value="0">测试环境</var-radio>
        <var-radio :checked-value="1">生产环境</var-radio>
      </var-radio-group>
    </div>
    <div v-if="deploy_type < 1">
      <var-input @change="refresh" placeholder="模块名称" v-model="service.mode_name" />
      <var-input @change="refresh" placeholder="部署别名" v-model="service.alias" />
      <var-input @change="refresh" placeholder="Git路径" v-model="service.git_path" />
      <var-input @change="refresh" placeholder="拉取分支" v-model="service.branch" />
      <var-input @change="refresh" placeholder="发布IP" v-model="service.tar_ip" />
      <var-input @change="refresh" placeholder="最大内存" v-model="service.max_mem" />
      <var-input @change="refresh" placeholder="工作端口" v-model="service.port" />
      <var-input @change="refresh" placeholder="Nacos" v-model="service.nacos" />
      <var-input @change="refresh" placeholder="NacosNS" v-model="service.nacosns" />
    </div>
    <div v-else>
      拉取网页
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
      result:'sh /opt/releases-apps2/release.sh',
      service: {
        pro_name: '',
        env: 0,
        mode_name: '',
        alias: '',
        git_path: '',
        branch: '',
        tar_ip: '',
        max_mem: '',
        port: '',
        nacos: '',
        nacosns: ''
      },
      static: {

      }
    });
    return {
      ...toRefs(state),
      refresh() { 
        if (state.deploy_type > 0) { 
          // TODO
          state.result = 'sh /opt/releases-apps2/deploy.sh';
        } else {
          state.result = 'sh /opt/releases-apps2/release.sh';
          
          
        }

      }
    }
  }
})
</script>

<style scoped>
/* Component styles here */
</style>