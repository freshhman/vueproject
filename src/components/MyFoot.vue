<template>
  <div class="foot-container">
    <p>©2018 - 2020 by <a href="#">AlanGrady</a> 访客(总数/今日): <span>11480 / 3</span>, 总访问量: <span> 16004</span></p>
    <p class="last"><a href="">beian蜀ICP备2021007490号-1</a></p>
    <div>
      <img src="@/assets/image/foot.gif" alt="">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.foot-container{
  height: 100px;
  width: 100%;
  margin: 30px auto;
  text-align: center;
  p a{
    color:#1d91f0
  }
}
p{
  margin-top: 30px;
  height: 0;
}
.last{
  font-size: 15px;
  color:#1d91f0
}
div img{
  width: 50px;
  height: 50px;
}
</style>
