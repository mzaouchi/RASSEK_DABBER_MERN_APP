const express = require('express')
const { SignUp, SignIn, CurrentUser, GetAllUsers, DeleteUser, UpdateUser, GetOneUser } = require('../controllers/auth')
const { isAhtu } = require('../middlewares/auth')
const { upload } = require('../middlewares/multer')
const { ValidatorFunction, arrayRegisterValidator, arrayLogginValidator } = require('../middlewares/Validation')
const Posts = require('../models/Posts')
const { populate } = require('../models/User')
const User = require('../models/User')

const router = express.Router()

// SignUp
// post man sign UP == req , array == body de req , middle ware validator function va verifier req et retourné res s'il ya des errors
router.post('/SignUP', arrayRegisterValidator, ValidatorFunction, SignUp)
// SignIN
router.post('/SignIN', arrayLogginValidator, ValidatorFunction, SignIn)
//Current User creation de isauth=> avoir l'utilisateur conncecté en mettant le contenu de l'ente du token dans req.user (qu'on a crée)
router.get('/CurrentUser', isAhtu, CurrentUser)
//Affichage de touts les utilisateur
router.get('/AllUsers', isAhtu, GetAllUsers)
// Supprimer un utilisateur
router.delete('/deleteUser/:id', isAhtu, DeleteUser)
// Mise à jour utilisateur
router.put('/updateUser/:id',isAhtu,upload.single('userImage'), UpdateUser)

router.get('/OneUser/:id', isAhtu,GetOneUser)




module.exports = router