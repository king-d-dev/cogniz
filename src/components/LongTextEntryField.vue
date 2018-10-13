<template>
  <vs-col class="form-field-group" vs-w="12" :title="field.description">
    <div class="q-text">
      <p>{{ field.questionText }}</p>
    </div>
    <div v-if="mode === 'build'" class="description">
      <input type="text" placeholder="Type Description here">
    </div>
    <div class="field-subs">
      <vs-textarea :label="field.questionText" disabled v-if="mode === 'build'" vs-w="12"/>
      <vs-textarea :label="field.questionText" v-else vs-w="12"/>
    </div>
  </vs-col>
</template>

<script>
export default {
  name: "LongTextEntryField",
  props: ['field', 'mode']
}
</script>

