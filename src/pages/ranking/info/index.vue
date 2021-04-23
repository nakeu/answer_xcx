<template>
  <view class="ranking">
    <view class="department at-row at-row__justify--between at-row__align--center">
      <view class='at-col at-col-8'>
        <view class="rankBox">
              <view class="rankNum no2">4</view>
            </view>
            <view class="info">
              <view class="name">财务部</view>
              <view class="stepNum">20113步</view>
            </view>
      </view>
      <view class='at-col at-col-4'>
        <text>贡献值</text>
        <view>2563天</view>
      </view>
    </view>
    <view class="rankingList">
      <view class="departmentBox">
        <view class='at-row at-row__justify--between at-row__align--center'>
          <view class='at-col at-col-8'>
            <view class="rankBox">
              <view class="rankNum">4</view>
            </view>
             <AtAvatar circle image='https://jdc.jd.com/img/200'></AtAvatar>
            <view class="info">
              <view class="name">财务部</view>
              <view class="stepNum">20113步</view>
            </view>
          </view>
          <view class='at-col at-col-4'>
            <text>贡献值</text>
            <view>2563天</view>
          </view>
        </view>
      </view>
      <view class="departmentBox">
        <view class='at-row at-row__justify--between at-row__align--center'>
          <view class='at-col at-col-8'>
            <view class="rankBox">
              <view class="rankNum">4</view>
            </view>
            <AtAvatar circle image='https://jdc.jd.com/img/200'></AtAvatar>
            <view class="info">
              <view class="name">财务部</view>
              <view class="stepNum">20113步</view>
            </view>
          </view>
          <view class='at-col at-col-4'>
            <text>贡献值</text>
            <view>2563天</view>
          </view>
        </view>
      </view>
      <view class="departmentBox">
        <view class='at-row at-row__justify--between at-row__align--center'>
          <view class='at-col at-col-8'>
            <view class="rankBox">
              <view class="rankNum">4</view>
            </view>
            <AtAvatar circle image='https://jdc.jd.com/img/200'></AtAvatar>
            <view class="info">
              <view class="name">财务部</view>
              <view class="stepNum">20113步</view>
            </view>
          </view>
          <view class='at-col at-col-4'>
            <text>贡献值</text>
            <view>2563天</view>
          </view>
        </view>
      </view>
      <view class="departmentBox">
        <view class='at-row at-row__justify--between at-row__align--center'>
          <view class='at-col at-col-8'>
            <view class="rankBox">
              <view class="rankNum">4</view>
            </view>
            <AtAvatar circle image='https://jdc.jd.com/img/200'></AtAvatar>
            <view class="info">
              <view class="name">财务部</view>
              <view class="stepNum">20113步</view>
            </view>
          </view>
          <view class='at-col at-col-4'>
            <text>贡献值</text>
            <view>2563天</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import Taro from "@tarojs/taro";
import "./index.scss";

export default {
  data() {
    return {
      msg: "我的",
      days: 3,
    };
  },
  mounted() {
    
  },
};
</script>
