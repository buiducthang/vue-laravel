<template>
  
  <div id="app">
    <div class="row">
    <div class="col-xs-12">
        <router-link to="/">New Comment</router-link>
        <router-link to="/comments">Get Comments</router-link>
        <router-link to="/signup">Sign Up</router-link>
        <router-link to="/signin">Sign In</router-link>
    </div>
  </div>
  <hr>
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
