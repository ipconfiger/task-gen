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
      deploy_type: '',
      pro_name: '',
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