/*
080_ウェブカメラの映像を表示する
*/

//ウェブカメラが接続されているPCやスマートフォンで
//カメラからの映像を利用できる

let capture;
const images = []
let count = 0
const slitheight = 10

function setup() {
  createCanvas(640, 480);

  //ビデオデバイスの読み込み．詳細な設定はリファレンスを参照
  //https://p5js.org/reference/#/p5/createCapture
  capture = createCapture(VIDEO);
  capture.hide();
}

function draw() {
  //background(220);
  count++

  if(count % 2 == 0){
    let img = capture.get();
    images.push(img)
  }
    if(images.length > 50){
      images.shift()
      for(i = 0; i < 50; i++) {
        const cImg = images[49-i]
        image(cImg, 0, i * 12, 600, 12, 0, i * 12, 600, 12);
      }
    }
}