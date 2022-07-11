var mysql = require('mysql');
var con;

class mySqlConnector{
  account=[]
  constructor(account){
      this.account=account
  }

  
  connect(){
      con = mysql.createPool(this.account);
        con.getConnection(function(err) {
          if (err ) return console.log('Could not connect to MYSQL...','MYSQL', err.code);
          console.log('Connected to MYSQL...')
        });
  }

  closeConnection(){
    con.end(function(err) {
      if (err) {
        return console.log('error:' + err.message);
      }
      console.log('Close the database connection.');
    });
  }
  
  create(sql){
          console.log("Connected!");
          con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
            return result;
          });
  }

  show(sql,callback){
    con.getConnection(function(err, connection) {
      console.log("Connected!");

      if (err) throw err; // not connected!
      // Use the connection
      connection.query(sql, function (err, result, fields) {
        connection.release();
        if (err) throw err;
        callback(null,result)
      });
    });
}

}

module.exports = mySqlConnector;