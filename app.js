const express = require('express');
const app = express();
const fs = require('fs');

// public 디렉토리를 정적 파일 경로로 사용
app.use(express.static('public'));

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
  const html = `
  <html>
    <head>
      <link rel="stylesheet" href="/style.css">
    </head>
    <body>
      <div class="container">
        <h1>현재 시간</h1>
        <p>${timeString}</p>
      </div>
    </body>
  </html>
`;
  res.send(html);
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
    const html = `
    <html>
      <head>
        <link rel="stylesheet" href="/style.css">
      </head>
      <body>
        <div class="container">
          <h1>현재 시간</h1>
          <p>${timeString}</p>
        </div>
      </body>
    </html>
  `;
    res.send(html);
  });
}, 1000);



// 서버 시작
app.listen(3050, function() {
  console.log('서버가 시작되었습니다. http://localhost:3050');
});
