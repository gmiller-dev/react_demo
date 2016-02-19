import React from 'react';

function drawClock(ctx, radius, time) {
  ctx.arc(0, 0, radius, 0 , 2*Math.PI);
  ctx.fillStyle = "white";
  ctx.fill();
  drawClockFace(ctx, radius);
  drawNumbers(ctx, radius);
  drawTime(ctx, radius, time);
}

function drawClockFace(ctx, radius){
  var grad;

  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2*Math.PI);
  ctx.fillStyle = 'white';
  ctx.fill();

  grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
  grad.addColorStop(0, '#333');
  grad.addColorStop(0.5, 'white');
  grad.addColorStop(1, '#333');
  ctx.strokeStyle = grad;
  ctx.lineWidth = radius*0.1;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
  ctx.fillStyle = '#333';
  ctx.fill();
}

function drawNumbers(ctx, radius) {
  var ang;
  var num;
  ctx.font = radius*0.15 + "px arial";
  ctx.textBaseline="middle";
  ctx.textAlign="center";
  for(num= 1; num < 13; num++){
    ang = num * Math.PI / 6;
    ctx.rotate(ang);
    ctx.translate(0, -radius*0.85);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius*0.85);
    ctx.rotate(-ang);
  }
}
function drawTime(ctx, radius, time){
  var hour = time.getHours();
  var minute = time.getMinutes();
  var second = time.getSeconds();
  //hour
  hour=hour%12;
  hour=(hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
  drawHand(ctx, hour, radius*0.5, radius*0.07);
  //minute
  minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
  drawHand(ctx, minute, radius*0.8, radius*0.07);
  // second
  second=(second*Math.PI/30);
  drawHand(ctx, second, radius*0.9, radius*0.02);
}

function drawHand(ctx, pos, length, width) {
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.lineCap = "round";
  ctx.moveTo(0,0);
  ctx.rotate(pos);
  ctx.lineTo(0, -length);
  ctx.stroke();
  ctx.rotate(-pos);
}


let AnalogDisplay = React.createClass({
  componentDidMount(){
    var canvas = document.getElementById("canvas");
    this.ctx = canvas.getContext("2d");

    var radius = canvas.height / 2;
    this.ctx.translate(radius, radius);
    this.radius = radius * 0.90;

    drawClock(this.ctx, this.radius, this.props.time);
  },


  componentDidUpdate(){
    drawClock(this.ctx, this.radius, this.props.time);
  },

  render(){
    let {width, height} = this.props;
    return (
      <canvas  id="canvas" width={width} height={height} style={{backgroundColor:'#333'}} ></canvas>
    );
  }
});

export default AnalogDisplay;
