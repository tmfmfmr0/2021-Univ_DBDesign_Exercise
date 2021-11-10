import express from "express";	// express 모듈 사용
import { selectSql } from "../database/sql";	// selectSql 사용

const router = express.Router();	// express의 Router

router.get('/', async function(req, res) {	// select화면 (/select)
	const employee = await selectSql.getEmployee();		// selectSql의 getEmployee를 불러와 저장
	const department = await selectSql.getDepartment();	// selectSql의 getDepartment를 불러와 저장

	res.render('select', {	// views 폴더의 select.hbs 렌더링
		title: '직원 테이블',	// 각각을 넣어줌
		title2: '부서 테이블',
		employee, 
		department
	});
});

module.exports = router;