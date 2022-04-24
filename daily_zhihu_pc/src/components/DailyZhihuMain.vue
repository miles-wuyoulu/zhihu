<template>
  <div class="main">
    <!-- 顶部 -->
    <div class="header-top">
      <div class="contain-box">
        <div class="logo"></div>
        <el-button autofocus class="top_button1">App 下载</el-button>
        <el-button class="top_button2">浏览内容</el-button>
      </div>
    </div>
    <!-- 头部 -->
    <div class="header">
      <div class="h-contain-box">
        <div class="h-left">
          <transition name="hl-show" appear>
            <img src="../assets/phone_sample.png" alt="头部照片" />
          </transition>
        </div>

        <div class="h-right">
          <transition name="hr-show" appear>
            <div>
              <h2>每天三次 每次七分钟</h2>
              <p>
                在中国，资讯类移动应用的人均阅读时长是 5 分钟，而在知乎日报，
                这个数字是21。
              </p>
              <div class="h-right-button">
                <div class="ercode">
                  <img src="../assets/h_img1.png" alt="二维码" />
                </div>
                <ul>
                  <li>
                    <a href=" https://apps.apple.com/cn/app/id639087967">
                      <img src="../assets/h_img2.png" alt="二维码" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.wandoujia.com/apps/604355">
                      <img src="../assets/h_img3.png" alt="二维码" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>

    <!-- :col="w < 900 ? 1 : 3"
          :width="w < 900 ? 900 : 290" -->

    <!-- <section class="s-contain-box clearfix">
      <div class="contain-box">
        <waterfall
          :col="3"
          :width="290"
          :gutterWidth="45"
          :data="stories[0].stories"
        >
          <daily-zhihu-story
            v-for="story of stories[0].stories"
            :key="story.id"
            :story="story"
          ></daily-zhihu-story>
        </waterfall>
      </div>
    </section> -->

    <section class="s-contain-box clearfix">
      <div class="s-h">
        <h2>浏览内容</h2>
        <h2>最新内容</h2>
      </div>
      <div class="contain-box">
        <waterfall
          :col="w < 900 ? 1 : 3"
          :width="290"
          :gutterWidth="45"
          :lazyDistance="300"
          :data="stories"
        >
          <daily-zhihu-story
            v-for="story of stories"
            :key="story.date"
            :story="story.stories"
          ></daily-zhihu-story>
        </waterfall>
      </div>

      <div class="s-f">
        <p>更多精彩内容可在知乎日报应用中查看</p>
      </div>
    </section>

    <footer class="clearfix">
      <div class="contain-box">
        <div class="footer-l">
          <p>
            知乎日报是一款拥有千万用户的资讯类客户端，每日提供来自知乎社区的精选问答，还有国内一流媒体的专栏特稿。
          </p>

          <p>
            主题日报包括动漫、设计、大公司、游戏、财经、电影、电子音乐、互联网安全等丰富内容，为业内人和资深爱好
            者推荐各领域最精彩文章，满足高质量阅读需求。
          </p>

          <p>在知乎日报，告别浮躁，重获阅读的愉悦。</p>

          <p>京 ICP 证 110745 号</p>

          <p>
            <img src="../assets/footer.png" alt="" /> 京公网安备 11010802010035
            号
          </p>

          <p>©zhihu 2015</p>
        </div>
        <div class="footer-r">
          <img src="../assets/footer_img.png" alt="" />
        </div>
      </div>
    </footer>

    <el-backtop target=".main">up</el-backtop>
  </div>
</template>

<script>
import DailyZhihuStory from "./DailyZhihuStory.vue";
const axios = require("axios").default;

export default {
  name: "DailyZhihuMain",
  components: { DailyZhihuStory },
  data() {
    return {
      w: document.body.clientWidth || document.documentElement.clientWidth,
      stories: [],
    };
  },

  methods: {
    async getAxios() {
      try {
        let response1 = await axios.get("api/api/3/stories/latest");
        this.stories.push(response1.data);
      } catch (error) {
        console.log(error);
      }
      try {
        let response1 = await axios.get("api/api/3/news/before/20220409");
        this.stories.push(response1.data);
      } catch (error) {
        console.log(error);
      }

      try {
        let response1 = await axios.get("api/api/3/news/before/20220408");
        this.stories.push(response1.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    window.onresize = () => {
      this.w =
        document.body.clientWidth || document.documentElement.clientWidth;
    };

    this.getAxios();
    // axios
    //   .get("api/api/3/stories/latest")
    //   .then((response) => {
    //     this.stories.push(response.data);
    //     console.log(this.stories);
    //     console.log(response.data);
    //     return axios.get("api/api/3/news/before/20220409");
    //   })
    //   .then((response) => {
    //     this.stories.push(response.data);
    //     return axios.get("api/api/3/news/before/20220408");
    //   })
    //   .then((response) => {
    //     this.stories.push(response.data);
    //   });
  },
};
</script>

<style scoped>
.main {
  height: 100vh;
  overflow-y: auto;
}

.s-contain-box {
  margin: 0 auto;
  width: 960px;
}

section .s-h {
  height: 60px;
}

section .s-h h2:first-child {
  float: left;
}

section .s-h h2:last-child {
  float: right;
}

section .s-f {
  width: 100%;
  height: 62px;
  text-align: center;
  font-size: 20px;
  color: #15527b;
  background-color: #e8eef2;
  border-radius: 3px;
  line-height: 62px;
  margin: 30px 0;
}

.header-top {
  position: fixed;
  left: 0;
  top: 0;
  background-color: #fff;
  width: 100%;
  height: 78px;
  z-index: 2;
  overflow-y: auto;
}

/* 定义版心 */
.contain-box {
  margin: 0 auto;
  width: 960px;
  height: 100%;
}

.logo {
  overflow: hidden;
  width: 220px;
  height: 100%;
  background: transparent url(../assets/top_logo.png) no-repeat 0 13px;
}

.top_button1 {
  border: 0px;
  float: right;
  margin-top: -56px;
  margin-right: 100px;
}

.top_button2 {
  border: 0px;
  float: right;
  margin-top: -56px;
  margin-right: -30px;
}

.header {
  position: relative;
  margin-top: 78px;
  height: 460px;
  background-color: #008bed;
  z-index: 1;
}

.h-contain-box {
  position: relative;
  margin: 0 auto;
  width: 960px;
  height: 100%;
}

.h-left {
  position: absolute;
  width: 409px;
  height: 448px;
  left: 31px;
  bottom: 0;
  overflow: hidden;
}

.hl-show-enter {
  opacity: 0;
  transform: translateY(448px);
}
.hl-show-enter-to {
  opacity: 1;
  transform: translateY(0px);
}

.hl-show-enter-active {
  transition: 0.5s linear;
}

.h-right {
  position: absolute;
  right: 0;
  bottom: 30px;
  width: 392px;
  overflow: hidden;
}

.hr-show-enter {
  opacity: 0;
  transform: translateX(392px);
}
.hr-show-enter-to {
  opacity: 1;
  transform: translateX(0px);
}

.hr-show-enter-active {
  transition: 0.6s linear;
}

.h-right h2 {
  font-size: 40px;
  color: #fff;
  font-weight: 300;
  margin-bottom: 10px;
}

.h-right p {
  font-size: 16px;
  color: #99d1f8;
  margin-bottom: 20px;
}

.h-right-button {
  height: 146px;
  width: 100%;
}

.ercode {
  float: left;
}

.h-right-button ul {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  float: right;
  height: 100%;
  margin: 0;
}

.h-right-button ul li {
  position: relative;
}
.clearfix:before,
.clearfix:after {
  content: "";
  display: table;
}

.clearfix:after {
  clear: both;
}

.clearfix {
  *zoom: 1;
}

footer {
  height: 267px;
  width: 100%;
  background-color: rgb(229, 229, 229);
}

.footer-l {
  float: left;
  line-height: 26px;
  font-size: 14px;
  color: #666;
  text-align: left;
  width: 715px;
}

.footer-l p {
  margin: 12px 0;
}

.footer-l p img {
  vertical-align: middle;
}

.footer-r {
  float: right;
  width: 147px;
  height: 177px;
  margin-top: 50px;
}
</style>