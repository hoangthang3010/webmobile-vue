<template>
  <!-- <Homepage/> -->
  <Header/>
  <router-view/>
</template>

<script>
// import Homepage from './main/homepage/Homepage.vue'
import Header from './components/header/Header.vue'
import './App.scss'

export default {
  name: 'App',
  components: {
    // Homepage,
    Header
  }
}
</script>

<style>
</style>
