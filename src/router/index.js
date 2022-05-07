//配置路由
import Vue from  'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import routes from './routes'
import store from '@/store'
let originPush = VueRouter.prototype.push
let originReplace=VueRouter.prototype.replace
VueRouter.prototype.push=function(location,resolve,reject){
    if(resolve && reject){
        originPush.call(this,location,resolve,reject)

    }else{
        originPush.call(this,location,()=>{},()=>{})
    }
}
VueRouter.prototype.replace=function(location,resolve,reject){
    if(resolve &&reject){
        originReplace.call(this,location,resolve,reject)

    }else{
        originReplace.call(this,location,()=>{},()=>{})
    }
}
let router= new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        // 始终滚动到顶部
        return { top: 0 }
      },
})
//全局守卫，前置守卫
router.beforeEach(async (to,from,next)=>{
    let token=store.state.user.token
    //用户信息
    let name=store.state.user.userInfo.name
    //用户登录了
    if(token){
        //若登陆后想去login则停留在首页
        if(to.path=='/login'){
            next('/home')
        }else{
            if(name){
                next()
            }else{
                //没有用户信息，派发action让仓库存储用户信息再跳转
                try {
                    await store.dispatch('getUserInfo')
                    next()
                } catch (error) {
                    //token失效
                    //清楚token
                    await store.dispatch('userLogout')
                    next('/login')
                }
            }
        }
    }else{
        let toPath=to.path
        if(toPath.indexOf('/trade')!=-1||toPath.indexOf('/pay')!=-1||toPath.indexOf('/center')!=-1){
            next('/login?redirect='+toPath)
        }else{
            next()
        }
        
    }
})
export default router