<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">&#xe624;</span>
    </div>
    <div class="hader-input">
      <span class="iconfont">&#xe632;</span>输入城市/景点
    </div>
    <div class="hader-right">
      城市
      <span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader"
};
</script>

<style lang="less" scoped>
@import url("~@css/varibles.less");
.header {
  display: flex;
  height: @headerheight;
  color: #fff;
  line-height: 0.86rem;
  background-color: @bgcolor;
  .header-left {
    width: 0.64rem;
    float: left;
    height: 100%;
    .iconfont {
      margin-left: 0.2rem;
      font-weight: bold;
    }
  }
  .hader-input {
    flex: 1;
    background-color: #ffffff;
    border-radius: 0.1rem;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    height: 0.64rem;
    color: #cccccc;
    line-height: 0.64rem;
    padding-left: 0.2rem;
    letter-spacing: 0.02rem;
  }
  .hader-right {
    width: 1.24rem;
    height: 100%;
    float: right;
    color: #fff;
    text-align: center;
    .iconfont {
      font-size: 0.24rem;
      margin-left: -0.04rem;
    }
  }
}
</style>