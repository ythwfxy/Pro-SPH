//home模块小仓库
import {reqCategoryList,reqFloorList} from '@/api'
import { reqBannerList } from '../../api'
const state={

    categoryList:[],
    bannerList:[],
    floorList:[]
}
const mutations={
    CATEGORYLIST(state,categoryList){
        state.categoryList=categoryList
    },
    CATEBANNERLIST(state,bannerList){

        state.bannerList=bannerList
    },
    GETFLOORLIST(state,floorList){
        state.floorList=floorList
    }
}
const actions={
    //通过API接口函数调用 向服务器发请求获取数据
    async categoryList({commit}){
        let result=await reqCategoryList()
        if(result.code===200){
            commit('CATEGORYLIST',result.data)
        }
    },
    //获取首页轮播图
    async getBannerList({commit}){
        let result=await reqBannerList()
        if(result.code===200){
            commit('CATEBANNERLIST',result.data)
        }
    },
    async getFloorList({commit}){
        let result=await reqFloorList()
        if(result.code===200){
            commit('GETFLOORLIST',result.data)
        }
    }
    
}
const getters={}
export default {
    state,
    mutations,
    actions,
    getters
}