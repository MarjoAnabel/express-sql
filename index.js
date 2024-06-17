//Exportando la config en el archivo database
const db = require('./config/database.js')

const express = require('express')
const app = express()
app.use(express.json())

//Importar la ruta de categories y products
app.use('/categories', require('./routes/categories'))
app.use('/products', require('./routes/products'))
app.use('/orders', require ('./routes/orders'))
app.use('/users', require ('./routes/users'))


const PORT = 3000
//Decimos en que puerto levantamos el servidor
app.listen(PORT, () => console.log (`Servidor levantado en el puerto ${PORT}`))


//Crear endpoint de base de datos
app.get('/createdb', (req, res) => {
    const sql = 'CREATE DATABASE expressSql'
    db.query(sql, (err, result) => {
      if (err) throw err
      console.log(result)
      res.send('Database created...')
    })
})


   

   
