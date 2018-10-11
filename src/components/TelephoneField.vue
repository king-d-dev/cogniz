<template>
  <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-w="12">
    <label class="question-text">{{ field.questionText }}</label>
    <div class="custom-input-small">
      <label class="label"> {{ field.subFields[0].label }} </label>
      <input disabled class="custom-input small" type="text">
    </div>
    <strong>
      <label>--</label>
    </strong>
    <div class="custom-input-big">
      <label> {{ field.subFields[1].label }} </label>
      <input disabled class="custom-input big" type="text">
    </div>
  </vs-col>
</template>

<script>
export default {
  name: "TelephoneField",
  props: ['field']
}
</script>

<style lang="stylus">
.colors-example
  .vs-input
    margin 5px
    margin-top 20px; 

.custom-input
  padding 8px
  border-radius 4px
  border 1px solid #dadada
  width 250px

.small
  width 100px
  margin-right 20px
  margin-left 10px

.big
  margin-left 10px

.custom-input-big
  margin-left 20px

</style>


