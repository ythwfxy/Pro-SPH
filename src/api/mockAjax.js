// 对axios二次封装
import axios from 'axios'
//引入进度条
import nprogress from 'nprogress'
//start开始  done结束
// 引入进度条样式
import 'nprogress/nprogress.css'
const requests=axios.create({
    baseURL:"/mock",
    timeout:5000,

})
// 请求拦截器
requests.interceptors.request.use((config)=>{
    // 配置对象中有headers 请求头
    nprogress.start()
    return config
})
// 响应拦截器
requests.interceptors.response.use((res)=>{
    nprogress.done()
    return res.data
},(error)=>{
    return Promise.reject(new Error('fail'))
})

// 对外暴露
export default requests