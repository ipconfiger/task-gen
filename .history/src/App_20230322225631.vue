<template>
  <div>
    <h1>Jenkins任务生成器</h1>
    <div>
      <var-input placeholder="请输入文本" v-model="pro_name" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRef } from 'vue'

export default defineComponent({
  name: 'MyComponent',
  setup() {
    // Component logic here
    const state = reactive({
      pro_name: '',
    });
    return {
      ...toRefs(state)
    }
  }
})
</script>

<style scoped>
/* Component styles here */
</style>