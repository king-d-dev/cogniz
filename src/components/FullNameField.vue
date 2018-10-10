<template>
  <vs-col vs-type="flex" vs-justify="space-around" vs-align="flex-start" vs-w="12">
    <p>{{ field.questionText }}</p>
    <vs-input disabled :vs-label-placeholder="subfield.label" v-for="(subfield, index) in field.subFields" :key="index"/>
  </vs-col>
</template>

<script>
export default {
  name: "FullNameField",
  props: ['field']
}
</script>

<style lang="stylus">
.colors-example
  .vs-input
    margin 5px
    margin-top 20px;
</style>
