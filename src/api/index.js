// 所有API接口统一管理
import requests from "./request";
import mockRequests from  "./mockAjax"
//首页三级分类
//   /api/product/getBaseCategoryList  get  无参数

export const reqCategoryList=()=>{
    //发请求
    return requests({url:'/api/product/getBaseCategoryList',method:'get'}
    )
}
export const reqBannerList =()=>mockRequests.get('/banner')

//获取floor数据
export const reqFloorList=()=>mockRequests.get('/floor')

//search

export const reqGetSearchInfo=(params)=>{
    return requests({url:"/api/list",
       method:'post',
      data:params})
}

//获取商品详情信息的接口 URL:/api/item/{ skuId }

export const reqGoodsInfo=(skuId)=>requests({url:`/api/item/${ skuId }`,method:'get'})

//将产品添加到购物车中或更新某一产品数量
export const redAddOrUpdateShopCart=(skuId,skuNum)=>requests({url:`/api/cart/addToCart/${skuId}/${skuNum}`,method:'post'})
//获取购物车列表数据  URL:/api/cart/cartList   GET
export const reqCartList=()=>requests({url:'/api/cart/cartList',method:'get'})
//删除购物车产品接口
///api/cart/deleteCart/{skuId}
export const reqDeleteCartById=(skuId)=>{
    return requests({url:`/api/cart/deleteCart/${skuId}`,method:'delete'})
}
//修改商品选中状态  /api/cart/checkCart/{skuId}/{isChecked}
export const reqUpdateCheckedById=(skuId,isChecked)=>requests({url:`/api/cart/checkCart/${skuId}/${isChecked}`,method:'get'})
//获取验证码 url:/api/user/passport/sendCode/{phone}   method:get data:phone code password
export const reqGetCode=(phone)=>requests({url:`/api/user/passport/sendCode/${phone}`,method:'get'})
//用户注册 url:/api/user/passport/register  method:post
export const reqUserRegister=(data)=>requests({url:`/api/user/passport/register`,data,method:'post'})
//登录 url:/api/user/passport/login  method:post  data:phone password
export const reqUserLogin=(data)=>requests({url:`/api/user/passport/login`,method:'post',data})
//获取用户信息[需要带着用户token向服务器要信息]
//url:/api/user/passport/auth/getUserInfo method:get
export const reqUserInfo=()=>requests({url:'/api/user/passport/auth/getUserInfo',method:'get'})
//退出登录 /api/user/passport/logout
export const reqLogout=()=>requests({url:`/api/user/passport/logout`,method:'get'})
//获取用户地址信息
export const reqAddressInfo=()=>requests({url:'/api/user/userAddress/auth/findUserAddressList',method:'get'})
//获取商品清单  /api/order/auth/trade get
export const reqOrderInfo=()=>requests({url:'/api/order/auth/trade',method:'get'})
//提交订单接口
//url:/api/order/auth/submitOrder?tradeNo={tradeNo}  method:post
export const reqSubmitOrder=(tradeNo,data)=>requests({url:`/api/order/auth/submitOrder?tradeNo=${tradeNo}`,data,method:'post'})
//获取支付信息
//url:/api/payment/weixin/createNative/{orderId}  method:get
export const reqPayInfo=(orderId)=>requests({url:`/api/payment/weixin/createNative/${orderId}`,method:'get'})
//获取支付订单状态  
//url:/api/payment/weixin/queryPayStatus/{orderId}  method:get
export const reqPayStatus=(orderId)=>requests({url:`/api/payment/weixin/queryPayStatus/${orderId}`,method:'get'})
//获取我的订单列表
//url:/api/order/auth/{page}/{limit}  get
export const reqMyOrderList=(page,limit)=>requests({url:`/api/order/auth/${page}/${limit}`,method:'get'})

