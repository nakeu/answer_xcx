<template>
  <view>
    <view class="user">
      <view class="avatar">
        <!-- <AtAvatar
          class="avatar__img"
          circle
          image="https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67"
        >
        </AtAvatar> -->
        <open-data type="userAvatarUrl"></open-data>
      </view>
      <view class="name"><open-data type="userNickName"></open-data></view>
    </view>
    <view class="list">
      <navigator class="itemBox" hover-class="none" url="">
        <image
          class="icon"
          mode="widthFix"
          src="https://dt.zyxtkt.cn/dtimg/user_icon.png"
        />
        <view class="name">个人资料</view>
        <view class="item_r"><AtIcon value="chevron-right"></AtIcon></view>
      </navigator>
      <view class="itemBox">
        <image
          class="icon"
          mode="widthFix"
          src="https://dt.zyxtkt.cn/dtimg/star_icon.png"
        />
        <view class="name">我的贡献</view>
        <view class="item_r"><text>{{data.days}}</text>天</view>
      </view>
      <view class="itemBox">
        <image
          class="icon"
          mode="widthFix"
          src="https://dt.zyxtkt.cn/dtimg/answer_icon.png"
        />
        <view class="name">我的答题数</view>
        <view class="item_r"><text>{{data.right_count}}</text>/{{data.question_count}}</view>
      </view>
      <navigator class="itemBox" hover-class="none" url="/pages/ranking/index">
        <image
          class="icon"
          mode="widthFix"
          src="https://dt.zyxtkt.cn/dtimg/ranking_icon.png"
        />
        <view class="name">排行榜</view>
        <view class="item_r"><AtIcon value="chevron-right"></AtIcon></view>
      </navigator>
    </view>
  </view>
</template>

<script>
import Taro from "@tarojs/taro";
import http from "../../utils/request"
import api from "../../config/api"
import "./index.scss";

export default {
  data() {
    return {
      data: {}
    };
  },
  methods: {
    getuser() {
      http.request(api.user).then(res => {
        this.data = res.data
      })
    }
  },
  mounted() {
    this.getuser()
  },
};
</script>
