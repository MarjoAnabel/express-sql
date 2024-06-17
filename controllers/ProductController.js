const db = require('../config/database.js') 

const ProductController = { 

    createTable(req, res){
        const sql =
          'CREATE TABLE categories(id int AUTO_INCREMENT,name_category VARCHAR(255), PRIMARY KEY(id))'
        db.query(sql, (err, result) => {
          if (err) throw err
          console.log(result)
          res.send('Categories table created...')
        })
       },
      
     createProduct(req, res) {
        const sql = `INSERT INTO products (name_product,price_product,categories_id ) values
       ('${req.body.name_product}','${req.body.price_product}','${req.body.categories_id }')`
      
        db.query(sql, (err, result) => {
          if (err) throw err
          console.log(result)
          res.send('Products added...')
        })
       },


  updateProduct(req, res){
    const sql = `UPDATE products SET name_product = '${req.body.name_product}' WHERE id = ${req.params.id}`
    db.query(sql, (err, result) => {
      if (err) throw err
      res.send('Products updated...')
    })
   },
   

   showProduct(req, res){
    const sql = 'SELECT * FROM products'
    db.query(sql, (err, result) => {
      if (err) throw err
      res.send({ message: 'Get products', result })
    })
   },
   

      showProduCate(req, res){
       const sql = `SELECT * FROM products WHERE categories_id = ${req.params.categories_id}`
       db.query(sql, (err, result) => {
         if (err) throw err
         res.send(result)
       })
      },

      showIDProd(req, res){
       const sql = `SELECT * FROM products WHERE id = ${req.params.id}`
       db.query(sql, (err, result) => {
         if (err) throw err
         res.send(result)
       })
      },
   
      showDesc(req, res){
       const sql = `SELECT * FROM products ORDER BY id DESC`
       db.query(sql, (err, result) => {
         if (err) throw err
         res.send(result)
       })
      },

      showName(req, res){
       const sql = `SELECT * FROM products WHERE name_product = ${req.params.name_product}`
       db.query(sql, (err, result) => {
         if (err) throw err
         res.send(result)
       })
      },

      deleteId(req, res){
       const sql = `DELETE FROM products WHERE id = ${req.params.id}`
       db.query(sql, (err, result) => {
         if (err) throw err
         res.send('Products deleted')
       })
      }
}

  module.exports = ProductController