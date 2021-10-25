const jwt = require('jsonwebtoken')
const User = require('../models/User')
exports.isAhtu = async (req,res,next)=>{

    //On a met dans le fichier feaders key son nom authorization
    const token = req.header('Autorization') 

    try {
        if(!token){return res.status(400).send('Not Authorized')}
        const decoded = jwt.verify(token,process.env.SecretKEY)
        // console.log(decoded)
        const currentU = await User.findById(decoded.id) 
        req.user = currentU

        next()
    } catch (error) {
        res.status(500).send('Server Error')
    }
}