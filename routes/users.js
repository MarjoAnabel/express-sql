const express = require('express')
const router = express.Router()
const UsersController = require("../controllers/UserController")
const db = require('../config/database.js')

    //Crea tabla users
router.get('/createUsers', UsersController.createTable)

   //Crea un endpoint para añadir un usuario nuevo y añade 2 usuarios nuevos desde el postman
router.post('/twoUsers',UsersController.createtwoUsers )

   //Actualizar un usuario
router.put ('/id/:id',UsersController.updateUser)

   //Crea un endpoint que muestre todos los usuarios
router.get('/users', UsersController.showUsers)

   //Crea un endpoint que muestra todos los usuarios con sus pedidos
router.get('/users',UsersController.showuserOrd)

    //Crea un endpoint donde puedas seleccionar un usuario por id
router.get ('/id/:id', UsersController.showIduser)

    //Crea un endpoint donde puedas eliminar un usuario por su id
 router.delete ('/users/:id',UsersController.deleteUser )

module.exports = router