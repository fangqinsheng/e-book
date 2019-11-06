import WxValidate from "../../utils/WxValidate.js";
import CountDown from "../../utils/CountDown.js";
import Notify from '../../components/notify/notify';

Page({
  /**
   * 页面的初始数据
   */
  data: {
    sec: 60,
    status: false,
    form: {},

    region: ["请选择地区"],
    mobile: null,
    createTime: new Date().toString()
  },

  /**
   * 获取手机号码
   */
  mobileInput: function (e) {
    this.setData({
      mobile: e.detail.value
    })
    console.log(this.data.mobile)
  },

  /**
   * 发送sms
   */
  sendSMS: function () {
    var _this = this;
    var time = _this.data.sec;
    CountDown.getTime(_this, time)
    // 调用云函数sendSms
    wx.cloud.callFunction({
      name: 'sendSms',
      data: {
        phone: this.data.mobile
      },
      success: res => {
        switch (res.result.code) {
          case 0:
            wx.showToast({
              title: '发送成功！',
              image: "img/success.png"
            })
            wx.setStorage({
              key: 'code',
              data: res.result.data,
            })
            break
          case 7321:
            wx.showToast({
              title: '手机号码格式错误！',
              image: "img/error.png"
            })
            break
          case 7322:
            wx.showToast({
              title: '手机不能为空！',
              image: "img/error.png"
            })
            break
        }
      },
      error: res => {
        console.log(res)
      }
    })
  },



  bindAreaChange: function (e) {
    this.setData({
      region: e.detail.value,
    })
  },

  // 表单提交
  submitForm: function (e) {
    let params = e.detail.value
    var code = wx.getStorageSync("code")
    if ((this.WxValidate.checkForm(params)) && (params.validCode == code)) {
      const db = wx.cloud.database();
      const userInfo = db.collection("users");
      userInfo.add({
        data: params,
        success: function (res) {
          console.log(res);
          wx.setStorage({
            key: 'recordFlag',
            data: 'isLogin',
          })
          wx.navigateTo({
            url: '../carousel/carousel',
          })
        },
        fail: console.error
      });

    } else if (this.WxValidate.checkForm(params) && (params.validCode != code)) {
      this.showNotify("验证码错误！")

    } else {
      const res = this.WxValidate.errorList[0];
      this.showNotify(res.msg)
    }
  },

  /**
  * 展示错误信息
  */
  showNotify: function (msg) {
    Notify(msg);
  },

  // 初始化验证
  initValidate: function () {
    let rules = {
      name: {
        required: true,
        maxlength: 10
      },
      region: {
        required: true
      },
      mobile: {
        required: true,
        tel: true
      },
      sms: {
        required: true,
        digits: true
      }
    }
    let message = {
      name: {
        required: "请输入姓名",
        rangelength: "请输入2-4个汉字"
      },
      region: {
        required: "请选择地区"
      },
      mobile: {
        required: "请输入11位手机号码",
        tel: "请输入正确的手机号码"
      },
      sms: {
        required: "请输入验证码",
        digits: "验证码错误"
      }
    }
    // 创建实例对象
    this.WxValidate = new WxValidate(rules, message);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initValidate();
  }
})