const express = require('express')
const { AddPost, GetMyPosts, GetAllPosts, DeletePost, UpdatePost, GetOnePost } = require('../controllers/post')
const { isAhtu } = require('../middlewares/auth')
const { upload } = require('../middlewares/multer')
const routerPost = express.Router()
const Posts = require('../models/Posts')
const User = require('../models/User')

// const multer = require('multer')

// const storage = multer.diskStorage({
//     destination :  function (req, file, cb) {
//         cb(null,'upload/')
//     },
//     filename : function (req, file, cb){
//         cb(null,file.originalname)
//     }
// })

// const upload = multer({storage : storage})

// Add new post
routerPost.post('/newPost', isAhtu, AddPost)
// Get my posts
routerPost.get('/MyPosts', isAhtu, GetMyPosts)
// Get all posts
routerPost.get('/AllPosts', GetAllPosts)

routerPost.get('/OnePost/:id', GetOnePost)
// Delete one post
routerPost.delete('/:id', isAhtu, DeletePost)
// Update one post
routerPost.put('/:id',isAhtu, UpdatePost)

module.exports = routerPost

