/*
080_ウェブカメラの映像を表示する
*/

//ウェブカメラが接続されているPCやスマートフォンで
//カメラからの映像を利用できる

let capture;
const images = []

function setup() {
  createCanvas(640, 480);

  //ビデオデバイスの読み込み．詳細な設定はリファレンスを参照
  //https://p5js.org/reference/#/p5/createCapture
  capture = createCapture(VIDEO);
  capture.hide();
}

function draw() {
  background(220);

  //カメラからの映像はcaptureで利用できるが一旦getしてイメージとして扱うほうが軽量
  let img = capture.get();
  images.push(img)
  if(images.length > 100){
    const firstImg = images.shift()
    for(i = 0; i < 100; i++) {
      const cImg = images[i]
      image(img, 0, i * 10);
    }
  }

  //これ以降は画像の再構成の作例などを参照し，点描などが可能

  image(img, 0, 0);
}