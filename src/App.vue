<template>
  <div>
    <NavBar></NavBar>
    <vs-row>
      <vs-col class="cg-content" vs-type="flex" vs-justify="start" vs-align="flex-start" vs-w="2">
        <SidePane></SidePane>
      </vs-col>
      <vs-col id="cg-form" class="cg-content" vs-type="flex" vs-justify="center" vs-align="flex-start" vs-w="10">
        <Form></Form>
      </vs-col>
    </vs-row> 
  </div>
</template>

<script>
import { DragDropContext } from 'vue-react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import SidePane from "./components/SidePane.vue";
import NavBar from "./components/NavBar.vue";
import Form from "./components/Form.vue";

export default {
  name: "App",
  mixins: [DragDropContext(HTML5Backend)],
  components: {
    SidePane,
    NavBar,
    Form
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro|Lato:400,700|Open+Sans');

  * {
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Source Sans Pro', 'Open Sans', 'Helvetica Neue', 'Lato';
    font-size: 18px;
    color: #34495e;
  }

  h4 {
    font-size: 22px;
  }

  .cg-content {
    margin-top: 56px;
  }

  #cg-form {
    margin-bottom: 150px;
  }
</style>
