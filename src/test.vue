<template>
  <div>
    <div class="create">
      <label :for="name">{{ label || 'label' }} : </label>
      <textarea v-if="type === 'textarea'" :name="name" cols="20" rows="5"></textarea>
      <vs-select v-else-if="type === 'select'" class="selectExample">
        <vs-select-item vs-value="" vs-text="Please select one"/>
        <vs-select-item :key="index" :vs-value="option" :vs-text="option" v-for="(option,index) in options" />
      </vs-select>
      <vs-input 
        v-else
        :type="type" 
        :id="name"
        :placeholder="placeholder || 'some placeholder'"
        :name="name"
      />
      <vs-select v-model="type" class="selectExample">
        <vs-select-item :key="index" :vs-value="type" :vs-text="type" v-for="(type,index) in types" />
      </vs-select>
      <vs-button
        v-show="!edit" 
        @click="edit = true" 
        vs-color="primary" 
        vs-type="gradient"
         vs-icon="edit"
      >
        edit
      </vs-button>
      <vs-button 
        v-show="edit" 
        @click="edit = false" 
        vs-color="danger" 
        vs-type="gradient"
        vs-icon="cancel"
      >
        cancel
      </vs-button>
      <vs-button 
        v-show="edit" 
        @click="save" 
        vs-color="primary" 
        vs-type="gradient"
         vs-icon="save"
      >
        save
      </vs-button>
    </div>

    <div v-show="edit" class="edit">
      <div>
        <vs-input type="text" v-model="name" placeholder="change name of input"/>
      </div>
      <!-- <input type="text" v-model="name" placeholder="change name of input"> -->
      <input type="text" v-model="placeholder" v-if="canPlaceHolder(type)" placeholder="change placeholder of input">
      <input type="text" v-model="label" placeholder="change label of the input">
      <input type="text" v-if="type === 'radio'" v-model="value" placeholder="value for the radio button">
      <div class="add-option" v-if="type === 'select'">
        <input type="text" v-model="optionValue" placeholder="add an option to the select">
        <button @click="addOption(optionValue)">add option</button>
      </div>
      <div class="required">
        <label>Required</label>
        <input type="checkbox" v-model="required">
      </div>
    </div>
  </div>
</template>

<script>
const types = [
  'text',
  'radio',
  'select',
  'file',
  'password',
  'email',
  'checkbox',
  'textarea',
  'date',
  'number'
]

const nonPlaceholderElements = [
  'radio',
  'select',
  'file',
  'checkbox',
  'textarea',
  'date'
]

export default {
  name: "App",
  data() {
    return {
      form: [],
      nonPlaceholderElements,
      types,
      required: false,
      name: "",
      placeholder: "",
      label: "",
      type: "text",
      edit: false,
      value: '',
      optionValue: 'one',
      options: []
    }
  },
  methods: {
    reset() {
      this.name = '';
      this.placeholder = 'some placeholder';
      this.type = 'text';
      this.label = 'label';
      this.required = false;
      this.value = '';
      this.options = [];
    },
    save() {
      this.edit = false;
      this.form.push({
        name: this.name,
        label: this.label,
        type: this.type,
        placeholder: this.placeholder,
        required: this.required,
        value: this.value,
        options: this.options
      });
      this.reset();
    },
    canPlaceHolder(type) {
      return !this.nonPlaceholderElements.includes(type);
    },
    addOption(value) {
      this.options.push(value);
      this.optionValue = '';
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro|Lato:400,700|Open+Sans');
  body {
    font-family: 'Source Sans Pro', 'Helvetica Neue', 'Lato', 'Open Sans';
    font-size: 14px;
    color: #34495e;
    margin: 30px;
  }
</style>

