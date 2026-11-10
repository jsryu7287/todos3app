const mysql = require("mysql2/promise");

// 커넥션 풀: 연결을 미리 만들어 두고 재사용한다
const pool = mysql.createPool({
  host: "localhost",
  user: "subjectid000",
  password: "subjectpw000",
  database: "subjectdb000",
  connectionLimit: 5,
});

module.exports = pool;
