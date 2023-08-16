<template>
  <div class="aside2">
    <div class="title"><i class="el-icon-bell"></i>&nbsp;&nbsp;<span>公告</span></div>
    <div class="light">
      <ul>
        <li><p>欢迎光临我写的网页,技术指导twitter搜索AlanGrady</p></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
.aside2{
  padding: 20px;
  // text-align: center;
  width: 230px;
  height: 80px;
  border: 1px solid #cac6c6;
  border-radius: 1rem;
  box-shadow: 3px 3px 3px 3px #d3cfcf;
  overflow: hidden;
  .title{
    i{
      font-size: 20px;
      color: #f00;
    }
  }
}
.light{
    width: 430px;
    overflow: hidden;
    height: 60px;
  li {
      list-style: none;
    }
  }
.light ul {
  padding: 0;
  margin: 0;
  display: flex;
  animation: move 6s infinite linear;
}

    /* 定义位移动画；ul使用动画；鼠标悬停暂停动画 */
@keyframes move {
  0% {
    transform: translate(50%);
  }
  100% {
    transform: translate(-430px);
  }
}
.title{
  i{
    animation: sizechange .5s infinite linear;
  }
}
@keyframes sizechange {
  0%{
    transform: scale(1);
  }
  100%{
    transform: scale(1.2);
  }
}
</style>
