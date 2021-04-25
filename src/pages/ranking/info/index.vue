<template>
  <view class="ranking">
    <view class="department at-row at-row__justify--between at-row__align--center">
      <view class='at-col at-col-8'>
        <view class="rankBox">
              <view class="rankNum" :class="{no1: teamRank.rank === 1, no2: teamRank.rank === 2, no3: teamRank.rank === 3}"></view>
            </view>
            <view class="info">
              <view class="name">{{teamRank.ttitle}}</view>
              <view class="stepNum">{{teamRank.steps}}步</view>
            </view>
      </view>
      <view class='at-col at-col-4'>
        <text>贡献值</text>
        <view>{{teamRank.days}}天</view>
      </view>
    </view>
    <view class="rankingList">
      <view class="departmentBox" v-for="(item, index) in usersList" :key="index">
        <view class='at-row at-row__justify--between at-row__align--center'>
          <view class='at-col at-col-8'>
            <view class="rankBox">
              <view class="rankNum">{{item.rank}}</view>
            </view>
             <AtAvatar circle :image='item.avatar'></AtAvatar>
            <view class="info">
              <view class="name">{{item.real_name}}</view>
              <view class="stepNum">{{item.steps}}步</view>
            </view>
          </view>
          <view class='at-col at-col-4'>
            <text>贡献值</text>
            <view>{{item.days}}天</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import Taro from "@tarojs/taro";
import http from "../../../utils/request"
import api from "../../../config/api"
import "./index.scss";

export default {
  data() {
    return {
      usersList: [],
      teamRank: {},
      id: 0
    };
  },
  methods: {
    getData() {
      http.request(api.teamUser, {tnumber: this.id}).then(res => {
        if(res.code === 0) {
          this.usersList = res.data.user_rank
          this.teamRank = res.data.team_rank
        }
      })
    }
  },
  onLoad(option) {
    this.id = option.id
    this.getData()
  },
};
</script>
