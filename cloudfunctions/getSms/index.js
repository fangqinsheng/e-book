// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

// 云函数入口函数
exports.main = async (event, context) => {
  console.log(event)
  console.log(context)
  const { ENV, OPENID, APPID } = cloud.getWXContext()
  const mobile = event.mobile
  console.log(mobile)

  const dbResoult = await cloud.database().collection('sms').where({
    phone: mobile
  }).get()

  return {
    dbResoult
  }
}