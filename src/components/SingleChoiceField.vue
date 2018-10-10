<template>
  <vs-col id='single-choice'>
    <p class="label">{{ field.questionText }}</p>
    <vs-col vs-type="flex" vs-justify="space-around" vs-align="flex-start" vs-w="12">
      <vs-radio disabled :v-model="option.value" :vs-value="option.value" v-for="(option, index) in field.subFields" :key="index">{{ option.label }}</vs-radio>
    </vs-col>
  </vs-col>
</template>

<script>
export default {
  name: "SingleChoiceField",
  props: ['field']
}
</script>

<style>
  .label {
    margin-bottom: 13px;
  }
</style>

