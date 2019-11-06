import WxValidate from "../../utils/WxValidate.js"
import Notify from '../../components/notify/notify'
import product from './product'
import area from './area'
let currentArea = "北京市 北京市"

Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 倒计时
    time: 60 * 1000,
    // 倒计时状态
    status: false,
    // 表单内容
    form: {
      name: "",
      region: null,
      mobile: null,
      sms: "",
      company: "",
      email: "",
      product: [],
      createTime: new Date().toString()
    },
    // 产品树状态
    productModal: false,
    // 地区状态
    areaModal: false,
    // 地区数据
    areaList: area,
    // 地区loading
    loading: true,
    // 当前选中的面板
    mainActiveIndex: 0,
    // 选中的产品
    activeId: [],
    // 产品树最大值
    max: 3,
    // 产品数据
    product: [
      {
        text: '所有产品',
        children: [...product.pro1, ...product.pro2, ...product.pro3, ...product.pro4]
      },
      {
        text: product.pro1Name,
        children: product.pro1
      },
      {
        text: product.pro2Name,
        children: product.pro2
      }, 
      {
        text: product.pro3Name,
        children: product.pro3
      },
      {
        text: product.pro4Name,
        children: product.pro4
      }
    ]
  },

  /**
  * 倒计时结束后调用，改变倒计时控件状态并重置60
  */
  changeTime: function() {
    this.setData({ time: 60 * 1000, status: false })
  },

  /**
  * 切换产品树导航
  */
  onClickNav({ detail = {} }) {
    this.setData({
      mainActiveIndex: detail.index || 0
    });
  },

  /**
  *  点击切换并保存产品，存在优化条件
  */
  onClickItem({ detail = {} }) {
    const { activeId } = this.data;
    const { product } = this.data.form;
    const index = activeId.indexOf(detail.id);
    const text = activeId.indexOf(detail.text);
    if (index > -1) {
      activeId.splice(index, 1);
      product.splice(text, 1);
    } else {
      activeId.push(detail.id);
      product.push(detail.text);
    }
    this.setData({ activeId });
    this.setData({ "form.product": product });
  },

  /**
  * 保存地区数据
  */
  saveArea: function() {
    this.setData({
      "form.region": currentArea,
      areaModal: false
    })
  },

  /**
  * 改变当前选择地区
  */
  changeArea: function (e) {
    currentArea = e.detail.values[0].name + " " + e.detail.values[1].name
  },

  /**
  * 展开地区
  */
  openArea() {
    this.setData({ areaModal: true });
  },

  /**
   * 关闭地区
   */
  closeArea() {
    this.setData({ areaModal: false });
  },

  /**
   * 展开产品
   */
  openProduct() {
    this.setData({ productModal: true });
  },

  /**
   * 关闭产品
   */
  closeProduct() {
    this.setData({ productModal: false });
  },

  /**
   * 数据绑定
   */
  onChange: function(e) {
    console.log(e)
    const key = "form" + "." +(e.currentTarget.dataset.name)
    const value = e.detail
    this.setData({
      [key]: value
    })
  },

  /**
   * 发送sms
   */
  sendSMS: function () {
    var _this = this;
    _this.setData({ status: true })
    // 调用云函数sendSms
    wx.cloud.callFunction({
      name: 'sendSms',
      data: {
        phone: _this.data.form.mobile
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

  // 表单提交
  submitForm: function () {
    let params = this.data.form
    var code = wx.getStorageSync("code")
    if ((this.WxValidate.checkForm(params)) && (params.sms == code)) {
      const db = wx.cloud.database();
      const userInfo = db.collection("users");
      userInfo.add({
        data: params,
        success: function (res) {
          wx.setStorage({
            key: 'recordFlag',
            data: 'isLogin',
          })
          wx.showToast({
            title: '提交成功',
            icon: "loading",
            success: function() {
              wx.redirectTo({
                url: '../carousel/carousel',
              })
            }
          })
        },
        fail: console.error
      });
    
    } else if (this.WxValidate.checkForm(params) && (params.sms != code)) {
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