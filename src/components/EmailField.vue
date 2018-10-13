<template>
  <vs-col class="form-field-group" vs-w="12" :title="field.description">
    <div class="q-text">
      <p>{{ field.questionText }}</p>
    </div>
    <div v-if="mode === 'build'" class="description">
      <input type="text" placeholder="Type Description here" :value="field.description">
    </div>
    <div class="field-subs">
      <vs-input v-if="mode === 'build'" type="email" disabled :vs-label-placeholder="field.questionText" vs-w="12"/>
      <input v-else :placeholder="field.questionText" class="custom-input big" type="email">
    </div>
  </vs-col>
</template>

<script>
export default {
  name: "EmailField",
  props: ['field', 'mode']
}
</script>