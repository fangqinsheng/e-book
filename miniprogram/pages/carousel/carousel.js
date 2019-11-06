// 判断滑动手势
var getTouchData = require("../../utils/touch.js")

Page({
  data: {
    // 图册
    carousel: [
      { id: 1, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/1.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 2, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/2.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 3, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/3.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 4, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/4.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 5, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/5.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 6, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/6.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 7, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/7.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 8, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/8.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 9, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/9.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 10, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/10.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 11, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/11.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 12, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/12.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 13, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/13.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 14, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/14.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 15, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/15.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 16, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/16.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 17, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/17.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 18, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/18.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 19, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/19.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 20, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/20.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 21, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/21.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 22, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/22.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 23, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/23.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 24, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/24.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 25, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/25.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 26, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/26.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 27, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/27.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 28, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/28.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 29, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/29.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 30, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/30.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 31, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/31.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 32, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/32.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 33, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/33.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 34, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/34.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 35, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/35.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 36, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/36.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 37, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/37.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 38, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/38.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 39, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/39.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 40, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/40.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 41, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/41.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 42, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/42.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 43, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/43.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 44, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/44.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 45, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/45.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 46, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/46.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 47, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/47.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 48, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/48.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 49, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/49.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 50, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/50.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 51, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/51.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 52, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/52.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 53, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/53.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 54, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/54.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 55, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/55.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 56, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/56.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 57, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/57.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 58, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/58.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 59, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/59.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 60, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/60.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 61, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/61.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 62, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/62.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 63, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/63.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 64, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/64.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 65, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/65.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 66, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/66.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 67, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/67.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 68, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/68.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 69, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/69.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 70, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/70.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 71, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/71.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 72, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/72.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 73, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/73.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 74, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/74.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 75, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/75.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 76, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/76.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 77, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/77.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 78, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/78.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 79, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/79.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 80, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/80.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 81, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/81.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 82, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/82.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 83, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/83.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 84, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/84.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 85, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/85.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 86, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/86.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 87, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/87.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 88, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/88.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 89, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/89.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 90, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/90.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 91, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/91.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 92, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/92.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 93, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/93.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 94, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/94.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 95, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/95.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 96, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/96.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 97, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/97.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 98, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/98.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 99, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/99.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 100, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/100.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 101, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/101.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 102, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/102.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 103, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/103.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 104, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/104.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 105, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/105.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 106, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/106.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 107, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/107.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 108, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/108.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 109, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/109.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 110, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/110.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 111, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/111.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 112, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/112.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 113, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/113.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 114, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/114.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 115, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/115.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 116, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/116.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 117, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/117.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 118, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/118.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 119, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/119.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 120, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/120.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 121, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/121.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 122, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/122.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 123, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/123.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 124, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/124.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 125, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/125.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false },
      { id: 126, url: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/126.jpg", def: "cloud://e-book-sfame.652d-e-book-sfame-1257383114/carousel/loading.gif", show: false }
    ],
    // 侧边栏
    aside: [
      { id: 2, name: "标示盒", range: "P1-P7" },
      { id: 9, name: "保鲜盒", range: "P8-P13" },
      { id: 15, name: "份数盘", range: "P14-P25" },
      { id: 27, name: "储物桶", range: "P26-P31" },
      { id: 33, name: "储物箱", range: "P32-P37" },
      { id: 39, name: "物流箱", range: "P38-P41" },
      { id: 43, name: "整理箱", range: "P42-P3" },
      { id: 45, name: "原料箱", range: "P44-P46" },
      { id: 48, name: "面团箱", range: "P47-P49" },
      { id: 51, name: "托盘", range: "P50-P57" },
      { id: 59, name: "餐盖", range: "P58-P63" },
      { id: 65, name: "周转箱", range: "P64-P67" },
      { id: 69, name: "筛", range: "P68-P75" },
      { id: 77, name: "杯筐", range: "P76-P81" },
      { id: 83, name: "服务车", range: "P82-P85" },
      { id: 87, name: "砧板", range: "P86-P89" },
      { id: 91, name: "桌面用品", range: "P90-P99" },
      { id: 101, name: "调味罐", range: "P100-P103" },
      { id: 105, name: "台牌", range: "P104-P107" },
      { id: 109, name: "展示架", range: "P108-P115" },
      { id: 117, name: "其他", range: "P116-P119" },
      { id: 121, name: "环保餐盒", range: "P120-P123" }
    ],
    // 弹框控制
    dialogModal: false,
    // 侧边栏控制
    asideModal: false,
    // 轮播当前页
    swiperCurrent: 0,
    // 手指
    touch: {
      x: "",
      y: ""
    },
    // 对话框内容
    dialog: {
      title: "温馨提示",
      description: "为了更好的向您推荐适合您的产品，请填写您的相关企业信息，感谢您的使用！",
      btn: "前往填写"
    },
    guide: false,
    step: false, 
  },

  /**
   * 侧边栏点击滚动
   */
  swiperChange: function (e) {
    const current = e.currentTarget.dataset.id;
    this.closeAside(current);
  },

  /**
   * 跳转路由
   */
  navigate: function () {
    wx.navigateTo({
      url: '/pages/collect/collect',
    })
  },

  /**
   * 展开侧边栏
   */
  openAside: function () {
    this.setData({
      asideModal: true
    })
  },

  /**
  * 关闭侧边栏
  */
  closeAside: function (ID) {
    this.setData({
      asideModal: false,
      swiperCurrent: ID
    })
  },

  /**
  * 滑动开始
  */
  touchStart: function (e) {
    this.setData({
      "touch.x": e.changedTouches[0].clientX,
      "touch.y": e.changedTouches[0].clientY
    });
  },

  /**
   * 滑动结束
   */
  touchEnd: function (e) {
    let endX = e.changedTouches[0].clientX;
    let endY = e.changedTouches[0].clientY;
    let startX = this.data.touch.x;
    let startY = this.data.touch.y;
    const turn = getTouchData.getTouchData(endX, endY, startX, startY);
    if (turn == "left") {
      this.openAside();
    } else {
      this.closeAside();
    }
  },


  /**
   * 引导控件
   * 可能需要改的
   */

  next: function (e) {
    this.setData({
      step: true
    })
  },

  last: function (e) {
    this.setData({
      guide: false
    })
  },

  /**
   * 打开引导页
   */
  openGuide: function () {
    var time = 0;
    var that = this;
    that.setData({
      guide: true
    })

    var interval = setInterval(function () {
      time++;
      if (time == 5) {
        that.setData({
          step: true
        })
      } else if (time == 10) {
        that.setData({
          guide: false
        })
        clearInterval(interval);
      }
    }, 1000);
  },

  /**
   * 生命周期函数--监听页面加载完成
   */
  onShow: function () {
    // const db = wx.cloud.database()
    // var that = this
    // let skip = 0
    // var data = []
    // for (let i = 0; i < 7; i++) {
    //   db.collection('carousel').skip(0).get().then(function (res) {
    //     data.concat(res.data)
    //     that.setData({
    //       carousel: data
    //     })
    //   })
    //   skip += 20
    // }
    // console.log(this.data.carousel)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let carousel = this.data.carousel // 获取图片数组数据
    for (let i in this.data.carousel) {
      wx.createIntersectionObserver().relativeToViewport({ bottom: 100 }).observe('.item-' + i, (ret) => {
        if (ret.intersectionRatio > 0) {
          carousel[i].show = true
        }
        this.setData({
          carousel
        })
      })
    }
  },

  /**
   * 生命周期函数--监听导入
   */
  onLoad: function() {
    const that = this;
    var interval = setInterval(function () {
      const flag = wx.getStorageSync("recordFlag")
      if (!flag) {
        that.setData({
          dialogModal: true
        })
        clearInterval(interval)
      } else {
        that.openGuide()
        clearInterval(interval)
      }
    }, 1500)
  }
})