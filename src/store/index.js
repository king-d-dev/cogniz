import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const preDefinedFields = [
  {
    dummy_name: "Full Name",
    icon: "person",
    type: "fullName",
    required: false,
    description: "",
    questionText: "Full Name",
    subFields: [
      {
        label: "Last Name",
        description: "Last Name"
      },
      {
        label: "Other Names",
        description: "Other Names"
      }
    ]
  },
  {
    dummy_name: "Single Choice",
    icon: "email",
    type: "singleChoice",
    required: false,
    name: "",
    description: "",
    questionText: "Choose one",
    subFields: [
      {
        label: "Option 1",
        description: "Option 1",
        value: ""
      },
      {
        label: "Option 1",
        description: "Option 2",
        value: ""
      }
    ]
  },
  {
    dummy_name: "Multiple Choice",
    icon: "email",
    type: "multipleChoice",
    required: false,
    description: "",
    questionText: "Choose some",
    subFields: [
      {
        label: "Option 1",
        description: "Option 1",
        value: ""
      },
      {
        label: "Option 1",
        description: "Option 2",
        value: ""
      }
    ]
  },
  {
    dummy_name: "Password",
    icon: "https",
    type: "password",
    required: false,
    questionText: "Password",
    description: ""
  },
  {
    dummy_name: "Email",
    icon: "email",
    type: "email",
    required: false,
    description: "",
    questionText: "Email"
  },
  {
    dummy_name: "Telephone Number",
    icon: "phone",
    type: "telephoneNumber",
    required: false,
    description: "",
    questionText: "Telephone Number",
    subFields: [
      {
        label: "Area code",
        description: "Area code"
      },
      {
        label: "Phone Number",
        description: "Phone Number"
      }
    ]
  },
  {
    dummy_name: "Long Text Entry",
    icon: "email",
    type: "longTextEntry",
    questionText: "some text",
    description: "",
    required: false
  },
  {
    dummy_name: "File upload",
    icon: "cloud_upload",
    type: "file",
    required: false,
    questionText: "Upload something",
    description: ""
  },
  {
    dummy_name: "Number Input",
    icon: "email",
    type: "number",
    required: false,
    questionText: "Enter some digits",
    description: ""
  }
];

export default new Vuex.Store({
  strict: true,
  state: {
    form: {
      title: "Form Title",
      fields: [
        {
          dummy_name: "Password",
          icon: "https",
          type: "password",
          required: false,
          questionText: "Password",
          description: ""
        },
        {
          dummy_name: "Number Input",
          icon: "email",
          type: "number",
          required: false,
          questionText: "Enter some digits",
          description: ""
        },
        {
          dummy_name: "Long Text Entry",
          icon: "email",
          type: "longTextEntry",
          questionText: "some text",
          description: "",
          required: false
        }
      ]
    },
    preDefinedFields
  },
  actions: {
    createInputField({ commit }, payload) {
      commit("createInputField", payload);
    },
    editField({ commit }, payload) {
      commit("editField", payload);
    },
    editFormTitle({ commit }, title) {
      commit("editFormTitle", title);
    },
    removeField({ commit }, field) {
      commit("removeField", field);
    },
    onMoveField({ commit }, { dragIndex, hoverIndex }) {
      commit("moveField", { dragIndex, hoverIndex });
    },
    autoGenerateFieldsName({ commit }) {
      commit("autoGenerateFieldsName");
    }
  },
  mutations: {
    createInputField(state, payload) {
      state.form.fields.push(payload);
    },
    editField(state, { field, update }) {
      let found = state.form.fields.find(f => f === field);
      for (let prop in found) {
        // this is for nested objects within an array
        // if (typeof found[prop] === "object") {
        //   for (let f in found[prop]) {
        //     found[prop] = { ...f };
        //   }
        // }
        found[prop] = update[prop];
      }
    },
    editFormTitle(state, title) {
      state.form.title = title;
    },
    removeField(state, field) {
      state.form.fields = state.form.fields.filter(f => f !== field);
    },
    moveField(state, { dragIndex, hoverIndex }) {
      const dragItem = state.form.fields[dragIndex];
      state.form.fields[dragIndex] = state.form.fields.splice(
        hoverIndex,
        1,
        dragItem
      )[0];
    },
    autoGenerateFieldsName(state) {
      state.form.fields = state.form.fields.map((field, counter) => {
        if (field.subFields && field.subFields.length > 0) {
          let sub = field.subFields.map(subfield => {
            if (field.type === "singleChoice") {
              let name = `q${counter}_${field.questionText
                .trim()
                .replace(" ", "_")}`;
              return {
                ...subfield,
                value: subfield.label,
                name
              };
            }

            if (field.type === "multipleChoice") {
              let value = subfield.label;

              let name = `q${counter}_${field.questionText
                .trim()
                .replace(" ", "_")}[${subfield.label
                .trim()
                .replace(" ", "_")}]`;
              return {
                ...subfield,
                value,
                name
              };
            }

            let name = `q${counter}_${field.questionText
              .trim()
              .replace(" ", "_")}[${subfield.label.trim().replace(" ", "_")}]`;
            return {
              ...subfield,
              name
            };
          });
          return {
            ...field,
            subFields: sub
          };
        } else {
          let name = `q${counter}_${field.questionText
            .trim()
            .replace(" ", "_")}`;
          return {
            ...field,
            name
          };
        }
      });
    }
  }
});
