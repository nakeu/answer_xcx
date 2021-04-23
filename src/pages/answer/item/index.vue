<template>
  <view class="content" :class="{over: isOver}">
    <view v-if="!isOver" >
    <view class="title">{{questionTitle}}</view>
    <view class="num">{{qIndex + 1}}/{{question.length}}</view>
    <view class='swiper'>
      <view class="box">
        <view class='topic' v-if="question">{{question[qIndex].qtitle}}</view>
        <view class="options">
          <view class="item" hover-class="active" v-for="item in question[qIndex].options" :key="item.id" @tap="clickAnwer(question[qIndex].qnumber,item.id)">{{item.str}}、{{item.otitle}}</view>
        </view>
      </view>
    </view>
    </view>
    <view v-else>
      <view class="iconBox">
        <icon size="60" type="success" color="#C92C1C" />
        <view>完成{{question.length}}题</view>
      </view>
      <view class="overTimebox">
        <view class="name">{{questionTitle}}</view>
        <view class='at-row'>
          <view class='at-col'>
            <image
              class="icon"
              mode="widthFix"
              src="../../../asset/images/right_icon.png"
            />答对：{{rightData.right_count}}题
          </view>
          <view class='at-col'>
            <image
              class="icon"
              mode="widthFix"
              src="../../../asset/images/time_icon.png"
            />用时：{{times}}
          </view>
        </view>
      </view>
      <navigator url="/pages/answer/index" openType="switchTab" class="goOnBtn">继续答题</navigator>
    </view>
  </view>
</template>

<script>
import Taro from "@tarojs/taro"
import http from "../../../utils/request"
import api from "../../../config/api"
import { s_to_hs } from "../../../utils"
import "./index.scss"
export default {
  data() {
    return {
      qcnumber: 0,
      questionTitle: '',
      isOver: false,
      question: [{qtitle: ''}],
      qIndex: 0,
      myKey: [],
      timer: null,
      time: 0,
      rightData: {},
      times: '',
    }
  },
  methods: {
    getData() {
      http.request(api.getQuestion, {qcnumber: this.qcnumber}).then(res => {
        this.question = res.data
        this.timer = setInterval(()=>{this.time ++}, 1000)
      })
    },
    clickAnwer(qNum, id) {
      const qObj = {qnumber: qNum, onumber: id}
      this.myKey.push(qObj)
      console.log(this.myKey,this.time)
      console.log('1',this.qIndex, this.question.length)
      if((this.qIndex + 1) >= this.question.length) {
        console.log('2',this.qIndex, this.question.length)
        clearInterval(this.timer)
        console.log(this.time,s_to_hs(this.time))
        this.times = s_to_hs(this.time)
        this.submitAnswer()
        return
      }
      this.qIndex ++
    },
    submitAnswer() {
      const obj = {
        qcnumber: this.qcnumber,
        use_time: this.time,
        answers: this.myKey
      }
      http.request(api.subKey, obj).then(res => {
        if(res.code === 0) {
          this.rightData = res.data
          this.isOver = true
        }
      })
    }
  },
  onLoad(option) {
    console.log(option)
    this.qcnumber = option.qcnumber
    this.questionTitle = option.title
    this.getData()
  },
}
</script>