<template>
  <div>
    <div class="side1">
      <my-announce></my-announce>
    </div>
    <br><br><br><br>
    <div class="side2">
      <aside-2></aside-2>
    </div>
    <br><br><br><br>
    <div class="side3">
      <aside-3></aside-3>
    </div>
    <br><br><br><br>
    <div class="side4">
      <aside-4></aside-4>
    </div>
    <br><br><br><br>
    <div class="side5">
      <aside-5></aside-5>
    </div>
  </div>
</template>

<script>
import MyAnnounce from './MyAnnounce.vue'
import Aside2 from './MyAside2.vue'
import Aside3 from './MyAside3.vue'
import Aside4 from './MyAside4.vue'
import Aside5 from './MyAside5.vue'
export default {
  components: {
    MyAnnounce,
    Aside2,
    Aside3,
    Aside4,
    Aside5
  }
}
</script>

<style lang="less" scoped>

</style>
