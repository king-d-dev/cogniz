<template>
  <vs-textarea disabled :label="field.questionText" />
</template>

<script>
export default {
  name: "LongTextEntryField",
  props: ['field']
}
</script>

