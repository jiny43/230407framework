// const express = require('express');
// const React = require('react');
// const ReactDOMServer = require('react-dom/server');
// const app = express();

// // 루트 경로로 접근 시 현재 시각을 보여줌
// app.get('/', function(req, res) {
//   const date = new Date();
//   const hour = date.getHours();
//   const minute = date.getMinutes();
//   const second = date.getSeconds();
//   const year = date.getFullYear();
//   const day = date.getDate();
//   const month = date.getMonth();
//   const timeString = year+"년" + month + "월" + day+ "일" + hour + ":" + minute + ":" + second;
//   res.send(`${timeString}`);
// });

// // 서버 시작
// app.listen(3050, function() {
//   console.log('서버가 시작되었습니다. http://localhost:3050');
// });
//------------------------------------------------


// const express = require('express');
// const morgan = require('morgan');
// const app = express();

// // morgan 미들웨어를 사용하여 HTTP 요청 로그를 기록
// app.use(morgan('combined'));

// // 루트 경로로 접근 시 현재 시각을 보여줌
// app.get('/', function(req, res) {
//   setInterval(() => {
//     const date = new Date();
//     const hour = date.getHours();
//     const minute = date.getMinutes();
//     const second = date.getSeconds();
//     const year = date.getFullYear();
//     const day = date.getDate();
//     const month = date.getMonth();
//     const timeString = year+"년" + month + "월" + day+ "일" + hour + ":" + minute + ":" + second;
//     res.send(`${timeString}`);
//   }, 1000);
// });

// // 서버 시작
// app.listen(3050, function() {
//   console.log('서버가 시작되었습니다. http://localhost:3050');
// });

//----------------------------------------------
// const express = require('express');
// const app = express();

// // 루트 경로로 접근 시 현재 시각을 보내줌
// app.get('/', function(req, res) {
//   const date = new Date();
//   const hour = date.getHours();
//   const minute = date.getMinutes();
//   const second = date.getSeconds();
//   const year = date.getFullYear();
//   const day = date.getDate();
//   const month = date.getMonth();
//   const timeString = year + "년" + month + "월" + day + "일 " + hour + ":" + minute + ":" + second;
//   res.send(`${timeString}`);
// });

// // 서버 시작
// app.listen(3050, function() {
//   console.log('서버가 시작되었습니다. http://localhost:3050');
// });


//-------------------
const express = require('express');
const app = express();

// 루트 경로로 접근 시 현재 시각을 보내줌
app.get('/', function(req, res) {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  const year = date.getFullYear();
  const day = date.getDate();
  const month = date.getMonth();
  const timeString = year + "년" + month + "월" + day + "일 " + hour + ":" + minute + ":" + second;
  res.send(`${timeString}`);
});

// 1초마다 루트 경로 자동 갱신
setInterval(() => {
  console.log('루트 경로 자동 갱신');
  app.get('/', function(req, res) {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    const year = date.getFullYear();
    const day = date.getDate();
    const month = date.getMonth();
    const timeString = year + "년" + month + "월" + day + "일 " + hour + ":" + minute + ":" + second;
    res.send(`${timeString}`);
  });
}, 1000);

// 서버 시작
app.listen(3050, function() {
  console.log('서버가 시작되었습니다. http://localhost:3050');
});




