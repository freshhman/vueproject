<template>
  <div class="time-container">
    <el-timeline>
    <el-timeline-item :timestamp="item.date" placement="top" v-for="(item) in time" :key="item.id">
      <el-card>
        <div class="img">
          <img :src="item.pic" alt="">
        </div>
        <div class="txt">
          <h4>{{ item.title }}</h4>
          <p>{{item.desc}}</p>
        </div>
      </el-card>
    </el-timeline-item>
  </el-timeline>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  created () {

  },
  props: {
    time: {
      type: Array
    }
  }
}
</script>

<style lang="less" scoped>
.time-container{
  padding: 20px;
  margin: 25px auto;
  width: 50%;
  height: auto;
  border: 1px solid #b8afaf;
  text-align: center;
  border-radius: 10px;
  box-shadow: 3px 3px 3px 3px #d3cfcf;
}
.el-card__body{
  display: flex !important;
}

</style>
