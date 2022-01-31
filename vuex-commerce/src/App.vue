<template>
  <div id="nav">
    <span class="spacer">
      <router-link to="/">Home</router-link>
    </span>
    <span class="spacer">
      <router-link to="/contact">Contact</router-link>
    </span>
    <span class="spacer">
      <router-link to="/admin">Admin</router-link>
    </span>
    <span class="float-lg-end">cart (0)</span>
  </div>
  <div class="container-fluid">
    <router-view />
  </div>
</template>

<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.spacer {
  padding: 10px;
  color: #2c3e50;
}
</style>
