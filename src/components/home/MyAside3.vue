<template>
  <div class="aside3-container">
    <div><i class="el-icon-cpu">&nbsp;</i>最新文章</div>
    <ul>
      <a href="" v-for="item in newinfo" :key="item.id">
        <li>
        <div class="left">
          <img :src="item.pic">
        </div>
        <div class="right">
          <h4>{{ item.title }}</h4>
          <p>{{ item.date }}</p>
        </div>
      </li>
      </a>
    </ul>
  </div>
</template>

<script>
import { bus } from '@/eventbus/eventbus.js'
export default {
  data () {
    return {
      newinfo: []
    }
  },
  created () {
    bus.$on('toaside3', info => {
      this.newinfo = info
    })
  }
}
</script>

<style lang="less" scoped>
.aside3-container{
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
  margin: 0;
}
ul li{
  display: flex;
  height: 75px;
  width: 100%;
  border-bottom: 1px solid #000;
  .left{
    margin-top: 15px;
    width: 86px;
    height: 45px !important;
    overflow: hidden;
    img{
      width: 100%;
      height: 100%;
      transition: all .5s;
    }
  }
  .right{
    padding: 5px;
    width: 100%;
    margin-left: 5px;
    h4,p{
      width: 100%;
      padding-right:0 !important;
      margin: 0 !important;
    }
    h4{
      margin-top: 15px !important;
      font-size: 15px;
    }
    p{
      margin-top: 15px !important;
      font-size: 10px;
    }
  }
}
a:nth-child(n):hover img{
  transform: scale(1.5);
}
</style>
