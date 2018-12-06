import React, { Component } from 'react';
import imgSrc from './img.jpeg';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.canvas1();
    this.canvas2();
    this.canvas3();
    this.canvas4();
  }

  canvas1 = () => {
    const canvas = document.querySelector('#canvas1');
    const ctx = canvas.getContext('2d');
    ctx.moveTo(0, 0);
    ctx.lineTo(300, 150);
    ctx.stroke();
  }

  canvas2 = () => {
    const canvas = document.querySelector('#canvas2');
    const ctx = canvas.getContext('2d');
    ctx.moveTo(0, 0);
    ctx.lineTo(10, 20);
    ctx.stroke();
  };

  canvas3 = () => {
    const canvas = document.querySelector('#canvas3');
    const ctx = canvas.getContext('2d');
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 200);
    ctx.stroke();
  };

  canvas4 = () => {
    const canvas = document.querySelector('#canvas4');
    const ctx = canvas.getContext('2d');

    const img = new Image();
    img.onload = () => {
      console.log('img:', img.width, img.height);
      const targetWidth = 100;
      const targetHeight = 100;
      ctx.drawImage(img, (1080 - 720) / 2, 0, 720, 720, 0, 0, targetWidth, targetHeight);
    };
    img.src = imgSrc;
    
  };

  render() {
    return (
      <div className="App">
        <div className="item">
          <p>画布大小：300 * 150；标签大小：100 * 100</p>
          <canvas id="canvas1" className="canvas1"></canvas>
        </div>
        <div className="item">
          <p>画布大小：10 * 20；标签大小：100 * 100</p>
          <canvas id="canvas2" className="canvas2" width={10} height={20}></canvas>
        </div>
        <div className="item">
          <p>画布大小：200 * 200；标签大小：100 * 100</p>
          <canvas id="canvas3" className="canvas3" width={200} height={200}></canvas>
        </div>
        <div className="item">
          <p>剪裁图片</p>
          <img src={imgSrc} style={{ width: '200px' }} alt=" " />
          <canvas id="canvas4" className="canvas4" width={400} height={300}></canvas>
        </div>
      </div>
    );
  }
}

export default App;
