<template>
  <div class="recommentd">
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="(item, index) in weekendList" :key="index">
        <div class="item-img-wrapper">
          <img :src="item.image" alt srcset>
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
      weekendList: [
        {
          image:
            "http://img1.qunarzz.com/sight/source/1505/d5/abe8a48a6ef8bf.jpg_r_640x214_7c41cc81.jpg",
          title: "云雾山",
          desc: "风景如画云雾山"
        },
        {
          image:
            "http://img1.qunarzz.com/sight/source/1811/6d/5afbf529076ef6.jpg_r_640x214_7414b151.jpg",
          title: "木兰草原",
          desc: "风景如画木兰草原"
        },
        {
          image:
            "http://img1.qunarzz.com/sight/source/1505/fe/2533da6335a59d.jpg_r_640x214_9fb62f4b.jpg",
          title: "武汉欢乐谷",
          desc: "风景如画武汉欢乐谷"
        },
        {
          image:
            "http://img1.qunarzz.com/sight/source/1505/4f/95a94c90ef3521.jpg_r_640x214_345412f9.jpg",
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
  text-indent: 0.5rem;
  i {
    color: red;
    margin-right: 0.06rem;
  }
}
.item {
  width: 100%;
//   height: 1.9rem;
//   overflow: hidden;
  .item-img-wrapper {
    height: 0;
    overflow: hidden;
    padding-bottom: 33.9%;
    img {
      width: 100%;
    }
  }
  .item-info {
    padding: 0.1rem;
    .item-title {
      line-height: 0.54rem;
      font-size: 0.32rem;
      #ellipsis();
    }
    .item-desc {
      line-height: 0.4rem;
      color: #666;
      font-size: 0.25rem;
      #ellipsis();
    }
  }
}
</style>