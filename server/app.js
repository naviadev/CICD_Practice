const express = require('express');
const cors = require('cors'); // CORS 패키지 추가
const app = express();
const port = 3000;

// CORS 설정
const allowedOrigins = ['https://testpractice1020.s3.ap-northeast-2.amazonaws.com'];
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true); // 허용된 요청이면 통과
    } else {
      callback(new Error('Not allowed by CORS')); // 허용되지 않은 요청이면 에러 반환
    }
  }
}));

// 기본 라우트
app.get('/', (req, res) => {
  res.send('안녕');
});

// 서버 실행
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});