<template>
  <div class="preview-item">
    <vs-row vs-type="flex" vs-justify="space-between" vs-align="center" vs-w="12">
      <FullNameField mode='preview' v-if="field.type === 'fullName'" :field="field"/>
      <SingleChoiceField mode='preview' v-if="field.type === 'singleChoice'" :field="field"/>
      <MultipleChoiceField mode='preview' v-if="field.type === 'multipleChoice'" :field="field"/> 
      <EmailField mode='preview' v-if="field.type === 'email'" :field="field"/>
      <PasswordField mode='preview' v-if="field.type === 'password'" :field="field"/>
      <TelephoneField mode='preview' v-if="field.type === 'telephoneNumber'" :field="field"/>
      <FileUploadField mode='preview' v-if="field.type === 'file'" :field="field"></FileUploadField>
      <LongTextEntryField mode='preview' v-if="field.type === 'longTextEntry'" :field="field"></LongTextEntryField>
      <NumberInputField mode='preview' v-if="field.type === 'number'" :field="field"></NumberInputField>
    </vs-row>
  </div>
</template>

<script>
import FullNameField from './FullNameField';
import SingleChoiceField from './SingleChoiceField';
import PasswordField from './PasswordField';
import EmailField from './EmailField';
import TelephoneField from './TelephoneField';
import MultipleChoiceField from './MultipleChoiceField';
import FileUploadField from './FileUploadField';
import NumberInputField from './NumberInputField';
import LongTextEntryField from './LongTextEntryField';

export default {
  name: "FormPreviewHelper",
  props:["field"],
  components:{
    FullNameField, 
    SingleChoiceField, 
    MultipleChoiceField,
    EmailField,
    PasswordField,
    TelephoneField,
    FileUploadField,
    NumberInputField,
    LongTextEntryField
  }
}
</script>

<style lang="stylus">
.colors-example
  .vs-input
    margin 5px
    margin-top 20px;

.vs-inputx 
  width 240px !important
  height 40px !important

.input-span-placeholder
  font-size 16px !important

.form-group
  display flex
  justify-content space-between
  align-items center
  height 28px

.description 
  background-color #f5f5f5
  width 60%
  margin 0 auto 20px

.description input 
  width 100%
  padding 10px
  border-radius 4px
  border none
  background-color #f5f5f5
  font-family aller

.vs-textarea
  background-color #fff !important

.preview-item
  margin-bottom 20px
</style>
