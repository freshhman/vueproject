<template>
  <div class="content-container">
    <h4 id="article">{{ title }}</h4>
    <h6>{{ desc }}</h6>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ text }}</p>
    <br>
    <hr>
    <h4><i class="el-icon-thumb"></i>&nbsp;相关推荐</h4>
    <ul id="commd">
      <li v-for="(item) in rand" :key="item.id">
        <div class="pic">
          <img :src="item.pic" alt="">
        </div>
        <div class="txt">
          <h5>{{ item.title }}</h5>
          <p>{{ item.date }}</p>
        </div>
      </li>
    </ul>
    <br>
    <hr>
    <h4 id="discuss"><i class="el-icon-chat-line-round"></i>&nbsp;评论</h4>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="昵称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="ruleForm.email"></el-input>
      </el-form-item>
      <el-form-item label="评论" prop="text">
        <el-input type="textarea" v-model="ruleForm.text"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
      </el-form-item>
    </el-form>
    <br><hr>
    <div class="comments-section">
      <ul>
        <li v-for="(item,i) in dicusses" :key="i">
          <div class="pic">
            <img src="@/assets/image/preview.jpg">
          </div>
          <div class="txt">
            <p>{{ item.name }}</p>
            <h5>{{ item.text }}</h5>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      recommend: [],
      ruleForm: {
        name: '',
        email: '',
        text: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入你的昵称', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入你的邮箱', trigger: 'blur' }
        ],
        text: [
          { required: true, message: '请输入你的评论', trigger: 'blur' }
        ]
      },
      dicusses: [
        { name: '李平', email: '1254541233', text: '太牛逼了把' }
      ]
    }
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    },
    pic: {
      type: String,
      default: ''
    },
    rand: {
      type: Array
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('发布成功')
          this.dicusses.push(this.ruleForm)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.content-container{
  margin-top: 25px;
  margin-left: 33%;
  padding: 50px 20px;
  width: 50%;
  height: auto;
  border: 1px solid #b8afaf;
  border-radius: 10px;
  box-shadow: 3px 3px 3px 3px #d3cfcf;
  p{
    line-height: 20px;
  }
  ul{
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    li{
      box-shadow: rgba(0,0,0,.1) 3px 3px3px 3px ;
      margin: 10px;
      width: 30%;
      height: 200px;
      // background-color: cadetblue;
      transition: all .5s;
      overflow: hidden;
      img{
        transition: all .5s;
        width: 100%;
        height: auto;
      }
      img:hover{
        transform: scale(1.1);
      }
      p,h5{
        padding: 0;
        margin: 0;
      }
      .txt{
        padding: 10px;
      }
    }
    li:hover{
      box-shadow: #b8afaf 5px 5px 5px 5px ;
    }
  }
}
.comments-section{
  ul{
    width: 90%;
    margin: 20px auto;
    height: auto;
    li{
        padding: 20px;
        display: flex;
        width: 100%;
        height: auto;
        border-radius: 10px;

      .pic{
        width: 10%;
        height: 10%;
        img{
          border-radius: 50%;
        }

      }
    }
    li:hover img{
      transform: rotate(360deg);
    }
  }
}
.el-form{
  text-align: center;
}
</style>
