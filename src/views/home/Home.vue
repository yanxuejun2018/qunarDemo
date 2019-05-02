<template>
  <div class="home">
    <HomeHeader></HomeHeader>
    <HomeSwiper></HomeSwiper>
    <HomeIcons></HomeIcons>
  </div>
</template>

<script>
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
import HomeIcons from "./components/Icons";
export default {
  name: "home",
  components: { HomeHeader, HomeSwiper, HomeIcons }
};
</script>

<style lang="less" scoped>
</style>

