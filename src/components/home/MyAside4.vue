<template>
  <div class="aside4-container">
    <div><i class="el-icon-folder-opened"></i>&nbsp;分类</div>
    <ul>
      <li>
        <a href="">
            <div class="left">运维</div>
            <div class="right">3</div>
        </a>
      </li>
      <li>
        <a href="">
            <div class="left">科学上网</div>
            <div class="right">2</div>
        </a>
      </li>
      <li>
        <a href="">
            <div class="left">服务器</div>
            <div class="right">3</div>
        </a>
      </li>
      <li>
        <a href="">
            <div class="left">mac</div>
            <div class="right">5</div>
        </a>
      </li>
      <li>
        <a href="">
            <div class="left">破解</div>
            <div class="right">2</div>
        </a>
      </li>
      <li>
        <a href="">
            <div class="left">web前端</div>
            <div class="right">9</div>
        </a>
      </li>
      <li>
        <a href="">
            <div class="left">移动端</div>
            <div class="right">2</div>
        </a>
      </li>
      <li>
        <a href="">
            <div class="left">基本控制</div>
            <div class="right">1</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.aside4-container{
  padding: 20px;
  // text-align: center;
  width: 230px;
  height: auto;
  border: 1px solid #cac6c6;
  border-radius: 1rem;
  box-shadow: 3px 3px 3px 3px #d3cfcf;
}
ul{
  list-style: none;
  padding: 0;
  margin-top: 20px;
  overflow: hidden;
  li{
    transition: all .4s;
    margin-top: 10px;
    a{
      display: flex;
      text-align: center;
      .left{
      flex:1
    }
    .right{
      flex:1
    }
    }
  }
  li:hover{
    background-color: #419fec;
    transform: scale(1.1);
  }
}
</style>
