<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" :key="item.id" v-for="item of page">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" />
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeIcons",
  data() {
    return {
      iconList: [
        {
          id: "0001",
          desc: "酒店住宿",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/hotel.png"
        },
        {
          id: "0002",
          desc: "交通出行",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/flight.png"
        },
        {
          id: "0003",
          desc: "度假",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/package.png"
        },
        {
          id: "0004",
          desc: "景点门票",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/piao.png"
        },
        {
          id: "0005",
          desc: "海外旅行购票/攻略",
          imgUrl:
            "https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png"
        },
        {
          id: "0006",
          desc: "低价机票",
          imgUrl:
            "https://picbed.qunarzz.com/a36d2288f19e54562338f4d8ef986288.png"
        },
        {
          id: "0007",
          desc: "自由行",
          imgUrl:
            "https://picbed.qunarzz.com/ae617a31e0bd5803d76918b817f6d942.png"
        },
        {
          id: "0008",
          desc: "旅游攻略",
          imgUrl:
            "https://picbed.qunarzz.com/1316dc82d1ce6259686d5a68880e5a9d.png"
        },
        {
          id: "0009",
          desc: "一日游",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/train.png"
        }
      ]
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';

.icons {
  overflow: hidden;
  height: 0;
  padding-bottom: 50%;
}

.icon {
  position: relative;
  overflow: hidden;
  float: left;
  width: 25%;
  padding-bottom: 25%;
  height: 0;
}

.icon-img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0.4rem;
  box-sizing: border-box;
  padding: 0.1rem;
}

.icon-img-content {
  display: block;
  margin: 0 auto;
  height: 100%;
}

.icon-desc {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 0.44rem;
  line-height: 0.44rem;
  text-align: center;
  color: $darkTextColor;
  ellipsis();
}
</style>