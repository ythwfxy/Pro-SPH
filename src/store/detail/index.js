import { reqGoodsInfo,redAddOrUpdateShopCart } from "../../api"
//封装游客身份模块
import {getUUID} from "@/utils/uuid_token"
const state={
    goodInfo:{},
    //游客临时身份
    uuid_token:getUUID()
}
const mutations={
    GETGOODINFO(state,goodInfo){
        state.goodInfo=goodInfo

    }
}
const actions={
    async getGoodInfo({commit},skuid){
        let result=await reqGoodsInfo(skuid)
        if(result.code==200){
            commit('GETGOODINFO',result.data)
        }
    },
    async addOrUpdateShopCart({commit},{skuId,skuNum}){
        let result=await redAddOrUpdateShopCart(skuId,skuNum)
        if(result.code==200){
            return 'ok'
        }
        else{
            return Promise.reject(new Error('fail'))
        }
    }
}
const getters={
    categoryView(state){
        return state.goodInfo.categoryView||{}
    },
    skuInfo(state){
        return state.goodInfo.skuInfo||{}
    },
    //产品售卖属性的简化
    spuSaleAttrList(state){
        return state.goodInfo.spuSaleAttrList||[]
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}