<template>
  <div>
    <section class="todoapp">
      <TodoHeader @handleAddTodo="handleAddTodo"></TodoHeader>
      <template v-if="todos.length > 0">
        <TodoList
          :todos="todos"
          :filterText="filterText"
          @removeTodoByIndex="handleRemoveTodo"
          @updateTodoByIndex="handleUpdateTodo"
        ></TodoList>
        <TodoFooter :todos="todos" :filterText="filterText" @removeCompletedTodo="handleRemoveCompletedTodo"></TodoFooter>
      </template>
    </section>
    <footer class="info"><AppFooter></AppFooter></footer>
  </div>
</template>

<script>
import AppFooter from './app-footer.vue';

import TodoHeader from './todo/todo-header.vue';
import TodoList from './todo/todo-list.vue';
import TodoFooter from './todo/todo-footer.vue';

//   const todos = [
//     {
//       id: 0,
//       title: "吃饭",
//       completed: true
//     },
//      {
//       id: 1,
//       title: "睡觉",
//       completed: false
//     },
//      {
//       id: 2,
//       title: "打豆豆",
//       completed: true
//     }
//   ]

// // hash改变值
// window.onhashchange = handleHashChange;
// // 默认执行一次
// handleHashChange()
// 
// function handleHashChange() {
//   
// }
export default {
  data() {
    return {
      todos: JSON.parse(window.localStorage.getItem('todos') || '[]'),
      filterText: ''
    };
  },
  components: {
    AppFooter,
    TodoHeader,
    TodoList,
    TodoFooter
  },
  watch: {
    todos: {
      handler(val, oldVal) {
        window.localStorage.setItem('todos', JSON.stringify(val));
      },
      deep: true
    }
  },
  methods: {
    // 增加todo项
    handleAddTodo(todo) {
      //  维护id
      todo.id = this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 0;
      // 插入到todos当中
      this.todos.push(todo);
    },

    // 删除todo项
    handleRemoveTodo(index) {
      this.todos.splice(index, 1);
    },

    // 更新todo项目
    handleUpdateTodo(newTodo, index) {
      this.todos[index] = newTodo;
    },

    // 删除所有已经完成的任务
    handleRemoveCompletedTodo() {
      this.todos = this.todos.filter(item => item.completed === false);
    }
  },
  
  mounted() {
    let app = this
    // 元素被创建的时候 并未生成dom元素
    window.addEventListener('hashchange', handleHashChange)
    // 默认触发一次
    handleHashChange()
    
    function handleHashChange () {
      app.filterText = window.location.hash.substr(2)
    }
  }
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}

button {
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  font-size: 100%;
  vertical-align: baseline;
  font-family: inherit;
  font-weight: inherit;
  color: inherit;
  -webkit-appearance: none;
  appearance: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
  line-height: 1.4em;
  background: #f5f5f5;
  color: #4d4d4d;
  min-width: 230px;
  max-width: 550px;
  margin: 0 auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 300;
}

.new-todo,
.edit {
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  border: 0;
  color: inherit;
  padding: 6px;
  border: 1px solid #999;
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

:focus {
  outline: 0;
}

.hidden {
  display: none;
}

.todoapp {
  background: #fff;
  margin: 130px 0 40px 0;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
}

.todoapp input::-webkit-input-placeholder {
  font-style: italic;
  font-weight: 300;
  color: #e6e6e6;
}

.todoapp input::-moz-placeholder {
  font-style: italic;
  font-weight: 300;
  color: #e6e6e6;
}

.todoapp input::input-placeholder {
  font-style: italic;
  font-weight: 300;
  color: #e6e6e6;
}

.todoapp h1 {
  position: absolute;
  top: -155px;
  width: 100%;
  font-size: 100px;
  font-weight: 100;
  text-align: center;
  color: rgba(175, 47, 47, 0.15);
  -webkit-text-rendering: optimizeLegibility;
  -moz-text-rendering: optimizeLegibility;
  text-rendering: optimizeLegibility;
}

.info {
  margin: 65px auto 0;
  color: #bfbfbf;
  font-size: 10px;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
  text-align: center;
}

.info p {
  line-height: 1;
}

.info a {
  color: inherit;
  text-decoration: none;
  font-weight: 400;
}

.info a:hover {
  text-decoration: underline;
}

/*
  	Hack to remove background from Mobile Safari.
  	Can't use it globally since it destroys checkboxes in Firefox
  */
@media screen and (-webkit-min-device-pixel-ratio: 0) {
  .toggle-all,
  .todo-list li .toggle {
    background: none;
  }

  .todo-list li .toggle {
    height: 40px;
  }
}

@media (max-width: 430px) {
  .footer {
    height: 50px;
  }

  .filters {
    bottom: 10px;
  }
}
</style>
