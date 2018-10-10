<template>
  <vs-col vs-w="12">
    <vs-input disabled type="password" :vs-label-placeholder="field.questionText"/>
  </vs-col>
</template>

<script>
export default {
  name: "PasswordField",
  props: ['field']
}
</script>

<style lang="stylus">
.colors-example
  .vs-input
    margin 5px
    margin-top 20px;

.leftx
  display flex
  flex-direction column

li
  list-style-type none  
</style>