<template lang="html">

  <div id="parentx">

    <div @click="toggleActive" class="build">
      <i class="material-icons build">settings</i>
    </div>
    <vs-sidebar id="settings-pane" position-right  parent="body" default-index="1"  color="primary" class="sidebarx" spacer v-model="active">

      <div class="header-sidebar" slot="header">
        <h4>
          {{ field.dummy_name }}
        </h4>
      </div>

      <div id="settings-content">
        <vs-row class="settings-item">
          <label class="settings-label">Question Text</label>
          <vs-input autofocus :placeholder="field.questionText" v-model="questionText"/>
          <span class="settings-description">Type your question</span>
        </vs-row>

        <vs-divider/>

        <vs-row class="settings-item">
          <label class="settings-label">Description</label>
          <vs-input placeholder="Type description here" v-model="description"/>
          <span class="settings-description">Describe the field (this would be shown in the form)</span>
        </vs-row>

        <vs-divider/>

        <vs-row>
          <label class="settings-label">Required</label>
          <vs-col type="flex" vs-w="12">
            <vs-switch vs-color="dark" vs-icon-on="done" vs-icon-off="block" v-model="required">
            <span slot="on">YES</span>
            <span slot="off">NO</span>
          </vs-switch>
          </vs-col>
          <span class="settings-description">Prevent submission if this question is empty</span>
        </vs-row>

        <div v-if="subFields.length">
          <vs-divider/>

          <label class="sub-labels-heading">
            <span>Sub Labels</span>
          </label>
          <div class="sub-labels" v-for="(subfield, index) in subFields" :key="index">
            <vs-row type="flex" vs-w="12" class="settings-item">
              <div class="sub-label-actions">
                <label class="settings-label">{{ subfield.description }}</label>
                <span v-if="shouldShow" @click="removeSubField(subfield)" class="sub-label-actions-remove">
                  <i class="material-icons" title="Remove sub label">delete</i>
                </span>
              </div>
              <vs-input placeholder="Type description here" v-model="subfield.label"/>
              <span class="settings-description">Change the name for this label</span>
            </vs-row>
          </div>
          <div v-if="shouldShow" class="sub-label-actions">
            <span @click="addSubField" class="sub-label-actions-add">
              <i class="material-icons" title="Add sub label">add</i>
            </span>
          </div>
        </div>

        <vs-divider/>

        <vs-row>
          <label class="settings-label">Duplicate</label>
          <vs-col class="duplicate" type="flex" vs-w="12">
            <i class="material-icons">flip_to_front</i>
            <span> &nbsp; &nbsp; DUPLICATE</span>
          </vs-col>
          <span class="settings-description">Make a copy of this field with all saved settings</span>
        </vs-row>
      </div>

      <div class="footer-sidebar" slot="footer">
        <vs-button @click="save" vs-icon="save" color="success" vs-type="filled">save</vs-button>
        <vs-button vs-icon="settings" color="primary" vs-type="border"></vs-button>
      </div>

    </vs-sidebar>
  </div>

</template>

<script>
import { mapActions } from "vuex";

const containsSubFields = ['fullName', 'singleChoice', 'multipleChoice'];
const canNotEditSubFields = ['fullName'];

export default {
  data() { 
    return {
      active:false,
      label: this.field.label,
      required: this.field.required,
      description: this.field.description,
      questionText: this.field.questionText,
      subFields: (containsSubFields.includes(this.field.type)) ? [
        {
          ...this.field.subFields[0]
        },
        {
          ...this.field.subFields[1]
        }
      ] : []
    }
  },
  props: ['field'],
  methods: {
    ...mapActions(['editFormTitle', 'editField']),
    toggleActive() {
      this.active = !this.active;
    },
    addSubField() {
      const newOption = {
        label: `New Option`,
        description: "Option",
        value: ""
      }
      this.subFields.push(newOption);
    },
    removeSubField(subField) {
      this.subFields = this.subFields.filter(f => f !== subField);
    },
    save() {
      this.editField({
        field: this.field,
        update: {
          ...this.field,
          label: this.label,
          required: this.required,
          description: this.description,
          questionText: this.questionText,
          subFields: this.subFields
        }
      });
      this.toggleActive();
    }
  },
  computed: {
    shouldShow(field) {
      return !canNotEditSubFields.includes(this.field.type);
    }
  }
}
</script>

<style lang="stylus">
.header-sidebar
  display flex
  align-items center
  justify-content center
  flex-direction column
  width 100%
  h4
    display flex
    align-items center
    justify-content center
    width 100%
    > button
      margin-left 10px
.footer-sidebar
  display flex
  align-items center
  justify-content space-between
  width 100%
  > button
      border 0px solid rgba(0,0,0,0) !important
      border-left 1px solid rgba(0,0,0,.07) !important
      border-radius 0px !important

#settings-content 
  padding-left 10px

.settings-label
  margin-bottom 10px

.settings-description 
  font-size 11px
  margin 5px 0

.settings-item 
  margin-bottom 20px

.duplicate
  padding 8px
  margin-right 40px
  border-radius 4px
  display flex
  align-items center
  background-color grey
  cursor pointer

.footer-sidebar
  font-size 25px !important

.sub-labels
  font-size 14px
  margin-top 15px

.sub-labels-heading
  margin 25%
  background-color grey
  border-radius 4px
  padding 8px

.sub-label-actions
  display flex
  justify-content space-around
  align-items flex-start

.sub-label-actions-add
  display flex
  color green
  background-color #eee
  border-radius 50%
  padding 6px
  cursor pointer
  &:hover
    background-color rgb(70,201,58)
    color #fff

.sub-label-actions-remove
  display flex
  color rgb(209, 40, 40)
  background-color #eee
  border-radius 50%
  padding 3px
  cursor pointer
  position relative
  left 20px
  bottom 2px
  &:hover
    background-color rgb(209, 40, 40)
    color #fff

.sub-label-actions-remove i 
  font-size 20px
</style>