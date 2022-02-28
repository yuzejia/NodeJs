const express = require("express")
const app = express()
const mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'newpassword',
  port: '3306',
  database: 'test',
  connectTimeout: 5000, //连接超时
});

connection.connect((err) => {
  if (err) {
    console.log('error')
  }
  console.log('connect success!')
});




function getAdmin() {
  // 查询数据
  var sql = 'SELECT * FROM admin';
  connection.query(sql, function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
  });
}

// 增加数据
// var  addSql = 'INSERT INTO admin(time,name,id) VALUES(?,?,?)';
// var  addSqlParams = [null, 'xiaoming',2];
// connection.query(addSql,addSqlParams,function (err, result) {
//   if(err){
//    console.log('[INSERT ERROR] - ',err.message);
//    return;
//   }        

//  console.log('--------------------------INSERT----------------------------');
//  //console.log('INSERT ID:',result.insertId);        
//  console.log('INSERT ID:',result);        
//  console.log('-----------------------------------------------------------------\n\n');  
// });

// connection.end();

app.listen(8000, () => {
  console.log("服务启动");
})

app.get("/index", function (res, rep) {
  console.log("./ ---");
  getAdmin()
  rep.end('11')
})