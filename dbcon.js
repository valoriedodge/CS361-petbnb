var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu',
  user            : 'cs361_praticok',
  password        : '4777',
  database        : 'cs361_praticok'
});
module.exports.pool = pool;