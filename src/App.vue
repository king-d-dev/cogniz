<template>
  <div>
    <NavBar></NavBar>
    <router-view></router-view>
  </div>
</template>

<script>
import { DragDropContext } from 'vue-react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  mixins: [DragDropContext(HTML5Backend)],
  components: {
    NavBar
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
