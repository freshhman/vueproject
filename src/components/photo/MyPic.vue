<template>
  <div class="pic-container">
   <div class="scenery">
    <h3>风景~</h3>
    <ul>
      <li v-for="(pic,i) in sceneries" :key="i">
        <img :src="sceneries[i]"  @click="openpic">
      </li>
    </ul>
   </div>
   <div class="meme">
    <br><br>
    <h3>弔图一大堆~.~</h3>
    <ul>
      <li v-for="(pic,i) in meme" :key="pic">
        <img :src="meme[i]"   @click="openpic">
      </li>
    </ul>
   </div>
   <div class="open" v-if="imgshow" @touchmove.prevent @mousewheel.prevent>
    <div class="pic">
      <img :src="targetimg">
    </div>
    <i class="el-icon-close" @click="imgshow = !imgshow"></i>
   </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      sceneries: [
        'https://c.53326.com/d/file/lan2018070308/eohmxennimh.jpg',
        'https://images7.alphacoders.com/468/468569.jpg',
        'https://th.bing.com/th/id/R.05cd17564c9fb529479f316d76553200?rik=uqQSgyqyG%2f0dXw&riu=http%3a%2f%2fbbsimg.res.flyme.cn%2fforum%2f201511%2f27%2f151338qmmsmdssmdomoxjz.jpg&ehk=JYf9%2bLprj6TLKXo9HxaQXAymrSqaLSYajYJq%2bnsRboA%3d&risl=&pid=ImgRaw&r=0',
        'https://clubimg.club.vmall.com/data/attachment/forum/201910/18/162342xmiz2uf2rqqlrtfx.jpg',
        'https://th.bing.com/th/id/R.e54c56e2829fc98d4192e2bcf7b7da10?rik=5QFj5VewJAibOw&riu=http%3a%2f%2fwww.pp3.cn%2fuploads%2f200701%2f14-200F1100455X8.jpg&ehk=d%2fhkIt6cnjbx4fXJDkBvTVMXLb0SW%2fWr3c2yZLQB%2bfg%3d&risl=&pid=ImgRaw&r=0',
        'https://th.bing.com/th/id/R.e496a8342baa1e4f6868dced04559e33?rik=tQP5u5zC5TXurA&riu=http%3a%2f%2fpic.bizhi360.com%2fbbpic%2f4%2f9704_3.jpg&ehk=7GzuM%2by06brWC9brOjmufH3BnGcOXDGVrbT0VElclXY%3d&risl=&pid=ImgRaw&r=0',
        'https://wallpaperm.cmcm.com/b236dcf198c28ee4541ae336ed9888be.jpg',
        'https://pic1.zhimg.com/v2-0d4991698b20a6fe90aaab2c441f5655_r.jpg?source=12a79843',
        'https://www.10wallpaper.com/wallpaper/2560x1600/2008/Windows_10x_Microsoft_2020_High_Quality_4K_Desktop_2560x1600.jpg'
      ],
      meme: [
        'https://image.dbbqb.com/202308161108/8c03e1011ccd1ad164c4a73c83f21c39/NGXJ',
        'https://picx.zhimg.com/80/v2-06d081bac9881271dcb79ea5c9122f2f_720w.webp?source=1940ef5c',
        'https://picx.zhimg.com/80/v2-36c781346c90ae65de9b98e8da1cc58a_720w.webp?source=1940ef5c',
        'https://picx.zhimg.com/80/v2-6b573e321a942fd56aab3032f5df820a_720w.webp?source=1940ef5c'
      ],
      targetimg: '',
      imgshow: false
    }
  },
  watch: {
    imgshow (newValue) {
      /*       if (newValue === true) {
        document.addEventListener('scroll', this.preventScroll, { passive: false })
      } else {
        document.removeEventListener('scroll', this.preventScroll)
      } */
      console.log(newValue)
    }
  },
  methods: {
    openpic () {
      const img = event.target.src
      console.log(img)
      this.targetimg = img
      this.imgshow = true
    },
    preventScroll (event) {
      event.preventDefault()
    }
  }
}
</script>

<style lang="less" scoped>
.pic-container{
  position: relative;
  margin: 25px auto;
  padding: 50px 20px;
  width: 50%;
  height: auto;
  border: 1px solid #b8afaf;
  border-radius: 10px;
  box-shadow: 3px 3px 3px 3px #d3cfcf;
}
ul{
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  // justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
li{
  padding: 0;
  margin: 10px 0 0 10px;
  width: auto;
  height: 250px;
  line-height: 400px;
  overflow: hidden;
  img{
    width: auto;
    max-height: 80%;
    transition: all .2s;
  }
  img:hover{
    transform: scale(1.1);
  }
}
h3{
  color: rgb(52, 76, 103);
  font-weight: bold;
}
.open{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100rem;
  background-color: rgba(0,0,0,.5);
  .pic{
    text-align: center;
    margin: 7rem auto;
    width: 80%;
    height: 700px;
    overflow: hidden;
    z-index: 999;
    img{
      width: auto;
      max-height: 100%;
    border-radius: 10px;
    }
  }
  i{
    color:aliceblue;
    cursor: pointer;
    position: absolute;
    font-size: 30px;
    top: 4rem;
    right: 3rem;
    transition: all .5s;
  }
  i:hover{
    transform: rotate(360deg);
  }
}
</style>
