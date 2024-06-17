const db = require('../config/database.js') 


const OrderController = {
createOrder(req, res) {
  const sql =
    'CREATE TABLE orders(id int AUTO_INCREMENT,name_orders VARCHAR(255), PRIMARY KEY(id))'
  db.query(sql, (err, result) => {
    if (err) throw err
    console.log(result)
    res.send('Orders table created...')
  })
 },


 
createtwoOrders(req, res){
    const sql = `INSERT INTO orders (name_orders) values
   ('${req.body.name_orders}')`
  
    db.query(sql, (err, result) => {
      if (err) throw err
      console.log(result)
      res.send('Orders added...')
    })
   },

showOrders(req, res){
    const sql = 'SELECT * FROM orders'
   
    db.query(sql, (err, result) => {
      if (err) throw err
      res.send({ message: 'Get orders', result })
    })
   },

} 

module.exports = OrderController