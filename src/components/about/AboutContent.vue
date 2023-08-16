<template>
  <div class="content-container">
    <h4>关于我的博客</h4>
    <ul>
      <li>
        <div class="left">
          <h6>博客前台:</h6>
          <p>Vue语言</p>
          <p>UI层使用 ElementUI 、Bootstrap</p>
          <p>数据请求使用axios</p>
          <p>文章图片采用mock.js</p>
        </div>
        <div class="right">
          <h6>前端源码:</h6>
          <a href="https://github.com/freshhman/MyFirstproject">
            <img src="@/assets/about.png">
          </a>
        </div>
      </li>
    </ul>
    <hr class="dashed-hr">
    <h4>关于我自己</h4>
    <ul>
      <li>
        <div class="left">
          <h5>Name:</h5>
          <p>pappy joy</p>
          <h5>Hometown:</h5>
          <p>四川-凉山</p>
        </div>
        <div class="right">
          <h5>email:</h5>
          <p>2242747372@qq.com</p>
          <h5>Live:</h5>
          <p>chengdu</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.content-container{
  margin: 25px auto;
  padding: 20px;
  width: 50%;
  height: auto;
  border: 1px solid #b8afaf;
  border-radius: 10px;
  box-shadow: 3px 3px 3px 3px #d3cfcf;
}
ul{
  list-style: none;
  li{
    display: flex;
    .left,.right{
      flex:1
    }
    p{
      font-size: 10px;
    }
    .right img{
      width: 180px;
      height: 90px;
    }
    h5{
      font-size: 13px;
      color:rgb(61, 80, 100)
    }
  }
}
.dashed-hr{
  border-top: 1px dashed #000; /* 设置虚线样式 */
}
</style>
