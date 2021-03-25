// components/head/index.js
// 组件形式，js中使用Component
Component({
  data:{
    paddingTopNum: wx.getSystemInfoSync().statusBarHeight+7,
  },
  properties:{
    text:{
      type:String,
      value:""
    },
    showLeft:{
      type:Boolean,
      value:false
    },
    url:{
      type:Array,
      value:[]
    }
  },
  methods:{
    navigatorTo(){
      let index = this.properties.
      wx.navigateTo({
        url:this.properties.url[0],
      })
    }
  }
})