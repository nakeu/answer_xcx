const api = {
  getCode: '/xcx/login/code', // code换取请求token
  homeInit: '/xcx/wuser/home', // 首页数据
  getTeam: '/xcx/search/team', // 获取部门数据
  qustionList: '/xcx/search/question-cate', // 篇章数据
  getQuestion: '/xcx/question/exam-paper', // 单个篇章对应的题目数据
  user: '/xcx/wuser/info', // 个人中心
  exchangeStep: '/xcx/wuser/step-to-day', // 兑换步数
  updateUser: '/xcx/wuser/update-wxinfo', // 用户授权
  baseinfo: '/xcx/wuser/update-baseinfo', // 部门信息
  subKey: '/xcx/question/answer', // 提交答案
  teamRank: '/xcx/rank/team', // 部门排行榜
  teamUser: '/xcx/rank/team-user', // 部门内用户排行榜
}

export default api