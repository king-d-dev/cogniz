<template>
  <vs-col vs-w="12">
    <vs-input disabled type="email" :vs-label-placeholder="field.questionText"/>
  </vs-col>
</template>

<script>
export default {
  name: "EmailField",
  props: ['field']
}
</script>