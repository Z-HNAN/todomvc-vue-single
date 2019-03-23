<template>
	<header class="header">
	  <h1>todos</h1>
	  <input class="new-todo" @blur="getTodoTitle" @keydown.enter="getTodoTitle" placeholder="What needs to be done?" v-focus>
	</header>
</template>

<script>
export default {
  directives: {
    // 注册一个局部的自定义指令 v-focus
    focus: {
      // 指令的定义
      inserted: function(el) {
        // 聚焦元素
        el.focus();
      }
    }
  },
  methods:{
    getTodoTitle(e) {
      // 获取事件对象
      let target = e.target
      // 排空操作
      if (target.value.length === 0) return
      // 将新添加的值发射出去 未添加id
      let todo = {
        title: target.value,
        completed: false
      }
      this.$emit('handleAddTodo', todo)
      // 清空操作
      target.value = ''
    }
  }
}
</script>

<style scoped>
  .new-todo {
  	padding: 16px 16px 16px 60px;
  	border: none;
  	background: rgba(0, 0, 0, 0.003);
  	box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
  }
</style>
