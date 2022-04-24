<template>
  <div class="app">
    <div class="top">
      <el-row>
        <el-col :span="4"
          ><div class="grid-content bg-purple">
            <span class="txt1">{{ stories[0].date.slice(6) }}</span>
            <span class="txt2">{{
              month[parseInt(stories[0].date.slice(4, 6)) - 1]
            }}</span>
          </div></el-col
        >
        <el-col :span="16"
          ><div class="grid-content bg-purple-light tips">
            早点休息~
          </div></el-col
        >
        <el-col :span="4"
          ><div class="grid-content bg-purple">
            <span class="iconTop"></span></div
        ></el-col>
      </el-row>
    </div>

    <div class="carousel">
      <el-carousel trigger="click" height="42rem">
        <el-carousel-item
          v-for="top_storie of stories[0].top_stories"
          :key="top_storie.id"
        >
          <img :src="top_storie.image" alt="" class="top_img" />
          <h3 class="top_title">{{ top_storie.title }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="contain">
      <div class="day" v-for="dayS of stories" :key="dayS.date">
        <h4>{{ dayS.date }}</h4>
        <show-daily-stories
          v-for="details of dayS.stories"
          :key="details.id"
          :details="details"
        ></show-daily-stories>
      </div>
    </div>
  </div>
</template>

<script>
import ShowDailyStories from "./ShowDailyStories.vue";
const axios = require("axios").default;
import _ from "lodash";

export default {
  components: { ShowDailyStories },
  name: "DailyZhihuApp",

  data() {
    return {
      stories: [],
      date: "",
      month: [
        "一月",
        "二月",
        "三月",
        "四月",
        "五月",
        "六月",
        "七月",
        "八月",
        "九月",
        "十月",
        "十一月",
        "十二月",
      ],
      i: 0,
    };
  },

  methods: {
    async getAxios(url) {
      try {
        let response = await axios.get(url);
        let flag = this.stories.some((e) => {
          return e.date === response.data.date;
        });
        if (!flag) {
          this.stories.push(response.data);
          this.date = response.data.date;
        }
      } catch (error) {
        console.log(error);
      }
    },

    judgeIsScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      let scroll = scrollTop - this.i;
      this.i = scrollTop;
      return scroll > 0 ? true : false;
    },
  },

  mounted() {
    this.getAxios("api/api/3/stories/latest");
    console.log("hello")

    //使用第三方库 出现问题：没有办法解决当网络延时，重复发送相同日期的请求，造成重复数据
    // 这里在收到response的时候做判断
    window.addEventListener(
      "scroll",
      _.throttle(() => {
        if (this.judgeIsScroll()) {
          this.getAxios("api/api/3/news/before/" + this.date);
          console.log("我被执行了");
        }
      }, 500)
    );
  },
};
</script>

<style scoped>
/* carcoursel */
.el-carousel {
  top: -10px;
}

/* .el-carousel__item {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  } */

.top_img {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: auto;
}

.top_title {
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 70px;
  text-align: left;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  color: #fff;
  background-color: gray;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  height: 70px;
  line-height: 50px;

  min-height: 36px;
}

.top {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 50px;
  z-index: 10;
}

.el-row {
  height: 55px;
}

.tips {
  padding-left: 35px;
  line-height: 61px;
  text-align: left;
  font-size: 30px;
  font-weight: 500;
}

.iconTop {
  position: absolute;
  top: 5px;
  right: 14px;
  height: 40px;
  width: 40px;
  background-color: deeppink;
  border-radius: 50%;
}

.txt1 {
  position: absolute;
  top: -7px;
  left: 47px;
  font-size: 40px;
  font-weight: 200;
}
.txt2 {
  position: absolute;
  top: 26px;
  left: 55px;
  font-size: 25px;
}
</style>