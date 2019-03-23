## todo-mvc的vue实现，单文件的写法

#### 快速启动
  + `git clone https://github.com/Z-HNAN/todomvc-vue-single.git` clone下来该项目
  + `npm install` 安装所需要的一些依赖
  +  使用不同的方式进行预览
    - `npm run dev` 开发方式预览
    - `npm run build` 打包生成文件

#### 在线预览
[https://z-hnan.github.io/todomvc-vue-single/dist/index.html](https://z-hnan.github.io/todomvc-vue-single/dist/index.html)

#### 目录结构
~~~shell
│   app.js
│   index.html
│
├───component
│   │   app-footer.vue
│   │   app.vue
│   │
│   └───todo
│           todo-footer.vue
│           todo-header.vue
│           todo-list.vue
│
        index.css
 ~~~