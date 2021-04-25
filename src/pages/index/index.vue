<template>
  <view class="index">
    <image
        class="map"
        mode="widthFix"
        src="https://dt.zyxtkt.cn/dtimg/map.png"
      />

    <view class="track">
      <view class="track_1" v-for="(item, index) in data.teams" :key="index" :class="'p'+Math.round(item.rate * 100)"><view class="bm">{{item.ttitle}}</view></view>
    </view>
    
    <view class="stepBox">
      <view class="exchangeBtn" @tap="exchange">兑换天数<text>GO</text></view>
      <view class="title">当前已走到 <view class="text" @tap="isZs = !isZs">新民主主义革命时期 <AtIcon value='chevron-right'></AtIcon></view></view>
      <view class='at-row at-row--wrap'>
        <view class='at-col at-col-4'>
          <view class="name">累计步数</view>
          {{data.total_steps}}
        </view>
        <view class='at-col at-col-4'>
          <view class="name">累计行走天数</view>
          {{data.total_days}}
        </view>
        <navigator url="/pages/ranking/index" class='at-col at-col-4'>
          <view class="name">排名 <view class="jt"><AtIcon value='chevron-right'></AtIcon></view></view>
          <text>{{data.rank}}</text>
        </navigator>
        <view class='at-col at-col-4'>
          <view class="name">兑换比例</view>
          {{data.exchange_rate}}步=1天
        </view>
        <view class='at-col at-col-4'>
          <view class="name">今日兑换步数</view>
          {{data.today_steps}}
        </view>
        <view class='at-col at-col-4'>
          <view class="name">可兑换步数</view>
          {{data.can_exchange_steps}}
        </view>
      </view>
    </view>

    <AtCurtain
      :isOpened="isBindbase"
      :onClose="onClose"
    >
      <view class="popup">
        <view class="headerBox">用户登录</view>
        <view class="from">
          <picker
            mode='selector'
            :range="teamData"
            rangeKey="ttitle"
            :value="teamDataIndex"
            @change="handleTaem"
            @cancel="handleCancel"
          >
            <view class='fromItem' :class="{active: teamDataIndex}">{{ teamDataIndex ? teamData[teamDataIndex].ttitle : '部门'}}</view>
          </picker>
          <AtInput
            name='name'
            type='text'
            placeholder='姓名'
            :value="name"
            :onChange="handleInput"
          />
          <AtButton type='primary' color="#C92C1C" :on-click="userSubmit">登录</AtButton>
        </view>
      </view>
    </AtCurtain>
    <AtCurtain
      :isOpened="isSucc"
      :onClose="onCloseSucc"
    >
      <view class="popup">
        <view class="headerBox">
          <icon size="60" type="success" color="#fff" />
          <view>兑换成功</view>
        </view>
        <view class="textBox">
          <text>你已累计行走了{{data.total_days}}天</text>
          距离终点更进一步了，继续加油！
        </view>
      </view>
    </AtCurtain>
    <AtFloatLayout 
      :isOpened="isZs"
      :onClose="handleCloseZs">
        <view class="zsxj">
          <view class="headerBox absolute">知识详解</view>
          {{ data.current_question_cate&&data.current_question_cate.desc_str }}
        </view>
    </AtFloatLayout>
  </view>
</template>

<script>
import Taro from "@tarojs/taro"
import { baseUrl } from '../../config'
import http from "../../utils/request";
import api from "../../config/api"
import './index.scss' 
import './position.scss'
export default {
  data () {
    return {
      userInfo: {},
      encryptedData: {},
      isBindbase: false,
      data: {},
      teamData: [],
      teamDataIndex: null,
      name: '',
      isSucc: false,
      isZs: false
    }
  },
  methods: {
    handleClick () {
      this.show = true
    },
    handleClose () {
      this.show = false
    },
    onClose() {
      this.isBindbase = false
    },
    onCloseSucc() {
      this.isSucc = false
    },
    handleCloseZs() {
      this.isZs = false
    },
    async exchange() {
      if(Taro.getStorageSync('need_info')){
        await this.getUserProfile()
        this.isBindbase = true
        return
      }
      this.exchangeStep()
    },
    exchangeStep() {
      http.request(api.exchangeStep, this.encryptedData).then(res => {
        if(res.code === 0) {
          this.isSucc = true
          this.getInit()
        }
       
      })
    },
    async getInit() {
      const {encryptedData, iv} = await Taro.getWeRunData()
      const obj = {
        encrypted_data: encryptedData,
        iv: iv
      }
      this.encryptedData = obj
      http.request(api.homeInit, obj).then(res => {
        this.data = res.data
      })
    },
    getUserProfile() {
      Taro.getUserProfile({
        desc: '用于完善部门个人资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        success: (res) => {
          this.userInfo = res.userInfo
          console.log('userInfo', this.userInfo)
        }
      })
    },
    handleInput(val) {
      this.name = val
    },
    handleTaem(e) {
      this.teamDataIndex = e.detail.value
    },
    handleCancel(e) {
      console.log('handleCancel', e)
    },
    taemInit() {
      http.request(api.getTeam).then(res => {
        this.teamData = res.data
      })
    },
    userSubmit() {
      if(Object.keys(this.userInfo).length == 0) {
        return this.getUserProfile()
      }
      const obj = {
        avatar: this.userInfo.avatarUrl,
        nickname: this.userInfo.nickName,
        tnumber: this.teamData[this.teamDataIndex].tnumber,
        name: this.name
      }
      http.request(api.baseinfo, obj).then(res => {
        this.isBindbase = false
        this.getInit()
        Taro.atMessage({
          message: res.message,
          type: 'success'
        })
      })
    }
  },
  async mounted() {
    const { code } = await Taro.login()
    await http.request(api.getCode, {code: code}).then(res => {
      Taro.setStorageSync('token', res.data.api_token)
      Taro.setStorageSync('need_info', res.data.need_info)
    })
    await this.getInit()
    this.taemInit()
  },
}
</script>
