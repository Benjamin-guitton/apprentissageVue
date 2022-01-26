<template>
  <div>
    <h1>Ideas</h1>
    <ul>
      <draggable v-model="allIdeas" item-key="id">
      <template #item="{element}">
        <idea {{element.title}} />
      </template>
     <!-- <ul>
        <li v-for="idea in allIdeas" :key="idea.id">{{ idea.title }}</li>
      </ul> -->
      </draggable>
    </ul>
  </div>

</template>

<script>
import draggable from "vuedraggable"
import  Idea from "@/components/Idea";

export default {
  components: {
    draggable,
    Idea,
  },
  computed: {
    allIdeas() {
      return this.$store.getters.allIdeas;
    }
  },
  name: "Ideas"
}
</script>

<style scoped>

</style>
