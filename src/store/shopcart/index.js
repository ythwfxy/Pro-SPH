import { reqCartList,reqDeleteCartById,reqUpdateCheckedById } from "../../api";

const state={
    cartList:[],

};
const mutations={
    GETCARTLIST(state,cartList){
        state.cartList=cartList
    }
};
const actions={
    async getCartList({commit}){
        let result=    await reqCartList()
        if(result.code==200){
            commit('GETCARTLIST',result.data)
        }
    },
    async deleteCartListBySkuId({commit},skuId){
        let result=await reqDeleteCartById(skuId)
        if(result.code==200){
            return 'ok'
        }
        else{
            return Promise.reject(new Error('fail'))
        }
    },
    //修改购物车某一个产品选中状态
    async updatedCheckedById({commit},{skuId,isChecked}) {
        let result =await reqUpdateCheckedById(skuId,isChecked)
        if(result.code==200){
            return 'ok'
        }
        else{
            return Promise.reject(new Error('fail'))
        }
    },
    //删除全部勾选产品
    deleteAllCheckedCart({dispatch,getters}){
        let PromiseAll=[]
        getters.cartList.cartInfoList.forEach(item => {
            let result=item.isChecked==1?dispatch('deleteCartListBySkuId',item.skuId):''
            PromiseAll.push(result)
        });
        return Promise.all(PromiseAll)
    },
    //全选按钮
    updateAllCartChecked({dispatch,state},isChecked){
        let promiseAll=[]
        state.cartList[0].cartInfoList.forEach(item=>{
            let promise=dispatch('updatedCheckedById',{skuId:item.skuId,isChecked})
            promiseAll.push(promise)
        })
        return Promise.all(promiseAll)
    }
};
const getters={
    cartList(state){
        return state.cartList[0]||{}
    }
};
export default{
    state,
    mutations,
    actions,
    getters
}