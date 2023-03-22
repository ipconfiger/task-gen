<template>
  <div>
    <h1>Jenkins任务生成器</h1>
    <div>
      <var-radio-group v-model="deploy_type">
        <var-radio :checked-value="0">发布服务</var-radio>
        <var-radio :checked-value="1">发布网页/配置文件</var-radio>
      </var-radio-group>
    </div>
    <div>
      <var-input placeholder="请输入项目名" v-model="pro_name" />
      <var-radio-group v-model="env">
        <var-radio :checked-value="0">测试环境</var-radio>
        <var-radio :checked-value="1">生产环境</var-radio>
      </var-radio-group>
    </div>
    <div>
      <var-input placeholder="模块名称" v-model="mode_name" />
      <var-input placeholder="部署别名" v-model="alias" />
      <var-input placeholder="Git路径" v-model="git_path" />
      <var-input placeholder="拉取分支" v-model="branch" />

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
      pro_name: '',
      env: 0,
      mode_name: '',
      alias: '',
      git_path: '',
      branch: ''
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