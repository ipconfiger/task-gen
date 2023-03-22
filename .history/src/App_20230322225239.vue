<template>
  <div>
    <h1>Jenkins任务生成器</h1>
    <div>
      <var-input placeholder="请输入文本" v-model="value" />
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

    });
    return {
      ...toRef(state)
    }
  }
})
</script>

<style scoped>
/* Component styles here */
</style>