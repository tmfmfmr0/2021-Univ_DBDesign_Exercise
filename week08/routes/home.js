import express from "express";	// express 모듈 사용
import { insertSql } from "../database/sql";	// insertSql 사용

const router = express.Router();	// express의 Router

router.get('/', (req, res) => {	// 홈화면 (/)
	res.render('home');		// views폴더의 home.hbs 렌더링
}); 

router.post('/', (req, res) => {	// 폼에서 입력한 값들을 post로 넘겨서 처리
	const vars = req.body;	// 넘겨지는 데이터 저장
	const var_lenth = Object.keys(req.body).length;	// 넘겨지는 데이터의 길이

	if (var_lenth > 4) {	// 4개 초과면 employee, 이하이면 department
		const data = {					// data라는 객체에 각각의 입력을 받고
			fname: vars.fname,
			minit: vars.minit,
			lname: vars.lname,
			ssn: vars.ssn,
			bdate: vars.bdate,
			address: vars.address,
			sex: vars.sex,
			salary: vars.salary,
			superssn: vars.superssn,
			dno: vars.dno
		};
		insertSql.setEmployee(data);	// setEmployee함수로 넘겨서 데이터 삽입

	} else {				// 4개 초과면 employee, 이하이면 department
		const data = {					// data라는 객체에 각각의 입력을 받고
			dname: vars.dname,
			dnumber: vars.dnumber,
			mgrssn: vars.mgrssn,
			mgrstartdate: vars.mgrstartdate
		}
		insertSql.setDepartment(data);	// setDepartment함수로 넘겨서 데이터 삽입
	}

	res.redirect('/');	// 처리 후 다시 처음 화면으로 리다이렉트
})

module.exports = router;
