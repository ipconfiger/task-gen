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
      <var-input placeholder="请输入项目名" v-model="env" />
      <var-row>
    <var-col :span="4">生产环境</var-col>
    <var-col :span="20"></var-col>
  </var-row>
    </div>
    <div>

    </div>
  </div>
</template>

<script lang="ts">
import test from 'node:test';
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  name: 'MyComponent',
  setup() {
    // Component logic here
    const state = reactive({
      deploy_type: 0,
      pro_name: '',
      env: "test",
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