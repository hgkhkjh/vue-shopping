import 'vant/lib/index.css';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button,Tabbar, TabbarItem ,NavBar } from 'vant';
// 1. 引入你需要的组件
// 2. 引入组件样式
// 3. 注册你需要的组件

const app=createApp(App)
app.use(store)
app.use(router)
app.use(Button)
app.use(Tabbar)
app.use(TabbarItem)
app.use(NavBar)
app.mount('#app')
