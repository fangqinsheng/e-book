function getTime(_this, num) {
  _this.setData({
    status: true
  })

  const time = setInterval(function(){
    num--
    _this.setData({
      sec: num
    })
    if (num == 0) {
      clearInterval(time);
      _this.setData({
        sec: 60,
        status: false
      })
    }
  }, 1000)
}

module.exports = {
  getTime
}