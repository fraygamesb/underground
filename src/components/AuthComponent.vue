<template>
  <div>
    <GoogleLogin :callback="callback"/>
  </div>
</template>

<script>
import {decodeCredential} from 'vue3-google-login'

export default {
  name: "AuthComponent",
  methods: {
    callback(response) {
      const userData = decodeCredential(response.credential)
      console.log("Handle the userData", userData)
    }
  },
}

</script>

<style scoped>

</style>