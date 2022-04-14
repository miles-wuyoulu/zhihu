<template>
  <div id="app">
    <daily-zhihu-app/>
  </div>
</template>

<script>
import DailyZhihuApp from './components/DailyZhihuApp.vue'


export default {
  name: 'App',
  components: {
    DailyZhihuApp
    
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

html,body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
