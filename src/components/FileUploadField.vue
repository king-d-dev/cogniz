<template>
  <vs-col>
    <p class="label"> {{ field.questionText }} </p>
    <vs-upload disabled/>
  </vs-col>
</template>

<script>
export default {
  name: "FileUploadField",
  props: ['field']
}
</script>

