import express from "express";	// express 모듈 사용
import { selectSql, updateSql } from "../database/sql";	// selectSql 사용

const router = express.Router();

// 기존의 입력 불러오기
router.get('/employee', async (req, res) => {	// 페이지 /update/employee
	const emp_res = await selectSql.getEmployee();
	res.render('updateEmployee', {
		title: "직원 테이블 갱신",
		emp_res
	});
});
// 기존의 입력 불러오기
router.get('/department', async (req, res) => {	// 페이지 /update/department
	const dept_res = await selectSql.getDepartment();
	res.render('updateDepartment', {
		title: "부서 테이블 갱신",
		dept_res
	});
});

// 수정 버튼 누르면 update query 실행하고 select 화면으로 이동
router.post('/employee', async (req, res) => {
	const vars = req.body;
	console.log(vars.salary);

	const data = {
		salary: vars.salary
	}
	await updateSql.updateEmployee(data);

	res.redirect('/select');
});
// 수정 버튼 누르면 update query 실행하고 select 화면으로 이동
router.post('/department', async (req, res) => {
	const vars = req.body;
	console.log(vars.dname);

	const data = {
		dname: vars.dname
	}
	await updateSql.updateDepartment(data);

	res.redirect('/select');
});

module.exports = router;