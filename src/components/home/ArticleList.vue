<template>
  <div class="article-container">
    <div class="article">
      <div class="pic">
        <img :src="pic" alt="">
      </div>
      <div class="txt">
        <div class="title">
          <router-link :to="`/article/`+id">{{ title }}</router-link>
          <br><br>
          <h6><span><i class="el-icon-date"></i></span>   {{date}} | <span>mac    <i class="el-icon-message"></i></span></h6>
        </div>
        <br>
        <p>{{desc}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      article: [this.id, this.title, this.date, this.pic, this.desc]
    }
  },
  props: {
    id: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    pic: {
      type: String,
      default: ''
    },
    desc: {
      type: String
    }
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.article-container{
  width: 1200px;
  // border: 1px solid #000;
  margin: 2rem auto;
  .article{
    position: relative;
    display: flex;
    width: 830px;
    height: 242px;
    border: .5px solid #c4c2c2;
    border-radius: 1rem;
    box-shadow: 3px 3px 3px 3px #bebbbb;
    .pic{
      margin: auto 0;
      width: 276px;
      height: 158px;
      overflow: hidden;
      img{
        margin-left: 2px;
        width: 100%;
        height: 100%;
        transition: all 0.5s;
      }
      img:hover{
        transform: scale(1.2);
      }
    }
    .txt{
      padding: 20px 0;
      width: 520px;
      margin-left: 1rem;
      .title{
        text-align: center;
      }
      a{
        color: #000;
        font-size: 30px;
      }
      a:hover{
        color: rgb(58, 156, 201);
      }
      h6{
        margin: 0;
        padding: 0;
        align-items: center;
        span:hover{
          color: rgb(58, 156, 201);
        }
      }
      p{
        font-size: 10px;
      }
    }
  }
}
@media (max-width: 850px){
  .pic{
    display: none;
  }
  .article{
    text-align: center;
  }
}
</style>
