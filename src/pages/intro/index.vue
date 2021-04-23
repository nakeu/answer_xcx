<template>
  <view>
    <image
      class="banner"
      mode="aspectFill"
      src="https://dt.zyxtkt.cn/dtimg/banner.jpg"
    />
  </view>
</template>

<script>
import Taro from '@tarojs/taro'
import "./index.scss";

export default {
  data() {
    return {
      msg: "我的",
      days: 3,
    };
  },
  mounted() {
    setTimeout(() => {
      Taro.switchTab({
        url: '/pages/index/index'
      })
    }, 3000)
  }
};
</script>
