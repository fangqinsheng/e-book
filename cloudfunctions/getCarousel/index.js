// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()

// 获得欲查询数据的总数
async function getCarousel(ID) {
  let count = await db.collection('carousel').where({
    "ID": id
  }).count();
  return count;
}

// 编写单次查询函数
async function getListIndexUserId(id, skip) {
  let list = await db.collection('carousel').where({
    "ID": id
  }).orderBy('_id', 'asc').skip(skip).get();
  return list.data;
}

// 云函数入口函数
exports.main = async (event, context) => {
  let count = await getCountIndexUserId(event.ID);
  count = count.total;
  let list = []
  for (let i = 0; i < count; i += 100) {
    list = quesionList.concat(await getListIndexUserId(event.id, i));
  }
  return list;
}