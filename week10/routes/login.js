import express from "express";	// express 모듈 사용
import { selectSql } from "../database/sql";	// insertSql 사용

const router = express.Router();	// express의 Router

router.get('/', (req, res) => {	// 홈화면 (/)
	res.render('login');		// views폴더의 home.hbs 렌더링
}); 

router.post('/', async (req, res) => {	// 폼에서 입력한 값들을 post로 넘겨서 처리
	const vars = req.body;	// 넘겨지는 데이터 저장		// vars.Id, vars.Password 로 접근
	// admin이면 delete페이지로, user면 select페이지로
	const users = await selectSql.getUsers(); // selectSql.getUsers()로 유저의 정보를 가져와서 users변수에
	let whoAmI = '';	// 유저를 확인하기 위해 바꿀 수 있는 변수 whoAmI를 let으로 선언
	let checkLogin = false;

	// for (let i=0; i < users.length; i++){
	//		if (vars.id === user[i].id && vars.password === user[i].password){ }
	// }
	users.map((user) => {	// map으로 for문 대신 user를 하나씩 체크하면서 login, id를 판단
		if (vars.id === user.Id && vars.password === user.Password) {
			checkLogin = true;
			if (vars.id === 'admin') {
				whoAmI='admin';
			}
			else {
				whoAmI='users';
			}
		}
	})

	console.log('whoAmI: ', whoAmI);	// whoAmI 출력해서 확인해보기

	if (checkLogin && whoAmI === 'admin') {		// admin이면 delete페이지, users이면 select페이지
		res.redirect('/delete');
	} else if (checkLogin && whoAmI === 'users') {
		res.redirect('/select');
	} else {									// 아니면 오류 출력
		res.send("<script>alert('로그인에 실패했습니다.'); location.href='/';</script>")
	}
})

module.exports = router;
