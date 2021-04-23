<template>
  <view class="list">
    <view class="answerBox" :class="{disable: item.is_locked}" v-for="(item, index) in list" :key="index">
    <navigator :url="'/pages/answer/item/index?qcnumber=' + item.qcnumber + '&title=' + item.qctitle">
      <image
        class="cover"
        mode="widthFix"
        :src="item.bg_img"
      />
      <view class="status">
        <view class="Progress" v-if="item.is_locked === 0">
        <AtProgress :percent="100" :isHidePercent="true" color="#FCDB2C" :strokeWidth="6" />
        </view>
        <image
        v-if="item.is_locked === 0"
        class="star"
        mode="widthFix"
        src="../../asset/images/Star.png"
        />
        <image
        v-if="item.is_locked === 1"
        class="lock"
        mode="widthFix"
        src="../../asset/images/lock.png"
        />
      </view>
    </navigator>
    </view>
    <!-- <view class="answerBox">
      <image
        class="cover"
        mode="widthFix"
        src="https://dt.zyxtkt.cn/dtimg/list_bg2.png"
      />
      <view class="status">
        <view class="Progress">
        <AtProgress :percent="25" :isHidePercent="true" color="#FCDB2C" :strokeWidth="6" />
        </view>
        <text>3/15</text>
      </view>
    </view>
    <view class="answerBox disable">
      <image
        class="cover"
        mode="widthFix"
        src="https://dt.zyxtkt.cn/dtimg/list_bg3.png"
      />
      <view class="status">
        <image
        class="lock"
        mode="widthFix"
        src="../../asset/images/lock.png"
      />
      </view>
    </view>
    <view class="answerBox disable">
      <image
        class="cover"
        mode="widthFix"
        src="https://dt.zyxtkt.cn/dtimg/list_bg4.png"
      />
      <view class="status">
        <image
        class="lock"
        mode="widthFix"
        src="../../asset/images/lock.png"
      />
      </view>
    </view> -->
  </view>
</template>

<script>
import Taro from "@tarojs/taro";
import http from "../../utils/request"
import api from "../../config/api"
import './index.scss'

export default {
  data () {
    return {
      list: []
    }
  },
  methods: {
    gatData() {
      http.request(api.qustionList).then(res => {
        this.list = res.data
      })
    }
  },
  mounted() {
    this.gatData()
  },
}
</script>
