<template>
  <!-- <vs-col vs-lg="12" vs-sm="8" vs-xs="4">
    <p class="label">{{ field.questionText }}</p>
    <vs-input-number disabled class="item" v-model="value"/>
  </vs-col> -->
  <vs-col class="form-field-group" vs-w="12" :title="field.description">
    <div class="q-text">
      <p>{{ field.questionText }}</p>
    </div>
    <div v-if="mode === 'build'" class="description">
      <input type="text" placeholder="Type Description here">
    </div>
    <div class="field-subs">
      <vs-input-number disabled v-if="mode === 'build'" vs-w="12" v-model="value"/>
      <vs-input-number class="cg-number-input" v-else vs-w="12" v-model="value"/>
    </div>
  </vs-col>
</template>

<script>
export default {
  name: "NumberInputField",
  props: ['field', 'mode'],
  data() {
    return {
      value: 0
    }
  }
}
</script>

<style>
  .cg-number-input {
    padding-left: 12px;
  }
</style>


