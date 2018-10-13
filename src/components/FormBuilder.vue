<template>
  <vs-row>
    <vs-col class="cg-content" vs-type="flex" vs-justify="start" vs-align="flex-start" vs-w="2">
      <SidePane></SidePane>
    </vs-col>
    <vs-col id="cg-form" class="cg-content" vs-type="flex" vs-justify="center" vs-align="flex-start" vs-w="10">
      <Form></Form>
    </vs-col>
  </vs-row> 
</template>

<script>
import SidePane from './SidePane'
import Form from './Form'

export default {
  name: "FormBuilder",
  components: {SidePane, Form}
}
</script>
