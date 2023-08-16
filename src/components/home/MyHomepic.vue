<template>
  <div class="homepic-container">
    <!-- 主页图片 -->
    <div class="bgi">
      <img :src="currentBackground">
      <div class="txt">{{ printedText }}</div>
      <div class="down"><i class="el-icon-arrow-down" :style="{color: fontColor}" ref="dowmway"></i></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePic',
  data () {
    return {
      backgroundImages: [
        'https://data.znds.com/attachment/forum/201512/28/185426d3igtz11lv1ugdl1.jpg',
        'https://picb.zhimg.com/v2-f86bcbe20a5d485df169c6bbb402e030_r.jpg',
        'https://pic1.zhimg.com/v2-1e659e50ce578ad214a97af964505840_r.jpg',
        'https://bbsfiles.vivo.com.cn/vivobbs/attachment/forum/201404/28/150635seo2x2e6i6qeqe92.jpg',
        'https://images7.alphacoders.com/112/thumb-1920-1126456.jpg'
      ],
      currentBackground: '',
      text: [
        '辛勤的蜜蜂永没有时间悲哀。——布莱克',
        '我这个人走得很慢，但是我从不后退。——亚伯拉罕·林肯',
        '失败也是我需要的，它和成功对我一样有价值。——爱迪生'
      ],
      printedText: '',
      getTxt: '',
      currentIndex: 0,
      colors: ['#fff', '#aca4a4'], // 定义需要切换的颜色数组
      currentColorIndex: 0 // 当前颜色的索引
    }
  },
  mounted () {
    const randomIndex = Math.floor(Math.random() * this.backgroundImages.length)
    this.currentBackground = this.backgroundImages[randomIndex]
    const randtxt = Math.floor(Math.random() * this.text.length)
    this.getTxt = this.text[randtxt]
    this.printText()
    // this.downcolor()
    setInterval(() => {
      this.currentColorIndex = (this.currentColorIndex + 1) % this.colors.length
    }, 500) // 每秒切换一次颜色
  },
  methods: {
    printText () {
      setInterval(() => {
        if (this.currentIndex < this.getTxt.length) {
          this.printedText += this.getTxt[this.currentIndex]
          this.currentIndex++
        }
      }, 400)
    }
  },
  computed: {
    fontColor () {
      return this.colors[this.currentColorIndex]
    }
  }
}
</script>

<style lang="less" scoped>
.homepic-container{
  height: 52.5rem;
}
.bgi{
  width: 100%;
  height: 100%;
  position: relative;
  img{
    width: 100%;
    height: 100%;
  }
  .txt{
    font-family: serif;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 30px;
    color: #fff;
    transform: translate(-50%,-50%);
  }
  .down{
    position: absolute;
    bottom: 2%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-size: 40px;
  }
}
</style>
