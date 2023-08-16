<template>
  <div class="headpic-container">
    <img :src="currentBackground">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
      backgroundImages: [
        'https://wallpaperm.cmcm.com/398f4912b45260cca24eb3ec9b37e711.jpg',
        'https://pic3.zhimg.com/v2-e460e7518775a5ecf86b935bd5abc74a_r.jpg',
        'https://pic2.zhimg.com/v2-91166250b83b5cae3df757ac0ad5d2ed_r.jpg',
        'https://bbsfiles.vivo.com.cn/vivobbs/attachment/forum/201601/06/113353lk9zq9m7ghxzkkjk.jpg'
      ],
      currentBackground: ''
    }
  },
  mounted () {
    const randomIndex = Math.floor(Math.random() * this.backgroundImages.length)
    this.currentBackground = this.backgroundImages[randomIndex]
  }
}
</script>

<style lang="less" scoped>
.headpic-container{
  height: 350px;
  overflow: hidden;
  position: relative;
  img{
    width: 100%;
    min-height: 661px;
    position: absolute;
    top: -90%;
  }
  p{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-size: 30px;
    font-weight: 700;
    color: #fff;
  }
}
</style>
