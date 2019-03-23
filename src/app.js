import Vue from 'vue'
import App from './component/app.vue'


new Vue({
  el: '#app',
  /* 实例中的Vue template可以替换程序入口处的<div id="app"></div>*/
  template: '<App/>',
  render (creater) {
    return creater(App)   // 返回渲染的vue组件
  }
})
