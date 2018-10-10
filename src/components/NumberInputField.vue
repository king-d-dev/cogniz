<template>
  <vs-col vs-w="12">
    <p class="label">{{ field.questionText }}</p>
    <vs-input-number disabled class="item" v-model="value"/>
  </vs-col>
</template>

<script>
export default {
  name: "NumberInputField",
  props: ['field'],
  data() {
    return {
      value: 0
    }
  }
}
</script>

