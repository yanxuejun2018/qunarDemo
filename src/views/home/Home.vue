<template>
  <div class="home">
    <HomeHeader></HomeHeader>
    <HomeSwiper></HomeSwiper>
  </div>
</template>

<script>
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
export default {
  name: "home",
  components: { HomeHeader, HomeSwiper }
};
</script>

<style lang="less" scoped>
</style>

