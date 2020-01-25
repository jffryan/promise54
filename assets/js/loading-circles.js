//------------------------------------------------------------------
// ANIMATE THE PROGRESS CIRCLES
//------------------------------------------------------------------

// AUTHOR'S NOTE: This is really lazy and I need to fix it & make it DRY when I have more time

// CANVAS 01

// Start your engines
const canvas01 = () => {
  var can = document.getElementById("canvas01"),
    spanProcent = document.getElementById("percent01"),
    c = can.getContext("2d");

  // make a circle with the designated percentage
  var posX = can.width / 2,
    posY = can.height / 2,
    fps = 1000 / 200,
    procent = 0,
    oneProcent = 360 / 100,
    result = oneProcent * 88;

  c.lineCap = "round";
  arcMove();

  function arcMove() {
    var degrees = 0;
    var acrInterval = setInterval(function() {
      degrees += 1;
      c.clearRect(0, 0, can.width, can.height);
      procent = degrees / oneProcent;

      spanProcent.innerHTML = procent.toFixed();

      c.beginPath();
      //   fill to 100%
      c.arc(
        posX,
        posY,
        70,
        (Math.PI / 180) * 270,
        (Math.PI / 180) * (270 + 360)
      );
      c.strokeStyle = "#A5DFE3";
      c.lineWidth = "10";
      c.stroke();
      // fill to value
      c.beginPath();
      c.strokeStyle = "#00AAB6";
      c.lineWidth = "10";
      c.arc(
        posX,
        posY,
        70,
        (Math.PI / 180) * 270,
        (Math.PI / 180) * (270 + degrees)
      );
      c.stroke();
      if (degrees >= result) clearInterval(acrInterval);
    }, fps);
  }
};

// CANVAS 02

const canvas02 = () => {
  var can = document.getElementById("canvas02"),
    spanProcent = document.getElementById("percent02"),
    c = can.getContext("2d");

  // make a circle with the designated percentage
  var posX = can.width / 2,
    posY = can.height / 2,
    fps = 1000 / 200,
    procent = 0,
    oneProcent = 360 / 100,
    result = oneProcent * 67;

  c.lineCap = "round";
  arcMove();

  function arcMove() {
    var degrees = 0;
    var acrInterval = setInterval(function() {
      degrees += 1;
      c.clearRect(0, 0, can.width, can.height);
      procent = degrees / oneProcent;

      spanProcent.innerHTML = procent.toFixed();

      c.beginPath();
      //   fill to 100%
      c.arc(
        posX,
        posY,
        70,
        (Math.PI / 180) * 270,
        (Math.PI / 180) * (270 + 360)
      );
      c.strokeStyle = "#A7A8D9";
      c.lineWidth = "10";
      c.stroke();
      // fill to value
      c.beginPath();
      c.strokeStyle = "#555693";
      c.lineWidth = "10";
      c.arc(
        posX,
        posY,
        70,
        (Math.PI / 180) * 270,
        (Math.PI / 180) * (270 + degrees)
      );
      c.stroke();
      if (degrees >= result) clearInterval(acrInterval);
    }, fps);
  }
};

// CANVAS 03
const canvas03 = () => {
  var can = document.getElementById("canvas03"),
    spanProcent = document.getElementById("percent03"),
    c = can.getContext("2d");

  // make a circle with the designated percentage
  var posX = can.width / 2,
    posY = can.height / 2,
    fps = 1000 / 200,
    procent = 0,
    oneProcent = 360 / 100,
    result = oneProcent * 92;

  c.lineCap = "round";
  arcMove();

  function arcMove() {
    var degrees = 0;
    var acrInterval = setInterval(function() {
      degrees += 1;
      c.clearRect(0, 0, can.width, can.height);
      procent = degrees / oneProcent;

      spanProcent.innerHTML = procent.toFixed();

      c.beginPath();
      //   fill to 100%
      c.arc(
        posX,
        posY,
        70,
        (Math.PI / 180) * 270,
        (Math.PI / 180) * (270 + 360)
      );
      c.strokeStyle = "#E2E2E2";
      c.lineWidth = "10";
      c.stroke();
      // fill to value
      c.beginPath();
      c.strokeStyle = "#999A9A";
      c.lineWidth = "10";
      c.arc(
        posX,
        posY,
        70,
        (Math.PI / 180) * 270,
        (Math.PI / 180) * (270 + degrees)
      );
      c.stroke();
      if (degrees >= result) clearInterval(acrInterval);
    }, fps);
  }
};

// CANVAS 04
const canvas04 = () => {
  var can = document.getElementById("canvas04"),
    spanProcent = document.getElementById("percent04"),
    c = can.getContext("2d");

  // make a circle with the designated percentage
  var posX = can.width / 2,
    posY = can.height / 2,
    fps = 1000 / 200,
    procent = 0,
    oneProcent = 360 / 100,
    result = oneProcent * 75;

  c.lineCap = "round";
  arcMove();

  function arcMove() {
    var degrees = 0;
    var acrInterval = setInterval(function() {
      degrees += 1;
      c.clearRect(0, 0, can.width, can.height);
      procent = degrees / oneProcent;

      spanProcent.innerHTML = procent.toFixed();

      c.beginPath();
      //   fill to 100%
      c.arc(
        posX,
        posY,
        70,
        (Math.PI / 180) * 270,
        (Math.PI / 180) * (270 + 360)
      );
      c.strokeStyle = "#F8B5A4";
      c.lineWidth = "10";
      c.stroke();
      // fill to value
      c.beginPath();
      c.strokeStyle = "#F05934";
      c.lineWidth = "10";
      c.arc(
        posX,
        posY,
        70,
        (Math.PI / 180) * 270,
        (Math.PI / 180) * (270 + degrees)
      );
      c.stroke();
      if (degrees >= result) clearInterval(acrInterval);
    }, fps);
  }
};

window.onload = function() {
  canvas01();
  canvas02();
  canvas03();
  canvas04();
};
