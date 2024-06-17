const db = require('../config/database.js') 

const CategoryController = { 
        createTable(req, res){
        const sql =
            'CREATE TABLE categories(id int AUTO_INCREMENT,name_category VARCHAR(255), PRIMARY KEY(id))'
        db.query(sql, (err, result) => {
            if (err) throw err
            console.log(result)
            res.send('Categories table created...')
        })
        },

    createCategories(req, res){
    const sql = `INSERT INTO categories (name_category) values ('${req.body.name_category}')`
    db.query(sql, (err, result) => {
      if (err) throw err
      console.log(result)
      res.send('Category added...')
    })
   },


   
  updateCategory(req, res){
    const sql = `UPDATE categories SET name_category = '${req.body.name_category}' WHERE id = ${req.params.id}`
    db.query(sql, (err, result) => {
      if (err) throw err
      res.send('Categories updated...')
    })
   },


  showCategor(req, res){
    const sql = 'SELECT * FROM categories'
   
    db.query(sql, (err, result) => {
      if (err) throw err
      res.send({ message: 'Get categories', result })
    })
   },
   
    showidCate(req, res){
        const sql = `SELECT * FROM categories WHERE id = ${req.params.id}`
        db.query(sql, (err, result) => {
          if (err) throw err
          res.send(result)
        })
       }
  }

module.exports = CategoryController