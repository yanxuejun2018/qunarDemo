<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) in pages" :key="index">
        <div class="icon" v-for="(item, index) in page" :key="index">
          <div class="icon-img">
            <img :src="item.image" alt srcset>
          </div>
          <p>{{item.title}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "homeIcons",
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        }
      },
      navList: [
        {
          image:
            "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          title: "热门景点"
        },
        {
          image:
            "http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
          title: "一日游"
        },
        {
          image:
            "http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
          title: "武汉必游"
        },
        {
          image:
            "http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png",
          title: "亲子游"
        },
        {
          image:
            "http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png",
          title: "游乐场"
        },
        {
          image:
            "http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png",
          title: "动植物园"
        },
        {
          image:
            "http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png",
          title: "踏青赏花"
        },
        {
          image:
            "http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png",
          title: "武汉欢乐谷"
        },
        {
          image:
            "http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png",
          title: "极地海洋"
        },
        {
          image:
            "http://img1.qunarzz.com/piao/fusion/1803/17/99402a22ce4af302.png",
          title: "东湖绿道"
        }
      ]
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.navList.forEach((item, index) => {
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

<style lang="less" scoped>
@import url("~@css/varibles.less");
@import url("~@css/mixins.less");
.icons /deep/ .swiper-pagination-bullet-active {
  background: #666;
}
.icons /deep/ .swiper-container {
  width: 100%;
  height: 0;
  padding-bottom: 50%;
}
.icon {
  position: relative;
  width: 25%;
  height: 0;
  float: left;
  overflow: hidden;
  padding-bottom: 25%;
  .icon-img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0.48rem;
    box-sizing: border-box;
    padding: 0.2rem;
    img {
      width: 78%;
      display: block;
      margin: 0 auto;
    }
  }
  p {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    line-height: 0.48rem;
    height: 0.48rem;
    color: @darktextcolor;
    text-align: center;
    letter-spacing: 0.005rem;
    #ellipsis();
  }
}
</style>