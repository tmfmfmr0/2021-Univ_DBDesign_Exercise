import mysql from "mysql2";

//데이터베이스 연결
const pool = mysql.createPool(
	process.env.JAWSDB_URL ?? {
		host: 'localhost',
		user: 'root',
		database: 'week8',
		password: '321654987',
		waitForConnections: true,
		connectionLimit: 10,
		queueLimit: 0
	}
);

// async / await 사용 (쿼리문 처리, 동기화, 대기)
const promisePool = pool.promise();

// select query
export const selectSql = {		// 외부에서 쓸 수 있게 export로 selectSql
	getEmployee : async () => {		// promisePool 사용해서 쿼리문 실행
		const [rows] = await promisePool.query(`select * from employee`);
		console.log(rows)
		return rows
	},
	getDepartment : async () => {
		const [rows] = await promisePool.query(`select * from department`);
		return rows
	},
}

// insert query
export const insertSql = {	// 외부에서 쓸 수 있게 export로 insertSql
	// data라는 객체 타입의 파라미터에 입력할 정보를 받아서 query문 생성
	setEmployee : async (data) => {	// data입력을 받아서 ``안에 ${}변수 사용해서 sql문 작성
		const sql = `insert into employee values (
			"${data.fname}", "${data.minit}", "${data.lname}", "${data.ssn}", "${data.bdate}",
			"${data.address}", "${data.sex}", "${data.salary}", "${data.superssn}", "${data.dno}" )`;
			await promisePool.query(sql);
	},
	setDepartment : async (data) => {	// data입력을 받아서 ``안에 ${}변수 사용해서 sql문 작성
		const sql = `insert into department values (
			"${data.dname}", "${data.dnumber}", "${data.mgrssn}", "${data.mgrstartdate}" )`;
			await promisePool.query(sql);
	},
}

// update query
export const updateSql = {	// 외부에서 쓸 수 있게 export로 updateSql
	updateEmployee : async (data) => {
		// where 조건을 만족하는 행에 대해 salary 수정
		const sql = `update employee set salary = "${data.salary}" where minit = "A"`;
		await promisePool.query(sql);
	},
	updateDepartment : async (data) => {
		const sql = `update department set dname = "${data.dname}" where dnumber = 1`;
		await promisePool.query(sql);
	},
}
