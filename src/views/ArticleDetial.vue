<template>
  <div class="detial">
    <my-head-pic></my-head-pic>
    <div class="desc">
      <h3>{{ articles[id-1].title }}</h3>
      <p><i class="el-icon-date"></i>&nbsp;发布日期:{{articles[id-1].date}}&nbsp;&nbsp;&nbsp;
        <i class="el-icon-el-icon-loading"></i>&nbsp;更新于:{{articles[id-1].date}}&nbsp;&nbsp;&nbsp;
      </p>
      <p>
        <i class="el-icon-edit"></i>&nbsp;字数:{{ articles[id-1].text.length }}&nbsp;&nbsp;&nbsp;
        <i class="el-icon-timer"></i>&nbsp;推荐时长: 3m&nbsp;&nbsp;&nbsp;
        <i class="el-icon--top-right"></i>&nbsp;阅读量 :1213
      </p>
    </div>
    <div class="content">
      <my-content
      :title="articles[id-1].title"
      :text="articles[id-1].text"
      :desc="articles[id-1].desc"
      :pic="articles[id-1].pic"
      :rand="randdata"
      ></my-content>
    </div>
    <div class="page">
      <my-page></my-page>
    </div>
  </div>
</template>

<script>
import MyContent from '@/components/detail/MyContent.vue'
import MyPage from '@/components/detail/MyPage.vue'
import MyHeadPic from '@/components/MyHeadpic.vue'
export default {
  data () {
    return {
      articles: [],
      randdata: []
    }
  },
  components: {
    MyContent,
    MyPage,
    MyHeadPic
  },
  props: ['id'],
  methods: {
    randitem () {
      for (let i = 0; i < 6; i++) {
        const num = Math.floor(Math.random() * 40)
        if (this.randdata.indexOf(this.articles[num]) === -1) {
          this.randdata.push(this.articles[num])
        } else {
          i--
        }
      }
      console.log(this.randdata)
    }
  },
  created () {
    const detail = localStorage.getItem('data')
    this.articles = JSON.parse(detail)
    this.randitem()
  }
}
</script>

<style lang="less">
.detial{
  position: relative;
  .page{
    position: fixed;
    top: 3.7rem;
    height: 0;

  }
  .content{
    margin: 40px auto;
  }
  .desc{
    color:#fff;
    padding: 20px;
    position: absolute;
    top: 10%;
    left: 20%;
    width: 500px;
    height: 200px;
    // background-color: #fff;
  }
  p{
    font-size: 10px;
  }
}
</style>
