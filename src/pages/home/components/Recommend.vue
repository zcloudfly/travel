<template>
  <div>
    <div class="retcommend-title">热销推荐</div>
    <ul>
      <li class="item" v-for="item of list " :key="item.id">
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "HomeRecommend",
  props:{
      list:Array
  },
//   data() {
//     return {
//       recommentList: [
//         {
//           id: "0001",
//           title: "北京-泰国",
//           desc: "含往返飞机票(含税)+5晚住宿*7天跟团游*超级划算",
//           imgUrl:
//             "//imgs.qunarzz.com/p/p48/201302/28/bc44faa497db0dcf93835fbb.jpg_256x160_0ba13461.jpg"
//         },
//         {
//           id: "0002",
//           title: "北京-三亚",
//           desc: "含往返飞机票(含税)+5晚住宿*7天跟团游*超级划算",
//           imgUrl:
//             "//imgs.qunarzz.com/p/p66/201304/17/384810d022dd28f793835fbb.jpg_256x160_6a7ec251.jpg"
//         },
//         {
//           id: "0003",
//           title: "北京-日本",
//           desc: "含往返飞机票(含税)+5晚住宿*7天跟团游*超级划算",
//           imgUrl:
//             "//imgs.qunarzz.com/p/p29/201302/28/3d20251a1b60350a93835fbb.jpg_256x160_e8f468b0.jpg"
//         }
//       ]
//     };
//   }
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.retcommend-title {
  margin-top: 0.2rem;
  line-height: 0.8rem;
  background: #eee;
  text-indent: 0.2rem;
}

.item {
  display: flex;
  height: 1.9rem;

  .item-img {
    width: 1.7rem;
    height: 1.7rem;
    padding: 0.1rem;
  }

  .item-info {
    flex: 1;
    padding: 0.1rem;
    min-width: 0;

    .item-title {
      line-height: 0.54rem;
      font-size: 0.32rem;
      ellipsis();
    }

    .item-desc {
      line-height: 0.4rem;
      color: #ccc;
      ellipsis();
    }

    .item-button {
      line-height: 0.44rem;
      margin-top: 0.16rem;
      background: #ff9300;
      padding: 0 0.2rem;
      border-radius: 0.06rem;
      color: #fff;
    }
  }
}
</style>