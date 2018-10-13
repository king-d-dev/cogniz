<template>
  <vs-col class="form-field-group" :title="field.description" vs-lg="12" vs-sm="8" vs-xs="4">
    <div class="q-text">
      <p>{{ field.questionText }}</p>
    </div>
    <div v-if="mode === 'build'" class="description">
      <input type="text" placeholder="Type Description here" :value="field.description">
    </div>
    <div class="field-subs">
      <div v-if="mode === 'build'">
        <div class="custom-input-small">
          <input disabled :placeholder="field.subFields[0].label" class="custom-input small" type="text">
        </div>
        <div class="custom-input-big">
          <input disabled :placeholder="field.subFields[1].label" class="custom-input big" type="text">
        </div>
      </div>
      <div v-if="mode === 'preview'">
        <div class="custom-input-small">
          <input class="custom-input small" :placeholder="field.subFields[0].label" type="text">
        </div>
        <div class="custom-input-big">
          <input class="custom-input big" :placeholder="field.subFields[1].label" type="text">
        </div>
      </div>
    </div>
    
  </vs-col>
</template>

<script>
export default {
  name: "TelephoneField",
  props: ['field','mode']
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
  height 40px

.small
  width 100px
  margin-left 10px

.big
  margin-left 10px

.custom-input-big
  margin-left 20px

.field-subs > div
  display flex
  flex-wrap wrap

</style>

<style>
  @media (max-width: 950px) {
    .custom-input-big {
      margin-left: 0;
    }
  }
</style>



