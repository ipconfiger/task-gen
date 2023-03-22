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
      <var-radio-group v-model="service.env">
        <var-radio :checked-value="0">测试环境</var-radio>
        <var-radio :checked-value="1">生产环境</var-radio>
      </var-radio-group>
    </div>
    <div v-if="deploy_type < 1">
      <var-input placeholder="模块名称" v-model="service.mode_name" />
      <var-input placeholder="部署别名" v-model="service.alias" />
      <var-input placeholder="Git路径" v-model="service.git_path" />
      <var-input placeholder="拉取分支" v-model="service.branch" />
      <var-input placeholder="发布IP" v-model="service.tar_ip" />
      <var-input placeholder="最大内存" v-model="service.max_mem" />
      <var-input placeholder="工作端口" v-model="service.port" />
      <var-input placeholder="Nacos" v-model="service.nacos" />
      <var-input placeholder="NacosNS" v-model="service.nacosns" />
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

      }
    }
  }
})
</script>

<style scoped>
/* Component styles here */
</style>