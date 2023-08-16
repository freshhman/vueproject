<template>
  <div>
    <Headpic>
      <p>流年不念终将安，时光不老你还在</p>
    </Headpic>
    <Time :time="articlelist"></Time>
  </div>
</template>

<script>
import Headpic from '@/components/MyHeadpic.vue'
import Time from '@/components/time/MyTime.vue'
export default {
  data () {
    return {
      articlelist: []
    }
  },
  components: {
    Headpic,
    Time
  },
  methods: {
    async getinfo () {
      const { data: res } = await this.$http.get('/getMockTest')
      if (res.code !== 0) return console.log('消息获取失败')
      this.articlelist = res.data.list
    }
  },
  created () {
    this.getinfo()
  }
}
</script>

<style>

</style>
