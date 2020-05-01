<template>
  <div>
    <div class="title">周末去哪</div>
    <ul>
      <li class="item" v-for="item of recommentList " :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "HomeWeekend",
  data() {
    return {
      recommentList: [
        {
          id: "0001",
          title: "北京-泰国",
          desc: "含往返飞机票(含税)+5晚住宿*7天跟团游*超级划算",
          imgUrl:
            "https://imgs.qunarzz.com/sight/source/1603/6d/2f67ae0659f41f.jpg_r_640x214_bf6cbd0b.jpg"
        },
        {
          id: "0002",
          title: "北京-三亚",
          desc: "含往返飞机票(含税)+5晚住宿*7天跟团游*超级划算",
          imgUrl:
            "https://imgs.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg"
        },
        {
          id: "0003",
          title: "北京-日本",
          desc: "含往返飞机票(含税)+5晚住宿*7天跟团游*超级划算",
          imgUrl:
            "https://imgs.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.title {
  margin-top: 0.2rem;
  line-height: 0.8rem;
  background: #eee;
  text-indent: 0.2rem;
}

.item-img-wrapper {
  overflow: hidden;
  height: 0;
  padding-bottom: 33.9%;
  .item-img {
    width: 100%;
  }
}

.item-info {
  padding: 0.1rem;

  .item-title {
    line-height: 0.54rem;
    font-size: 0.32rem;
    ellipsis();

    .item-desc {
      line-height: 0.4rem;
      color: #ccc;
      ellipsis();
    }
  }
}
</style>