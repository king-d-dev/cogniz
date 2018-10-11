<template>
  <div v-dragSource v-dropTarget @click="toggleActive" :class="active ? 'active' : 'none'">
    <vs-row class="input-field" vs-type="flex" vs-justify="space-between" vs-align="flex-start" vs-w="12">
      <vs-divider>
        {{ field.dummy_name }}
      </vs-divider>
      <div class="description">
        <input type="text" placeholder="Type Description here" :value="field.description">
      </div>
      <FullNameField v-if="type === 'fullName'" :field="field"/>
      <SingleChoiceField v-if="type === 'singleChoice'" :field="field"/>
      <MultipleChoiceField v-if="type === 'multipleChoice'" :field="field"/> 
      <EmailField v-if="type === 'email'" :field="field"/>
      <PasswordField v-if="type === 'password'" :field="field"/>
      <TelephoneField v-if="type === 'telephoneNumber'" :field="field"/>
      <FileUploadField v-if="type === 'file'" :field="field"></FileUploadField>
      <LongTextEntryField v-if="type === 'longTextEntry'" :field="field"></LongTextEntryField>
      <NumberInputField v-if="type === 'number'" :field="field"></NumberInputField>
    </vs-row>
    <div v-if="active" class="settings">
      <InputFieldSettings :field="field"></InputFieldSettings>
      <i class="material-icons trash" @click="removeInputField">delete</i>
    </div>
  </div>
</template>

<script>
import { DragSource, DropTarget } from "vue-react-dnd";
import { mapActions } from "vuex";
import FullNameField from './FullNameField';
import SingleChoiceField from './SingleChoiceField';
import PasswordField from './PasswordField';
import EmailField from './EmailField';
import TelephoneField from './TelephoneField';
import MultipleChoiceField from './MultipleChoiceField';
import FileUploadField from './FileUploadField';
import NumberInputField from './NumberInputField';
import InputFieldSettings from './InputFieldSettings';
import LongTextEntryField from './LongTextEntryField';

export default {
  name: "InputField",
  props:["field", "type", "active", "index"],
  mixins: [DragSource, DropTarget],
  data(){
    return {
      description: this.field.description
    }
  },
  dragSource: {
    type() {
      return "InputField";
    },
    specs: {
      beginDrag() {
        return { ...this.field, index: this.index };
      }
    }
  },
  dropTarget: {
    type() {
      return "InputField";
    },
    specs: {
      hover(monitor) {
        const dragIndex = monitor.getItem().index;
        const hoverIndex = this.index;

        // Don't replace items with themselves
        if (dragIndex === hoverIndex) {
          return
        }

        // Determine rectangle on screen
        const hoverBoundingRect = this.$el.getBoundingClientRect();

        // Get vertical middle
        const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

        // Determine mouse position
        const clientOffset = monitor.getClientOffset();

        // Get pixels to the top
        const hoverClientY = clientOffset.y - hoverBoundingRect.top;

        // Only perform the move when the mouse has crossed half of the items height
        // When dragging downwards, only move when the cursor is below 50%
        // When dragging upwards, only move when the cursor is above 50%

        // Dragging downwards
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
          return
        }

        // Dragging upwards
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
          return
        }

        // Time to actually perform the action
        this.$emit('moveField', dragIndex, hoverIndex);

        // Note: we're mutating the monitor item here!
        // Generally it's better to avoid mutations,
        // but it's good here for the sake of performance
        // to avoid expensive index searches.
        monitor.getItem().index = hoverIndex;
      }
    }
  },
  components:{
    FullNameField, 
    SingleChoiceField, 
    MultipleChoiceField,
    EmailField,
    PasswordField,
    TelephoneField,
    FileUploadField,
    NumberInputField,
    LongTextEntryField,
    InputFieldSettings
  },
  methods: {
    ...mapActions(['editField', 'removeField']),
    edit() {
      if(this.field.type === 'number') {
        this.value = 0;
      }
      this.popup = true;
    },
    save() {
      this.editField({
        field: this.field, 
        update: {
          ...this.field,
          name: this.name,
          required: this.required,
          placeholder: this.placeholder,
          value: this.value,
          label: this.label
        }
      });
      this.popup = false;
    },
    toggleActive() {
      this.$emit("toggleActive", this.field);
    },
    removeInputField() {
      this.removeField(this.field);
    }
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

.save
  margin-top 15px
  margin-left 20px;

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

.active
  border 2px solid blue
  padding 0 20px 20px
  display flex
  align-items center

.settings
  margin-left 30px
  border 2px solid #fff
  display flex
  flex-direction column
  justify-content space-between
  padding 15px
  cursor pointer

.trash
  color red
  margin-top 15px
  &:hover
    background-color red
    border-radius 50%
    padding 1px
    color #fff
    transition padding, background-color,color
    transition-duration .8s, .5s, .5s
</style>
