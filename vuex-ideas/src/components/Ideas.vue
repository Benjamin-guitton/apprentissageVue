<template>
  <div>
    <div>
      <h1>Ideas</h1>
      <ul>
        <draggable class="ideas" v-model="allIdeas" group="ideas">
          <Idea v-for="idea in AllIdeas" :key="idea.id" :item="idea"/>
        </draggable>
      </ul>
      <!-- <ul>
        <draggable v-model="allIdeas" item-key="id">
          <template #item="{element}">
            <idea {{element.title}} />
          </template>
        </draggable>
      </ul> -->
    </div>
    <div class="destination">
      <div>
        <h3>Courses</h3>
        <draggable class="ideas" v-model="courses" group="ideas">
          <Idea v-for="course in courses" :key="course.id" :="course"/>
        </draggable>
      </div>
    </div>
    <h3>Paper work</h3>
    <draggable class="ideas" v-model="courses" group="ideas">
      <Idea v-for="pw in paperWork" :key="pw.id" :item="pw" />
    </draggable>
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
    allIdeas: {
      get() {
        return this.$store.getters.allIdeas;
      },
      set(value) {
        this.$store.dispatch("saveIdeasOrdering", value);
      }
    },
    courses: {
      get() {
        return this.$store.getters.courses
      },
      set(value) {
        this.$store.dispatch("saveCoursesOrdering", value);
      }
    },
    paperWork: {
      get() {
        return this.$store.getters.paperWork;
      },
      set(value) {
        this.$store.dispatch("savePaperWorkOrdering", value);
      }
    }
  },
  name: "Ideas"
}
</script>

<style scoped>
.ideas {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
}
.destination {
  display: flex;
  justify-content: space-evenly;
}

</style>
