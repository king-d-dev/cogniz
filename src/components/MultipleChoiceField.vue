<template>
  <vs-col>
    <p class="label">{{ field.questionText }}</p>
    <vs-col vs-type="flex" vs-justify="space-around" vs-align="flex-start" vs-w="12">  
      <vs-checkbox disabled v-for="(option,index) in field.subFields" :key="index">{{ option.label }}</vs-checkbox>
    </vs-col>
  </vs-col>
</template>

<script>
export default {
  name: "MultipleChoiceField",
  props: ['field']
}
</script>
