<template>
<van-nav-bar title="标题" />
  <router-view/>
  <van-tabbar  active-color="#ee0a24">
  <van-tabbar-item v-for="tabbatData in tabbatDatas" @click="tabbarclick(tabbatData.patch)" :icon="tabbatData.icon">{{ tabbatData.name }}</van-tabbar-item>
</van-tabbar>
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
<script setup> 
import { ref,reactive,defineComponent } from "vue";
import { useRouter } from 'vue-router'
const router = useRouter()
const tabbatDatas=reactive([
  {
    name:"首页",
    patch:"/HomePage",
    icon:"wap-home-o"
  },
  {
    name:"分类",
    patch:"/Classfiy",
    icon:"apps-o"

  }
  ,
  {
    name:"购物车",
    patch:"/Cart",
    icon:"cart-o"
  }
  ,
  {
    name:"我的",
    patch:"/Mine",
    icon:"user-circle-o"
  }
])
const tabbarclick=(patch)=>{
  router.replace(patch)
}
</script>

