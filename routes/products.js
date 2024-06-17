const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/ProductController')
const db = require('../config/database.js') 


    //Crea tabla productos
router.get('/createProduct', ProductController.createTable)

    // Crea un endpoint para añadir un producto nuevo y añade 2 productos nuevos desde el postman
router.post('/id/:ideProduct', ProductController.createProduct)

    // Crea un endpoint para actualizar un producto. 
router.put ('/products',ProductController.updateProduct )

    // Crea un endpoint que muestre todos los productos
router.get ('/products',ProductController.showProduct )

    //Crea un endpoint que muestra todos los productos con sus categorías
router.get ('/products',ProductController.showProduCate)

    //Crea un endpoint donde puedas seleccionar un producto por id
router.get ('/id/:id',ProductController.showIDProd)

//Crea un endpoint que muestre de forma descendente los productos.
router.get ('/productsAsc',ProductController.showDesc)

   //**Crea un endpoint donde puedas buscar un producto por su nombre
router.get ('/name/:name',ProductController.showName)

    //Crea un endpoint donde puedas eliminar un producto por su id
router.delete ('/:id',ProductController.deleteId)

module.exports = router