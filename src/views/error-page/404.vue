<template>
  <div id="wrap">
    <div style="float: left">
      <img src="../../assets/404.png" alt="404.life" width="910px" />
    </div>
    <div class="text">
      <p style="color: #0086f0; font-size: 26px; margin-bottom: 6px">很抱歉</p>
      <p style="color: #909399; font-size: 22px; margin-bottom: 20px">
        您访问的页面不存在
      </p>
      <a-button shape="round" type="primary" @click="goBackHome"
        ><a-icon type="home" />返回首页</a-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Page404",
  methods: {
    goBackHome() {
      this.$router.replace("/");
    },
  },
};
</script>

<style scoped>
@media screen and (min-width: 768px) {
  #wrap {
    width: 1180px;
    height: 407px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -224px;
    margin-left: -590px;
    display: flex;
    align-items: center;
  }

  #wrap .text {
    float: right;
    position: relative;
    left: -125px;
    top: 10px;
  }
}

@media screen and (min-width: 320px) and (max-width: 767px) {
  html,
  body {
    height: 100%;
  }

  body {
    display: flex;
    align-items: center;
  }

  #wrap,
  #wrap img {
    width: 100%;
    margin-bottom: 60px;
  }

  #wrap .text {
    text-align: center;
  }
}
</style>
