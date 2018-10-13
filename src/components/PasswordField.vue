<template>
  <vs-col class="form-field-group" vs-w="12" :title="field.description">
    <div class="q-text">
      <p>{{ field.questionText }}</p>
    </div>
    <div v-if="mode === 'build'" class="description">
      <input type="text" placeholder="Type Description here" :value="field.description">
    </div>
    <div class="field-subs">
      <vs-input disabled v-if="mode === 'build'" type="password" :vs-label-placeholder="field.questionText" vs-w="12"/>
      <input v-else :placeholder="field.questionText" class="custom-input big" type="password">
    </div>
  </vs-col>
</template>

<script>
export default {
  name: "PasswordField",
  props: ['field','mode']
}
</script>

<style lang="stylus">
.colors-example
  .vs-input
    margin 5px
    margin-top 20px;

.leftx
  display flex
  flex-direction column

li
  list-style-type none  
</style>