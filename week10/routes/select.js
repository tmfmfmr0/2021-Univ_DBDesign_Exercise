import express from "express";	// express 모듈 사용
import { selectSql } from "../database/sql";	// selectSql 사용

const router = express.Router();	// express의 Router

router.get('/', async function(req, res) {	// select화면 (/select)
	// const department = await selectSql.getDepartment();	// selectSql의 getDepartment를 불러와 저장

	// res.render('select', {	// views 폴더의 select.hbs
	// 	title: 'IT 공대',
	// 	department
	// });
	
	const item = await selectSql.getItem();	// selectSql의 getItem을 불러와 저장

	res.render('select', {	// views 폴더의 select.hbs
		title: 'Item',
		item
	});
});

module.exports = router;