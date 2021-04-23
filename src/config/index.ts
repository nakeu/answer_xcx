import Taro from '@tarojs/taro'

// 请求连接前缀
export const baseUrl = process.env.NODE_ENV === 'production' ? 'https://dt.zyxtkt.cn' : 'https://dt.zyxtkt.cn';

// 输出日志信息
export const noConsole = false;

// 手机型号判断
export const onGetSysInfo=()=>{
     // 先缓存获取
     let isiPhoneX = Taro.getStorageSync('isiPhoneX') || false
     // 缓存没有 再获取
     if (!isiPhoneX) {
        Taro.getSystemInfo({
             success: res => {
                 // 手机品牌
                 let modelmes = res.model;
                 // 如果是 X,XS,XR,XS MAX 均可适配
                 if (modelmes.indexOf('iPhone X') != -1) {
                     // 存储型号
                     Taro.setStorageSync('isiPhoneX', true)
                 }
             },
         })
     }
}

export const copy = (val) =>{
    Taro.setClipboardData({
      data:val,
      success: ()=>{
        Taro.getClipboardData({
          success: () => {
            Taro.showToast({
              title: '复制成功'
            })
          }
        })
      }
    })
  }