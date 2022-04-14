<template>
  <div class="app">
    <div class="top">
      <el-row>
        <el-col :span="4"
          ><div class="grid-content bg-purple">
            <span class="txt1">11</span> <span class="txt2">四月</span>
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
      <el-carousel trigger="click" height="250px">
        <el-carousel-item
          v-for="top_stories of stories[0].top_stories"
          :key="top_stories.id"
        >
          <img :src="top_stories.image" alt="" class="top_img" />
          <h3 class="top_title">{{ top_stories.title }}</h3>
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

export default {
  components: { ShowDailyStories },
  name: "DailyZhihuApp",

  data() {
    return {
      stories: [],
      date: +new Date(),
      i: 0,
      flag: true,
    };
  },

  created() {
    axios.get("api/api/3/stories/latest").then((response) => {
      this.stories.push(response.data);
      //     console.log(this.stories);
      //     console.log(response.data);
      //    console.log(this.stories[0].top_stories)
    });
  },

  mounted() {
    // console.log(this.date)
    window.addEventListener("scroll", () => {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      let scroll = scrollTop - this.i;
      this.i = scrollTop;
      if (scroll < 0) {
        // console.log('up')
      } else {
        if (this.flag) {
          setTimeout(() => {
            this.date -= 24 * 60 * 60 * 1000;
            let curdate = new Date(this.date);
            let yy = curdate.getFullYear() + "";
            let mm = curdate.getMonth() + 1;
            mm = mm < 10 ? "0" + mm : "" + mm;

            let dd = curdate.getDate();
            dd = dd < 10 ? "0" + dd : "" + dd;

            let format = yy + mm + dd;
            console.log(typeof format, format);

            axios.get("api/api/3/news/before/" + format).then((response) => {
              this.stories.push(response.data);
              //   console.log(this.stories);
            });
            this.flag = true;
          }, 500);
        }

        this.flag = false;
        console.log("down");
      }
    });
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
  height: 100%;
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

/* top */
/* .el-row {
    

}
.el-col {

} */

.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  height: 50px;
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

.tips {
  padding-left: 15px;
  line-height: 50px;
  text-align: left;
  font-size: 20px;
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
  left: 20px;
  font-size: 26px;
  font-weight: 200;
}
.txt2 {
  position: absolute;
  top: 16px;
  left: 17px;
  font-size: 15px;
}
</style>