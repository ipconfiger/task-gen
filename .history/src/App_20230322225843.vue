<template>
  <div>
    <h1>Jenkins任务生成器</h1>
    <div>
      <var-radio-group v-model="value">
      <var-radio :checked-value="0">吃饭</var-radio>
      <var-radio :checked-value="1">睡觉</var-radio>
    </var-radio-group>
      <var-input placeholder="请输入文本" v-model="pro_name" />
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