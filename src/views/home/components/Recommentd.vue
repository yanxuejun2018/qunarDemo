<template>
  <div class="recommentd">
    <div class="title">
      <van-icon name="like"/>热销推荐
    </div>
    <ul>
      <li class="item border-bottom" v-for="(item, index) in recommentdList" :key="index">
        <img :src="item.image" alt srcset>
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
  name: "HomeRecommentd",
  data() {
    return {
      recommentdList: [
        {
          image:
            "http://img1.qunarzz.com/sight/p0/1501/10/1012e4a2c398409c.water.jpg_200x200_366b12f8.jpg",
          title: "云雾山",
          desc: "风景如画云雾山"
        },
        {
          image:
            "http://img1.qunarzz.com/sight/p0/1501/f8/f8413365ed3e77ab.water.jpg_200x200_db81bbda.jpg",
          title: "木兰草原",
          desc: "风景如画木兰草原"
        },
        {
          image:
            "http://img1.qunarzz.com/sight/p0/1904/67/67de943a3d97215ba3.img.jpg_200x200_92497328.jpg",
          title: "武汉欢乐谷",
          desc: "风景如画武汉欢乐谷"
        },
        {
          image:
            "http://img1.qunarzz.com/sight/p0/1504/47/4730a0c01664b63d.water.jpg_200x200_d7f52253.jpg",
          title: "武汉海昌极地海洋公园",
          desc: "风景如画武汉海昌极地海洋公园"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
@import url("~@css/mixins.less");
.title {
  margin-top: 0.2rem;
  line-height: 0.8rem;
  background-color: #eee;
  text-indent: 0.2rem;
  letter-spacing: 0.03rem;
  i {
    color: red;
    margin-right: 0.06rem;
  }
}
.item {
  display: flex;
  width: 100%;
  height: 1.9rem;
  overflow: hidden;

  img {
    width: 1.7rem;
    height: 1.7rem;
    padding: 0.1rem;
  }
  .item-info {
    min-width: 0;
    flex: 1;
    padding: 0.1rem;
    .item-title {
      line-height: 0.54rem;
      font-size: 0.32rem;
      #ellipsis();
    }
    .item-desc {
      line-height: 0.4rem;
      color: #ccc;
      #ellipsis();
    }
    .item-button {
      line-height: 0.44rem;
      padding: 0 0.2rem;
      border-radius: 0.06rem;
      margin-top: 0.16rem;
      color: #fff;
      background-color: #ff9300;
    }
  }
}
</style>