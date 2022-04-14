<template>
  <div>
    <div class="box" v-for="details of story" :key="details.id">
      <el-card :body-style="{ padding: '14px' }">
        <img :src="details.images[0]" class="image" />
        <div style="padding: 14px">
          <span>{{ details.title }}</span>
        </div>
      </el-card>

      <!-- <el-card :body-style="{ padding: '14px' }"  >
      <img
        :src="story.images[0]"
        class="image"
      />
      <div style="padding: 14px">
        <span>{{story.title}}</span>
      </div>
    </el-card> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "DailyZhihuStory",
  props: ["story"],
};
</script>

<style scoped>
.box {
  margin-top: 20px;
}

.image {
  width: 100%;
  display: block;
}
</style>