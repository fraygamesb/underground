<template>
  <auth-component></auth-component>
</template>

<script>
import AuthComponent from "@/components/AuthComponent";
export default {
  name: 'App',
  components: {
    AuthComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
