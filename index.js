const express = require("express")
const app = express()
const mysql = require('mysql2')
app.use(express.json())
const PORT = 3000

//Decimos en que puerto levantamos el servidor
app.listen(PORT, () => console.log (`Servidor levantado en el puerto ${PORT}`))

const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Marjorieanabel1997+',
  database: 'expressSql'
})

db.connect()


//Crear endpoint de base de datos
app.get('/createdb', (req, res) => {
    const sql = 'CREATE DATABASE expressSql'
    db.query(sql, (err, result) => {
      if (err) throw err
      console.log(result)
      res.send('Database created...')
    })
})
   
//Ejercicio 1

 //Crear tabla de Categories, primero tenemos que crear esta tabla ya que en la siguiente tedra la FK de esta
 app.get('/createCategories', (req, res) => {
  const sql =
    'CREATE TABLE categories(id int AUTO_INCREMENT,name_category VARCHAR(255), PRIMARY KEY(id))'
  db.query(sql, (err, result) => {
    if (err) throw err
    console.log(result)
    res.send('Categories table created...')
  })
 })

  //Crear tabla de Products
app.get('/createProducts', (req, res) => {
  const sql =
    'CREATE TABLE products(id int AUTO_INCREMENT,name_product VARCHAR(255), price_product int,categories_id int,FOREIGN KEY (categories_id) REFERENCES categories(id),PRIMARY KEY(id))'
  db.query(sql, (err, result) => {
    if (err) throw err
    console.log(result)
    res.send('Products table created...')
  })
 })


 //Ejercicio 2
 //Crea un endpoint para añadir un producto nuevo y añade 2 productos nuevos desde el postman
    //Añadimos primero la categoria y despues los productos con la FK de esta
 app.post('/addCategory',(req, res) => {
  const sql = `INSERT INTO categories (name_category) values ('${req.body.name_category}')`

  db.query(sql, (err, result) => {
    if (err) throw err
    console.log(result)
    res.send('Category added...')
  })
 })

    //Crear categories 
 app.post('/createProduct',(req, res) => {

  const sql = `INSERT INTO products (name_product,price_product,categories_id ) values
 ('${req.body.name_product}','${req.body.price_product}','${req.body.categories_id }')`

  db.query(sql, (err, result) => {
    if (err) throw err
    console.log(result)
    res.send('Products added...')
  })
 })
 
 //Ejercicio 3 
  //Crea un endpoint para actualizar un producto. 

app.put('/products/id/:id', (req, res) => {
 const sql = `UPDATE products SET name_product = '${req.body.name_product}' WHERE id = ${req.params.id}`
 db.query(sql, (err, result) => {
   if (err) throw err
   res.send('Products updated...')
 })
})

  //Crea un endpoint para actualizar una categoría.
app.put('/categories/id/:id', (req, res) => {
  const sql = `UPDATE categories SET name_category = '${req.body.name_category}' WHERE id = ${req.params.id}`
  db.query(sql, (err, result) => {
    if (err) throw err
    res.send('Categories updated...')
  })
 })


 //Ejercicio 4
  //Crea un endpoint que muestre todos los productos
app.get('/products', (req, res) => {
 const sql = 'SELECT * FROM products'

 db.query(sql, (err, result) => {
   if (err) throw err
   res.send({ message: 'Get products', result })
 })
})

  //Crea un endpoint que muestre todas las categorías

  app.get('/categories', (req, res) => {
    const sql = 'SELECT * FROM categories'
   
    db.query(sql, (err, result) => {
      if (err) throw err
      res.send({ message: 'Get categories', result })
    })
   })

   //Crea un endpoint que muestra todos los productos con sus categorías
   app.get('/products', (req, res) => {
    const sql = `SELECT * FROM products WHERE categories_id = ${req.params.categories_id}`
    db.query(sql, (err, result) => {
      if (err) throw err
      res.send(result)
    })
   })

   //Crea un endpoint donde puedas seleccionar un producto por id
   app.get('/products/id/:id', (req, res) => {
    const sql = `SELECT * FROM products WHERE id = ${req.params.id}`
    db.query(sql, (err, result) => {
      if (err) throw err
      res.send(result)
    })
   })

   //Crea un endpoint que muestre de forma descendente los productos.
   app.get('/productsAsc', (req, res) => {
    const sql = `SELECT * FROM products ORDER BY id DESC`
    db.query(sql, (err, result) => {
      if (err) throw err
      res.send(result)
    })
   })

   //Crea un endpoint donde puedas seleccionar una categoría por id
   app.get('/categories/id/:id', (req, res) => {
    const sql = `SELECT * FROM categories WHERE id = ${req.params.id}`
    db.query(sql, (err, result) => {
      if (err) throw err
      res.send(result)
    })
   })

   //**Crea un endpoint donde puedas buscar un producto por su nombre
   app.get('/products/name/:name_product', (req, res) => {
    const sql = `SELECT * FROM products WHERE name_product = ${req.params.name_product}`
    db.query(sql, (err, result) => {
      if (err) throw err
      res.send(result)
    })
   })

   //Crea un endpoint donde puedas eliminar un producto por su id
   app.delete('/products/:id', (req, res) => {
    const sql = `DELETE FROM products WHERE id = ${req.params.id}`
    db.query(sql, (err, result) => {
      if (err) throw err
      res.send('Products deleted')
    })
   })
   

   

   
