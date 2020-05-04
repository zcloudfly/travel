<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img
        class="banner-img"
        src="//img1.qunarzz.com/sight/p0/1903/5d/5dcaf453dfd6f5dba3.img.jpg_600x330_4f4a22ad.jpg"
      />
      <div class="banner-info">
        <div class="banner-title">北京动物园(AAAA景区)</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe647;</span>
          39
        </div>
      </div>
    </div>
    <common-gailary 
    :imgs="imgs"
    v-show="showGailary"
    @close="gailaryClose"
    ></common-gailary>
  </div>
</template>

<script>
import CommonGailary from "common/gailary/Gailary";
export default {
  name: "DetailBanner",
  data() {
    return {
        showGailary:false,

      imgs: [
        "http://img1.qunarzz.com/sight/p0/1910/59/59a900f72a04ecb4a3.img.jpg_350x240_d1577d73.jpg",
        "http://img1.qunarzz.com/sight/p0/1910/8a/8a5769748dd99a49a3.img.jpg_350x240_8480a477.jpg"
      ]
    };
  },
  methods:{
      handleBannerClick(){
          this.showGailary=true
      },
      gailaryClose(){
          this.showGailary=false
      }
  },
  components: {
    CommonGailary
  }
};
</script>

<style lang="stylus" scoped>
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;

  .banner-img {
    width: 100%;
  }

  .banner-info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    color: #fff;
    line-height: 0.6rem;
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));

    .banner-title {
      flex: 1;
      font-size: 0.32rem;
      padding: 0 0.2rem;
    }

    .banner-number {
      margin-top: 0.14rem;
      padding: 0 0.4rem;
      height: 0.32rem;
      line-height: 0.4rem;
      border-radius: 0.2rem;
      background: rgba(0, 0, 0, 0.8);
      font-size: 0.24rem;

      .banner-icon {
        font-size: 0.24rem;
      }
    }
  }
}
</style>