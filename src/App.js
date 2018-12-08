import React, { Component } from 'react';
import imgSrc from './img.jpeg';
import catImgSrc from './cat.jpg';
import './App.css';

const getContext2D = (id) => document.querySelector(`#${id}`).getContext('2d');

const drawRoundedRect = (ctx, x, y, width, height, radius, type) => {
  ctx.moveTo(x, y + radius);
  ctx.beginPath();
  ctx.arc(x + radius, y + radius, radius, Math.PI, 1.5 * Math.PI);
  ctx.arc(x + width - radius, y + radius, radius, 1.5 * Math.PI, 2 * Math.PI);
  ctx.arc(x + width - radius, y + height - radius, radius, 0, 0.5 * Math.PI);
  ctx.arc(x + radius, y + height - radius, radius, 0.5 * Math.PI, Math.PI);
  ctx.closePath();
  const method = type || 'stroke';  // 默认描边，传入fill即可填充矩形
  ctx[method]();
};

const drawRoundedImage = (ctx, radius, img, sx, sy, swidth, sheight, x, y, width, height) => {
  ctx.save();
  ctx.moveTo(x, y + radius);
  ctx.beginPath();
  if (width === height && radius >= width / 2) {
    ctx.arc(x + radius, y + radius, radius, 0, 2 * Math.PI);
  } else {
    ctx.arc(x + radius, y + radius, radius, Math.PI, 1.5 * Math.PI);
    ctx.arc(x + width - radius, y + radius, radius, 1.5 * Math.PI, 2 * Math.PI);
    ctx.arc(x + width - radius, y + height - radius, radius, 0, 0.5 * Math.PI);
    ctx.arc(x + radius, y + height - radius, radius, 0.5 * Math.PI, Math.PI);
  }
  ctx.closePath();
  ctx.clip();
  ctx.drawImage(img, sx, sy, swidth, sheight, x, y, width, height);
  ctx.restore();
};

const drawImageToWhatYouWant = (ctx, getPath, img, sx, sy, swidth, sheight, x, y, width, height) => {
  ctx.save();
  getPath(ctx);
  ctx.clip();
  ctx.drawImage(img, sx, sy, swidth, sheight, x, y, width, height);
  ctx.restore();
};

class App extends Component {
  componentDidMount() {
    this.canvas1();
    this.canvas2();
    this.canvas3();
    this.canvas4();
    this.canvas5();
    this.canvas6();
    this.canvas7();
    this.canvas8();
    this.canvas9();
    this.canvas10();
    this.canvas11();
    this.canvas12();
    this.canvas13();
    this.canvas14();
    this.canvas15();
    this.canvas16();
    this.canvas17();
  }

  canvas17 = () => {
    const ctx = getContext2D('canvas17');
    const img = new Image();
    img.onload = () => {
      drawRoundedImage(ctx, 10, img, (1080 - 720) / 2, 0, 720, 720, 10, 10, 180, 180);
    };
    img.src = imgSrc;
  };

  canvas16 = () => {
    const ctx = getContext2D('canvas16');
    
    const img = new Image();
    img.onload = () => {
      ctx.save();

      ctx.strokeStyle = '#fff';
      drawRoundedRect(ctx, 20, 20, 100, 100, 10);
      ctx.clip();
      ctx.drawImage(img, 500, 100, 500, 500, 20, 20, 100, 100);
      ctx.restore();

      ctx.strokeStyle = '#fff';
      drawRoundedRect(ctx, 150, 20, 100, 100, 5);
      ctx.clip();
      ctx.drawImage(img, 500, 100, 500, 500, 150, 20, 100, 100);
    };
    img.src = imgSrc;
  };

  canvas15 = () => {
    const ctx = getContext2D('canvas15');

    // 定义一个区域
    drawRoundedRect(ctx, 20, 20, 100, 100, 10);
    
    const img = new Image();
    img.onload = () => {
      ctx.save();
      ctx.clip();
      ctx.drawImage(img, 0, 0, 100, 100);
    };
    img.src = imgSrc;
  };

  canvas14 = () => {
    const ctx = getContext2D('canvas14');
    const img = new Image();
    img.onload = () => {
      const pat = ctx.createPattern(img, 'repeat');
      ctx.fillStyle = pat;
      drawRoundedRect(ctx, 130, 30, 250, 260, 10, 'fill');
    };
    img.src = catImgSrc;
  };

  canvas13 = () => {
    const ctx = getContext2D('canvas13');
    const img = new Image();
    img.onload = () => {
      console.log('catImg', img.width, img.height);
      const pat = ctx.createPattern(img, 'no-repeat');
      ctx.fillStyle = pat;
      drawRoundedRect(ctx, 130, 30, 250, 260, 10, 'fill');
    };
    img.src = catImgSrc;
  };

  canvas12 = () => {
    const ctx = getContext2D('canvas12');
    ctx.beginPath();
    ctx.arc(20, 20, 20, Math.PI, 1.5 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(80, 20, 20, 1.5 * Math.PI, 2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(20, 80, 20, 0.5 * Math.PI, Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(80, 80, 20, 0, 0.5 * Math.PI);
    ctx.stroke();

    ctx.moveTo(20, 0);
    ctx.lineTo(80, 0);
    ctx.moveTo(100, 20);
    ctx.lineTo(100, 80);
    ctx.moveTo(20, 100);
    ctx.lineTo(80, 100);
    ctx.moveTo(0, 20);
    ctx.lineTo(0, 80);
    ctx.stroke();

    drawRoundedRect(ctx, 20, 20, 50, 50, 10);
  };

  canvas11 = () => {
    const ctx = getContext2D('canvas11');
    ctx.arc(50, 50, 20, 0, 2 * Math.PI);
    ctx.stroke();
  }

  canvas10 = () => {
    const ctx = getContext2D('canvas10');

    ctx.beginPath();
    ctx.arc(20, 20, 20, Math.PI, 1.5 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(80, 20, 20, 1.5 * Math.PI, 2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(20, 80, 20, 0.5 * Math.PI, Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(80, 80, 20, 0, 0.5 * Math.PI);
    ctx.stroke();
  };

  canvas9 = () => {
    const ctx = getContext2D('canvas9');
    ctx.arc(50, 50, 25, Math.PI, 1.5 * Math.PI);
    ctx.stroke();
  };

  canvas8 = () => {
    const ctx = getContext2D('canvas8');
    ctx.arc(50, 50, 25, 0, 0.5 * Math.PI);
    ctx.stroke();
  };

  canvas1 = () => {
    const ctx = getContext2D('canvas1');
    ctx.moveTo(0, 0);
    ctx.lineTo(300, 150);
    ctx.stroke();
  }

  canvas2 = () => {
    const ctx = getContext2D('canvas2');
    ctx.moveTo(0, 0);
    ctx.lineTo(10, 20);
    ctx.stroke();
  };

  canvas3 = () => {
    const ctx = getContext2D('canvas3');
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 200);
    ctx.stroke();
  };

  canvas4 = () => {
    const ctx = getContext2D('canvas4');

    const img = new Image();
    img.onload = () => {
      console.log('img:', img.width, img.height);
      ctx.drawImage(img, 10, 20);
    };
    img.src = imgSrc;
  };

  canvas5 = () => {
    const ctx = getContext2D('canvas5');

    const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, 0, 0, 500, 500, 30, 30, 150, 150);
    };
    img.src = imgSrc;
  };

  canvas6 = () => {
    const ctx = getContext2D('canvas6');

    const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, 0, 0, 150, 150);
    };
    img.src = imgSrc;
  };

  canvas7 = () => {
    const ctx = getContext2D('canvas7');

    const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, 0, 0, 1080, 720, 0, 0, 150, 150);
    };
    img.src = imgSrc;
  };

  render() {
    return (
      <div className="App">
        <div className="item">
          <p>坐标系</p>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div>
              <p>画布大小：300 * 150；标签大小：100 * 100</p>
              <canvas id="canvas1" style={{ width: '100px', height: '100px' }}></canvas>
            </div>
            <div>
              <p>画布大小：10 * 20；标签大小：100 * 100</p>
              <canvas id="canvas2" width={10} height={20} style={{ width: '100px', height: '100px' }}></canvas>
            </div>
            <div>
              <p>画布大小：200 * 200；标签大小：100 * 100</p>
              <canvas id="canvas3" width={200} height={200} style={{ width: '100px', height: '100px' }}></canvas>
            </div>
          </div>
        </div>
        <div className="item">
          <p>圆、圆弧、圆角矩形</p>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div>
              <p>圆</p>
              <canvas id="canvas11" width={100} height={100}></canvas>
            </div>
            <div>
              <p>圆弧0-0.5PI</p>
              <canvas id="canvas8" width={100} height={100}></canvas>
            </div>
            <div>
              <p>圆弧PI-1.5PI</p>
              <canvas id="canvas9" width={100} height={100}></canvas>
            </div>
            <div>
              <p>四段圆弧</p>
              <canvas id="canvas10" width={100} height={100}></canvas>
            </div>
            <div>
              <p>圆角矩形</p>
              <canvas id="canvas12" width={100} height={100}></canvas>
            </div>
          </div>
        </div>
        <div className="item">
          <p>文理</p>
          <img src={catImgSrc} alt=" " />
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div>
              <p>no-repeat</p>
              <canvas id="canvas13" width={400} height={300}></canvas>
            </div>
            <div>
              <p>repeat</p>
              <canvas id="canvas14" width={400} height={300}></canvas>
            </div>
          </div>
        </div>
        <div className="item">
          <p>剪裁图片（原本大小：1080 * 720）</p>
          <img src={imgSrc} style={{ width: '200px' }} alt=" " />
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div>
              <p>三个参数</p>
              <canvas id="canvas4" width={200} height={200}></canvas>
            </div>
            <div>
              <p>九个参数</p>
              <canvas id="canvas5" width={200} height={200}></canvas>
            </div>
            <div>
              <p>五个参数</p>
              <canvas id="canvas6" width={200} height={200}></canvas>
            </div>
            <div>
              <p>传入九个参数，验证五个参数的剪裁</p>
              <canvas id="canvas7" width={200} height={200}></canvas>
            </div>
          </div>
        </div>
        <div className="item">
          <p>画布剪裁</p>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div>
              <canvas id="canvas15" width={150} height={150}></canvas>
            </div>
            <div>
              <canvas id="canvas16" width={300} height={130}></canvas>
            </div>
            <div>
              <canvas id="canvas17" width={200} height={200}></canvas>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
