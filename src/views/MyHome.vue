<template>
  <div class="home-container">
    <HomePic></HomePic>
    <div id="nextpage"></div>
    <div class="article">
      <Article
      v-for="(item) in articlelist[i]"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :text="item.text"
      :pic="item.pic"
      :date="item.date"
      :desc = 'item.desc'
      ></Article>

      <!-- 左侧 -->
    <div class="selfinfo">
      <Left></Left>
    </div>

    </div>

    <!-- 分页效果 -->
    <div class="page">
      <ul>
        <span>page:{{i+1}}</span>
        <li @click="prev"> <a href="#nextpage">👈</a> </li>
        <li @click="i=0"><a href="#nextpage">1</a></li>
        <li @click="i=1"><a href="#nextpage">2</a></li>
        <li @click="i=2"><a href="#nextpage">3</a></li>
        <li @click="i=3"><a href="#nextpage">4</a></li>
        <li @click="next"> <a href="#nextpage">👉</a> </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Left from '@/components/home/MyLeft.vue'
import HomePic from '@/components/home/MyHomepic.vue'
import Article from '@/components/home/ArticleList.vue'

import { bus } from '@/eventbus/eventbus.js'
export default {
  data () {
    return {
      articlelist: [],
      i: 0,
      newinfo: []
    }
  },
  components: {
    HomePic,
    Article,
    Left
  },
  methods: {
    async getinfo () {
      const { data: res } = await this.$http.get('/getMockTest')
      if (res.code !== 0) return console.log('信息获取失败')
      localStorage.setItem('data', JSON.stringify(res.data.list))
      for (let i = 0; i < 4; i++) {
        this.articlelist.push(res.data.list.splice(0, 10))
      }
      this.newinfo = this.articlelist[1]
    },
    prev () {
      this.i--
      if (this.i < 0) this.i = 0
    },
    next () {
      this.i++
      if (this.i > 3) this.i = 3
    },
    sendinfo () {
      // console.log(this.newinfo)
      bus.$emit('toaside3', this.newinfo)
    }
  },
  created () {
    this.getinfo()
  },
  updated () {
    this.sendinfo()
  }
}
</script>

<style lang="less" scoped>
.article{
  position: relative;
}
.selfinfo{
  position: absolute;
  top: 0;
  left: 67%;
}
.page{
  width: 400px;
  margin: 5px auto;
  ul{
    display: flex;
    list-style: none;
    justify-content: space-between;
    li{
      cursor: pointer;
    }
    li:hover{
      color:aqua
    }
  }
}
@media (max-width: 1360px) {
  .selfinfo{
    display: none;
  }
}
</style>
