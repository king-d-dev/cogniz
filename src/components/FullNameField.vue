<template>
  <vs-col class="form-field-group" vs-w="12" :title="field.description">
    <div class="q-text">
      <p>{{ field.questionText }}</p>
    </div>
    <div v-if="mode === 'build'" class="description">
      <input type="text" placeholder="Type Description here" :value="field.description">
    </div>
    <div class="field-subs">
      <vs-input v-if="mode === 'build'" disabled :vs-label-placeholder="subfield.label" v-for="(subfield, index) in field.subFields" :key="index" vs-w="12"/>
      <input v-else :placeholder="subfield.label" class="custom-input big" type="text">
    </div>
  </vs-col>
</template>

<script>
export default {
  name: "FullNameField",
  props: ['field','mode']
}
</script>

<style lang="stylus">
.colors-example
  .vs-input
    margin 5px
    margin-top 20px;

.form-field-group
  display flex
  flex-direction column
  justify-content center
  align-items flex-start

.field-subs
  width 70%
  display flex
  flex-wrap wrap
  justify-content space-between

.q-text
  width 300px
  padding 10px
  left 0
</style>

<style>
  @media (max-width: 950px) {
    .field-subs input , .field-subs > div {
      margin-bottom: 10px;
    }

    .field-subs {
      width: 100%;
    }
  }
</style>

