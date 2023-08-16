<template>
  <div class="aside5-container">
    <div>
      <i class="el-icon-paperclip"></i>&nbsp;标签
    </div>
    <div class="lists">
      <div v-for="(note, index) in notes" :key="index" class="note" >
        <a href="" :style="getNoteStyle(note)">{{ note.content }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      notes: []
    }
  },
  methods: {
    note () {
      for (let i = 0; i < 12; i++) {
        const colors = ['#CCFFCC', '#99FF99', '#FF6600', '#003366', '#0099FF']
        const randomColor = colors[Math.floor(Math.random() * colors.length)]
        const randomSize = Math.floor(Math.random() * 30) + 5 // Random size between 50 and 150 pixels

        this.notes.push({
          content: this.getRandomContent(),
          color: randomColor,
          size: randomSize + 'px'
        })
      }
    },
    getNoteStyle (note) {
      return {
        color: note.color,
        width: note.size,
        height: note.size
      }
    },
    getRandomContent () {
      const contents = ['前端', '后端', 'vue', 'react', 'js']
      return contents[Math.floor(Math.random() * contents.length)]
    }
  },
  created () {
    this.note()
  }
}
</script>

<style lang="less" scoped>
.aside5-container{
  padding: 20px;
  // text-align: center;
  width: 230px;
  height: auto;
  border: 1px solid #cac6c6;
  border-radius: 1rem;
  box-shadow: 3px 3px 3px 3px #d3cfcf;
}
.lists{
  display: flex;
  flex-wrap: wrap;
}
.note {
  margin: 10px;
  padding: 10px;
  display: inline-block;
  text-align: center;
  color: white;
}
</style>
