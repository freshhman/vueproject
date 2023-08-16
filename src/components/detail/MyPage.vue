<template>
  <div class="page-container">
    <h4>文章目录</h4>
    <h5 @click="scrollToSection('article')">一. 正文 </h5>
    <h5 @click="scrollToSection('commd')">二. 推荐 </h5>
    <h5 @click="scrollToSection('discuss')">三. 评论 </h5>
  </div>
</template>

<script>
export default {
  data () {
    return {
      click: false
    }
  },
  methods: {
    scrollToSection (sectionId) {
      const sectionElement = document.getElementById(sectionId)
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' })
      }
      this.click = !this.click
    }
  }
}
</script>

<style lang="less" scoped>
.page-container{
  padding: 30px;
  display: block;
  width: 20rem;
  height: 80rem;
  background-color: rgba(185, 177, 177, 0.5);
  h4,h5{
    width: 100%;
    font-weight: 400;
    transition: all .5s;
  }
  h4{
    text-align: center;
  }
  h5:hover{
    background-color: #66aedf;
  }
  .active{
    background-color: #66aedf;
  }
}
</style>
