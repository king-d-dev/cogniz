<template>
  <div class="form-element">
    <div class="side-pane-content" v-dragSource>
      <i class="material-icons">{{ field.icon }}</i>
      <span class="dummy-name">{{field.dummy_name}}</span>
    </div>
    <vs-divider/>
  </div>
</template>

<script>
import { DragSource } from 'vue-react-dnd';

export default {
  name: "FormElement",
  mixins: [DragSource],
  props: ['field'],
  dragSource: {
    type() {
      return "FormElement";
    },
    specs: {
      beginDrag() {
        return { ...this.field };
      }
    }
  }
}
</script>

<style lang="stylus">
.colors-example
  .vs-input
    margin 5px
    margin-top 20px;

.drag-element
  padding 3px

.side-pane-content
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  cursor: move;
  margin-bottom: 15px;
  
.form-element:hover
  background-color rgb(5, 69, 124)
  border-radius 4px
  padding 7px 7px 0
  color #fff
  box-shadow 0 0 15px rgba(0,0,0,.5)
  transition-property background, border-radius, color, box-shadow, padding
  transition-duration .4s, .10s, .4s, .5s, .5s

.dummy-name
  margin-left: 15px;
</style>
