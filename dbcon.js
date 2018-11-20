var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu',
  user            : 'cs361_x',
  password        : 'xxxx',
  database        : 'cs361_x'
});
module.exports.pool = pool;