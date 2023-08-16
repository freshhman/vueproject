<template>
  <div class="app-container" id="top">
    <!-- 导航菜单区域 -->
    <div class="nav" v-show="isDivVisible">
      <Nav :value="searchisshow" @sendvalue="getvalue"></Nav>
    </div>
    <!-- 搜索弹出区域 -->
    <div class="search" v-if="searchisshow" @touchmove.prevent @mousewheel.prevent >
      <div class="one">
        <p>不搜一下你怎么知道有没有呢</p>
        <i class="el-icon-close" @click="searchisshow = !searchisshow" ></i>
      </div>
      <hr>
      <div class="two">
        <input type="text">
        <div><i class="el-icon-search"></i></div>
      </div>
      <div class="three"></div>
    </div>
    <router-view></router-view>
    <div class="totop" v-show="topshow">
      <a href="#top"><i class="el-icon-top"></i></a>
    </div>
    <br>
    <hr>
    <Foot></Foot>
  </div>
</template>

<script>
import Nav from '@/components/MyNavbar.vue'
import Foot from '@/components/MyFoot.vue'
export default {
  name: 'MyApp',
  data () {
    return {
      isDivVisible: true, // 默认显示div组件
      topshow: false,
      searchisshow: false
    }
  },
  components: {
    Nav,
    Foot
  },
  methods: {
    getvalue (v) {
      this.searchisshow = v
    },
    handleScroll () {
      if (window.pageYOffset > this.lastScrollPosition) {
        // 向下滚动
        this.isDivVisible = false
      } else {
        // 向上滚动
        this.isDivVisible = true
      }
      this.lastScrollPosition = window.pageYOffset
    },
    ascroll () {
      if (window.pageYOffset > 800) {
        this.topshow = true
      } else {
        this.topshow = false
      }
    },
    preventScroll (event) {
      event.preventDefault()
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('scroll', this.ascroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('scroll', this.ascroll)
  }

}
</script>

<style lang="less" scoped>
.app-container{
  position: relative;
}
.totop{
  position: fixed;
  top: 90%;
  left: 95%;
  a{
    font-size: 40px;
    font-weight: 700;
  }
}
hr{
  color: aqua;
}
.search{
  transform: translate(-50%,-50%);
  background-color:#fff;
  top: 400px;
  left: 50%;
  position: fixed;
  width: 550px;
  height: 350px;
  z-index: 999;
  border-radius: 10px;
  box-sizing: border-box;
  .one{
    padding: 10px 20px;
    height: 40px;
    display: flex;
    p{
      flex:1
    }
    i{
      cursor: pointer;
    }
  }
  .two{
    padding: 10px;
    display: flex;
    input{
      flex:1;
      height: 30px;
      border: 1px solid #000;
    }
    div i{
      cursor: pointer;
      text-align: center;
      line-height: 30px;
      width: 50px;
    }
    div{
      border: 1px solid #000;
    }
  }
  .three{
    margin: 10px;
    border: 1px solid #000;
    height: 50%;
    // width: 90%;
    box-sizing: border-box;
    background-image: url('@/assets/nodata.png');
    background-repeat:no-repeat ;
    background-position: 50% 50% ;
  }
}
</style>
