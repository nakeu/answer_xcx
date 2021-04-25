<template>
  <view class="ranking">
    <view class="rankingList">
      <navigator :url="'/pages/ranking/info/index?id='+item.tnumber" class="departmentBox" v-for="(item, index) in list" :key="index">
        <view class='at-row at-row__justify--between at-row__align--center'>
          <view class='at-col at-col-8'>
            <view class="rankBox">
              <view class="rankNum">{{item.rank}}</view>
            </view>
            <view class="info">
              <view class="name">{{item.ttitle}}</view>
              <view class="stepNum">{{item.steps}}步</view>
            </view>
          </view>
          <view class='at-col at-col-4'>
            <text>贡献值</text>
            <view>{{item.days}}天</view>
          </view>
        </view>
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
      list: []
    };
  },
  methods: {
    getInit() {
      http.request(api.teamRank).then(res => { 
        this.list = res.data
      })
    }
  },
  mounted() {
    this.getInit()
  },
};
</script>
