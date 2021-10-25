const express = require('express')
const { AddApplication, GetAllApplications, GetMyApplications, DeleteApplication, GetApplicationsPost, UpdateApplication, GetOneApplication } = require('../controllers/application')
const { isAhtu } = require('../middlewares/auth')
const routerApplication = express.Router()


routerApplication.post('/newApplication/:id',isAhtu,AddApplication)
routerApplication.get('/AllApplication', GetAllApplications)
routerApplication.get('/MyApplications', isAhtu, GetMyApplications)
routerApplication.get('/OneApplication/:id', isAhtu, GetOneApplication)
routerApplication.delete('/deleteApplication/:id', isAhtu, DeleteApplication)
routerApplication.get('/ApplicationsPost/:id',isAhtu,GetApplicationsPost)
routerApplication.put('/UpdateApplication/:id',isAhtu,UpdateApplication)
// routerPost.get('/OnePost/:id', GetOnePost)

module.exports = routerApplication