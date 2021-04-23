import Taro from '@tarojs/taro'
import { baseUrl } from '../config'
import qs from 'qs'

const dev = process.env.NODE_ENV === 'development'

class Http {
  BASEURL:String
  private static instance: Http;

  public constructor () {
    this.BASEURL = baseUrl
  }

  public static getInstance(): Http {
    if (!this.instance) {
        this.instance = new Http();
    }
    return this.instance;
  }

  request(api: string, data?: object, showLoading:boolean = true, method: 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT' = 'POST') {
    if(showLoading){
      Taro.showLoading({
        title: 'Loading...'
      })
    }
    if(false){
      console.log('=======请求参数==========================================')
      console.log(data)
      console.log(`接口地址：${this.BASEURL + api}`)
    }

    let token = Taro.getStorageSync('token')
    // if(!token) {
    //   new Promise ( async (resolve, reject) => {
    //     const { code } = await Taro.login()
    //     const { data } = await Taro.request({
    //       url: `${this.BASEURL}/xcx/login/code`,
    //       data: {code: code}
    //     })
    //     if (data.code === 0 ) {
    //       token = data.data.api_token
    //     }
    //   })
    // }
    for (const key in data) {
      if (data.hasOwnProperty(key) && (data[key] === undefined || data[key] == null)) {
        delete data[key];
      }
    }
    return new Promise( async (resolve, reject) => {
      Taro.request({
        url: `${this.BASEURL + api}`,
        method,
        data: data,
        credentials: 'include',
        header: {
          'api-token': token,
          'content-type': 'application/json;charset=utf-8'
        }
      }).then((res:any) => {
        if (!dev) {
          if (res.data.message === '代理商未登录，请先登录') {
            window.location.href = '/h5/index.html#/pages/login'
          }
        }
        if (res.message === '未登录') {
          // Taro.removeStorageSync('userinfo')
          // Taro.switchTab({
          //   url: `/pages/index/index`
          // })
        }
        if(false){
          console.log('=======返回数据======')
          console.log(res.data)
        }
       showLoading && Taro.hideLoading()
        resolve(res.data)
        if (res.data.code === 1) {
          Taro.showToast({
            title: res.data.message,
            icon: 'none',
            duration: 3000
          })
        }
      })
    })
  }

}
let http = Http.getInstance()
export default http;
