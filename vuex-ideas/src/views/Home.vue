<template>
  <div class="home">
  <h1>Welcome to Ideas.io</h1>
    <IdeaCreate/>
    <Ideas/>
  </div>
</template>

<script>

import Ideas from "../components/Ideas";
import IdeaCreate from "../components/IdeaCreate";
export default {
  name: "Home",
  components: {IdeaCreate, Ideas},
};
</script>
