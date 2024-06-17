const express = require('express')
const router = express.Router()
const OrdersController = require("../controllers/OrderController")
const db = require('../config/database.js')

    //Crear tabla Orders
    router.get('/createOrders',OrdersController.createOrder)
    //Crea un endpoint para crear un pedido y añade 2 nuevos pedidos desde el postman
    router.get ('/twoOrders',OrdersController.createtwoOrders)
     //Crea un endpoint que muestre todas los pedidos
     router.get ('/orders', OrdersController.showOrders)

module.exports = router