const db = require('../config/database.js')

const UserController ={
createTable(req, res){
    const sql =
      'CREATE TABLE users(id int AUTO_INCREMENT,name_users VARCHAR(255), last_name VARCHAR(255),tele int,dire VARCHAR(255),orders_id int,FOREIGN KEY (orders_id) REFERENCES orders(id),PRIMARY KEY(id))'
    db.query(sql, (err, result) => {
      if (err) throw err
      console.log(result)
      res.send('Users table created...')
    })
   },
  
   createtwoUsers(req, res){
    const sql = `INSERT INTO users (name_users,last_name,tele,dire,orders_id ) values
   ('${req.body.name_users}','${req.body.last_name}','${req.body.tele}','${req.body.dire}','${req.body.orders_id}')`
  
    db.query(sql, (err, result) => {
      if (err) throw err
      console.log(result)
      res.send('Users added...')
    })
   },
  
  updateUser(req, res){
    const sql = `UPDATE users SET name_users = '${req.body.name_users}' WHERE id = ${req.params.id}`
    db.query(sql, (err, result) => {
      if (err) throw err
      res.send('Users updated...')
    })
   },
  
  showUsers(req, res){
    const sql = 'SELECT * FROM users'
   
    db.query(sql, (err, result) => {
      if (err) throw err
      res.send({ message: 'Get users', result })
    })
   },
   
  
  
 showuserOrd(req, res){
    const sql = `SELECT * FROM users WHERE orders_id = ${req.params.orders_id}`
    db.query(sql, (err, result) => {
      if (err) throw err
      res.send(result)
    })
   },
   
  
  showIduser(req, res){
    const sql = `SELECT * FROM users WHERE id = ${req.params.id}`
    db.query(sql, (err, result) => {
      if (err) throw err
      res.send(result)
    })
   },

   deleteUser(req, res){
    const sql = `DELETE FROM users WHERE id = ${req.params.id}`
    db.query(sql, (err, result) => {
      if (err) throw err
      res.send('Users deleted')
    })
   }
}

module.exports = UserController