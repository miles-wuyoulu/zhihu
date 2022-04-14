<template>
  <div class="show">
    <div class="s-l">
      <h2 class="s-h">{{details.title}}</h2>
      <p class="s-p">{{details.hint}}</p>
    </div>

    <img :src="details.images[0]" alt="图片加载中" class="s-img" />
  </div>
</template>

<script>
export default {
  name: "ShowDailyStories",
  props: ["details"],
};
</script>

<style scoped>
.show {
  position: relative;
  width: 100%;
  height: 110px;
  padding: 0 10px;
}

.s-l {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 70%;
  padding-left: 10px;
  text-align: left;
}

.s-h {
  font-size: 20px;
  font-weight: 300;
}

.s-p {
  font-size: 10px;
  font-weight: 300;
}

.s-img {
  position: absolute;
  top: 0px;
  right: 33px;
  height: 100px;
  width: 100px;
}
</style>