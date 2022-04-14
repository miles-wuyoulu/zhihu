<template>
  <div id="app">
    <daily-zhihu-main/>
  </div>
</template>

<script>
import DailyZhihuMain from './components/DailyZhihuMain.vue'

export default {
  name: "App",
  components: {
    DailyZhihuMain,
  },
};
</script>

<style>
@import './common/normalize.css';
</style>
