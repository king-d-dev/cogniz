<template>
  <div id="header">
    <vs-navbar v-model="activeItem" class="nabarx">
      <vs-button vs-type="flat" vs-radius="50%" vs-icon="menu"></vs-button>

      <vs-navbar-title>
        Cogniz
      </vs-navbar-title>

      <vs-spacer></vs-spacer>
      <vs-input vs-icon="search" placeholder="Search" v-model="search"/>
    </vs-navbar>
  </div>
</template>
<script>
export default {
  name: "NavBar",
  data:()=>({
    activeItem: 0,
    search: ''
  })
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
