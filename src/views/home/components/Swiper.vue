<template>
  <div class="wapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="(item, index) in swiperList" :key="index">
        <img :src="item.imgUrl" alt srcset>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        autoplay: true,
        loop: true
      },
      swiperList: [
        {
          imgUrl:
            "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/17e2352b857f66e9d2948e98dc483bc2.jpg_750x200_2857d0a3.jpg"
        },
        {
          imgUrl:
            "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/5daa78ddf9a3e3aca32195e079b9545d.jpg_750x200_3aeaa5c2.jpg"
        },
        {
          imgUrl:
            "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/7a2314caa82d064842768e92cdf72255.jpg_750x200_7e586aee.jpg"
        },
        {
          imgUrl:
            "http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/e9f92741ef8b1cb0472ced96150d0d1c.jpg_750x200_1f0a2392.jpg"
        }
      ]
    };
  },
  components: {}
};
</script>

<style lang="less" scoped>
.wapper /deep/ .swiper-pagination-bullet-active {
  background: #fff;
}
.wapper {
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 27%; //31.25%
  background: #eee;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>