<template>
  <div id="side-pane">
    <div id="user-profile">
      <vs-avatar size="80px" :src="profilePic"/>
      <div class="side-pane-wrapper">
        <p id="user-info">Ben Parker</p>
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
import profilePic from "../assets/img/pexels-photo-428364.jpeg";

export default {
  data:()=>({
    active:false,
    profilePic
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
