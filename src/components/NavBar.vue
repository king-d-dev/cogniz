<template>
  <div id="header">
    <vs-navbar v-model="activeItem" class="nabarx">
      <vs-button vs-type="flat" vs-radius="50%" vs-icon="menu"></vs-button>

      <router-link to="/">
        <vs-navbar-title>
          Cogniz
        </vs-navbar-title>
      </router-link>

      <vs-spacer></vs-spacer>
      <router-link to="/preview">
        <vs-button vs-icon="view" vs-type="flat"> Preview </vs-button>
      </router-link>
      <vs-button @click="autoGenerateFieldsName" vs-type="flat" vs-radius="50%">generate name</vs-button>
      <vs-input vs-icon="search" placeholder="Search" v-model="search"/>
    </vs-navbar>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "NavBar",
  data:()=>({
    activeItem: 0,
    search: ''
  }),
  methods: mapActions(['autoGenerateFieldsName'])
}
</script>

<style>
  header {
    padding: 8px 60px 15px 8px;
  }

  #header {
    z-index: 200;
    position: fixed;
    width: 100%;
    background-color: #fff;
  }
</style>
