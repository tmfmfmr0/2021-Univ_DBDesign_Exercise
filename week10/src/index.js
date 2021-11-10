import express from "express";	// express 모듈 사용 (node_modules의 모듈)
import logger from "morgan";	// morgan 모듈 사용
import path from "path";		// path 모듈 사용

import loginRouter from "../routes/login";		// routes의 login.js 사용 (사용자 모듈)
//import updateRouter from "../routes/update";	// routes의 update.js 사용
import selectRouter from "../routes/select";	// routes의 select.js 사용
import deleteRouter from "../routes/delete";	// routes의 delete.js 사용

const PORT = 3000;	// 포트 설정

const app = express();	// app이라는 개체 이름으로 express 기능 이용

app.use(express.urlencoded({ extended: false }));
app.use(express.json());	// 웹에서 데이터 다루기 편하게

app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'hbs')	// hbs 사용

app.use(logger("dev"));	// 로거. log 자세하게 보기 위해

app.use('/', loginRouter);			// login 화면
app.use('/select', selectRouter);	// select 화면
//app.use('/update', updateRouter);	// update 화면
app.use('/delete', deleteRouter);	// delete 화면

app.listen(PORT, () => {	// listen으로 서버를 실행
	console.log(`Example app listening at http://localhost:${PORT}`)
})
