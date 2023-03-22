<template>
  <div>
    <h1>Jenkins任务生成器</h1>
    <var-card
      title="本草纲目"
      description="如果华佗再世,崇洋都被医治,外邦来学汉字,激发我民族意识。马钱子、决明子、苍耳子，还有莲子；黄药子、苦豆子、川楝子，我要面子。用我的方式，改写一部历史。没什么别的事，跟着我念几个字。山药当归枸杞 GO，山药 当归 枸杞 GO，看我抓一把中药，服下一帖骄傲~"
    />
    <div>
      <var-radio-group v-model="deploy_type">
        <var-radio :checked-value="0">发布服务</var-radio>
        <var-radio :checked-value="1">发布网页/配置文件</var-radio>
      </var-radio-group>
    </div>
    <div>
      <var-input placeholder="请输入项目名" v-model="service.pro_name" />
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
      result:'',
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
    }
  }
})
</script>

<style scoped>
/* Component styles here */
</style>