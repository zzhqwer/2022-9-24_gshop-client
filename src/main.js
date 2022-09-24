import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
// 浏览器控制台不显示非生产环境打包的提示
Vue.config.productionTip = false

new Vue({
    el: '#app',
    render: h => h(App),
    router
})