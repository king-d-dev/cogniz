<template>
  <div id="side-pane">
    <div id="user-profile">
      <!-- <vs-avatar size="80px" :src="profilePic"/> -->
      <div id="profile-img-wrapper">
        <!-- <img id="profile-img" :src="profilePic" alt="profile-pic"> -->
      </div>
      <div class="side-pane-wrapper">
        <p id="user-info">Joyce Wilson</p>
        <span class="settings-icon">
          <i class="material-icons">settings</i>
        </span>
      </div>
    </div>
    <vs-divider/>
    <h3 id="element-header">Form Elements</h3>
    <FormElement :field="field" v-for="(field, index) in preDefinedFields" :key="index"></FormElement>
  </div>
</template>

<script>
import { mapState } from "vuex";
import FormElement from "./FormElement";

export default {
  data:()=>({
    active:false
  }),
  components: {FormElement},
  computed: {
    ...mapState(['preDefinedFields'])
  }
}
</script>

<style>
  #side-pane {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 20px;
    height: 100vh;
    position: fixed;
    width: 220px;
    background-color: #f5f7fb;
    max-height: calc(100vh - 4rem);
    overflow-y: auto;
  }
  
  #profile-img-wrapper {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-image: url("../assets/img/junior-moran-1054289-unsplash.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  #user-profile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .side-pane-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    margin-top: 10px;
  }

  #user-info {
    margin-right: 20px;
    color: #5b3cc4;
    font-weight: 600;
  }

  #element-header {
    margin: 0 0 20px;
    border-radius: 4px;
    padding: 5px;
    background-color: #fff;
  }

  .settings-icon {
    position: relative;
    top: 4px;
  }

  .settings-icon i {
    font-size: 20px;
  }
</style>
