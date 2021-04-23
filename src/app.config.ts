export default {
  pages: [
    // 'pages/ranking/info/index',
    'pages/intro/index',
    'pages/index/index',
    'pages/answer/index',
    'pages/my/index',
    'pages/ranking/index',
    'pages/ranking/info/index',
    'pages/answer/item/index',
  ],
  tabBar: {
    list: [{
      iconPath: 'asset/images/home.png',
      selectedIconPath: 'asset/images/home_active.png',
      pagePath: 'pages/index/index',
      text: '首页'
    }, {
      iconPath: 'asset/images/answer.png',
      selectedIconPath: 'asset/images/answer_active.png',
      pagePath: 'pages/answer/index',
      text: '我要答题'
    }, {
      iconPath: 'asset/images/my.png',
      selectedIconPath: 'asset/images/my_active.png',
      pagePath: 'pages/my/index',
      text: '我的'
    }],
    'color': '#7E7E7E',
    'selectedColor': '#C92C1C',
    'backgroundColor': '#fff',
    'borderStyle': 'white'
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#C92C1C',
    navigationBarTitleText: 'Answer',
    navigationBarTextStyle: 'white'
  }
}
