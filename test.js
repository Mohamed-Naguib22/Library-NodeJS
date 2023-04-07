const conn = require("./db/connection");
const sql2 = `SELECT book_id FROM book WHERE book.bookName = '${data.bookName}'`
var x = conn.query(sql2)
var y = JSON.parse(x);
var z = y.book_id;
console.log(z);