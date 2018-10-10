<template>
  <vs-col vs-type="flex" vs-justify="space-between" vs-align="flex-start" vs-w="12">
    <vs-input disabled id="area-code" vs-label-placeholder="Area Code"/>
    <vs-input disabled id="phone-number" vs-label-placeholder="Phone Number"/>
  </vs-col>
</template>

<script>
export default {
  name: "EmailField"
}
</script>

<style lang="stylus">
.colors-example
  .vs-input
    margin 5px
    margin-top 20px; 
</style>


