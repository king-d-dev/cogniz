<template>
  <vs-row vs-w="12">
    <div class="cg-content form-preview">
      <h1 id="form-preview-title"> {{ form.title }} </h1>
      <div class="form-preview-body">
        <FormPreviewHelper 
          v-for="(field, index) in form.fields" 
          :key="index" 
          :field="field" 
          :formTitle="form.title"
        >
        </FormPreviewHelper>
      </div>
    </div>
  </vs-row> 
</template>

<script>
import { mapState } from "vuex";
import FormPreviewHelper from "./FormPreviewHelper"

export default {
  name: "FormPreview",
  components: {FormPreviewHelper},
  computed: mapState(['form'])
}
</script>

<style scoped>
#form-preview-title {
  margin-top: 30px;
}

.form-preview {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 100px;
}

.form-preview-body {
  margin-top: 20px;
  background-color: #f5f7fb;
  width: 60%;
  padding: 15px;
}

@media (max-width: 900px) {
  .form-preview-body {
    width: 90%;
  }
}
</style>
