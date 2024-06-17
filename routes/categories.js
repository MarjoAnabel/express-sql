const express = require('express')
const router = express.Router()
const CategoryController = require("../controllers/CategoriesController")
const db = require('../config/database.js')

    //Crear tabla de Categories, primero tenemos que crear esta tabla ya que en la siguiente tedra la FK de esta
router.get('/createCategories', CategoryController.createTable)

    //Crea un endpoint para añadir un producto nuevo y añade 2 productos nuevos desde el postman
    //Añadimos primero la categoria y despues los productos con la FK de esta
router.post('/addCategory', CategoryController.createCategories)

    //Ejercicio 3
    //Crea un endpoint para actualizar una categoría.
router.put('/id/:id',CategoryController.updateCategory)

    //Ejercicio 4
    //Crea un endpoint que muestre todas las categorías
router.get('/categories', CategoryController.showCategor)

    //Crea un endpoint donde puedas seleccionar una categoría por id
router.get('/id/:id', CategoryController.showidCate)

module.exports = router