<template>
  <div class="form" v-dropTarget>
    <vs-row>
      <vs-col v-if="!form.fields.length" vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <p id="call-to-action">Drop an Input Field here</p>
      </vs-col>
    </vs-row>
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <div class="edit-title">
          <vs-input autofocus v-if="editTitle" v-model="form_title" vs-label-placeholder="Change the Form Title"/>
          <h4 v-else>{{ form.title }}</h4>
          </div>
          <vs-button v-if="!editTitle" vs-size="small" @click="toggleEditTitle" vs-color="primary" vs-type="border" vs-icon="edit">edit</vs-button>
          <vs-button class="save" v-else vs-size="small" @click="save" vs-color="success" vs-type="border" vs-icon="save">save</vs-button>
      </vs-col>
    </vs-row>
    <div class="content">
      <InputField @toggleActive="setActive" :active="(activeField === field) ? true : false" class="input-field" v-for="(field, index) in form.fields" :key="index" :field="field" :type="field.type"></InputField>
  </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { DropTarget } from 'vue-react-dnd';

import InputField from "./InputField";

export default {
  name: "Form",
  data: () => ({
    editTitle: false,
    form_title: 'Form Title',
    activeField: null
  }),
  components: {InputField},
  mixins: [DropTarget],
  computed: mapState(['form', 'preDefinedFields']),
  methods: {
    ...mapActions(['createInputField', 'editFormTitle']),
    toggleEditTitle() {
      this.editTitle = !this.editTitle;
    },
    save() {
      this.editFormTitle(this.form_title);
      this.toggleEditTitle()
    },
    setActive(field) {
      this.activeField = field;
    }
  },
  dropTarget: {
    type() {
      return ["FormElement", "InputField"]
    },
    specs: {
      drop(monitor) {
        if(monitor.getItemType() === 'FormElement') {
          const field = { ...monitor.getItem() };
          this.createInputField(field);
          this.setActive(field);
        }
      }
    }
  }
}
</script>

<style scoped>
  .form {
    margin-top: 30px;
    padding: 50px;
    background-color: #f1f1f1;
    border: 2px dashed #009cfc;
  }

  #call-to-action {
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 40px;
  }

  .content {
    margin-top: 20px;
    width: 900px;
    cursor: move;
  }

  .edit-title {
    margin-right: 30px;
  }

  .save {
    margin-top: 15px;
  }

  .input-field {
    margin-top: 25px;
  }

  h4 {
    font-size: 35px;
  }
</style>


