<template>
  <div class="home">
    <HomeHeader></HomeHeader>
    <HomeSwiper></HomeSwiper>
    <HomeIcons></HomeIcons>
    <HomeRecommentd></HomeRecommentd>
    <HomeWeekend></HomeWeekend>
  </div>
</template>

<script>
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
import HomeIcons from "./components/Icons";
import HomeRecommentd from "./components/Recommentd";
import HomeWeekend from "./components/Weekend";
export default {
  name: "home",
  components: { HomeHeader, HomeSwiper, HomeIcons, HomeRecommentd, HomeWeekend }
};
</script>

<style lang="less" scoped>
</style>

