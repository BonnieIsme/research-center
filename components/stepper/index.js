Component({
  data:{
    value:1
  },
  properties:{
    post:{
      type:Number,
      value:1
    }
  },
  methods:{
    // 减少
    minus(){
     if(this.properties.post == 1){
       wx.showToast({
         title: '亲，不能再少了哦！',
       })
     }else{
       this.properties.post -= 1;
       this.setData({
         value:this.properties.post
       })
     }
     console.log(`现在数量为${this.data.value}`);
    },

    // 增加
    plus(){
      this.properties.post += 1;
      this.setData({
        value:this.properties.post
      })
      console.log(`现在数量为${this.data.value}`);
    },

    // 输入框改变
    changeValue(e){
      this.setData({
        value:e.detail.value
      })
      console.log(`现在数量为${this.data.value}`);
    }
  }
})