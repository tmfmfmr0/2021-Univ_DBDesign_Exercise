import express from "express";	// express 모듈 사용
import { selectSql, deleteSql } from "../database/sql";	// selectSql 사용

const router = express.Router();

// 기존의 입력 불러오기
// router.get('/', async (req, res) => {
// 	const department = await selectSql.getDepartment();
// 	res.render('delete', {
// 		title: "삭제 기능",
// 		department
// 	})
// });
router.get('/', async (req, res) => {
	const item = await selectSql.getItem();
	res.render('delete', {
		title: "삭제 기능",
		item
	})
});

// 삭제 버튼 누르면 Dnumber를 받아서 deleteSql의 인수로 넘겨주고 sql문 실행, 다시 delete페이지로
router.post('/', async (req, res) => {
	console.log('delete router: ', req.body.delBtn);

	const data = {
		ItemName: req.body.delBtn,
	}
	
	await deleteSql.deleteItem(data);	

	res.redirect('/delete');
});

module.exports = router;