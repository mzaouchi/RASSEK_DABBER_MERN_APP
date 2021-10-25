const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


exports.SignUp = async (req,res)=>{
    // postman => base req
    // base => post res
    const {name, email,password} = req.body
    const salt = 10
    try {
        // Verifier si l'adresse du nouvel utilisateur existe
        const userIsFound = await User.findOne({email})
        if(userIsFound){return res.status(400).send({errors : [{msg : 'L utilisateur existe déja !'}]})}
        //Tantqu'il s'agit d'un nouvel utilisateur nous allons l'ajouter
        const userToAdd = new User(req.body)
        //Hasher le mot de passe 
        const hash = bcrypt.hashSync(password, salt);
        userToAdd.password = hash 
        //Génération du token
        const payload = { id: userToAdd._id }
        const token = jwt.sign(payload, process.env.SecretKEY);
        await userToAdd.save()
        res.status(200).send({msg:'L utilisateur enregistrer avec succé !',userToAdd,token})


    } catch (error) {
        //Avoir le meme format d'erreur / pour pouvoir parcourir un tableau d'erreur 
        res.status(500).send({errors : [{msg : 'On ne peut pas enregistrer ! '}]})
    }
}

exports.SignIn = async (req,res)=>{
    
    const {name, email, password} = req.body
    try {
        // Recherche si l email est valid
        const userIsFound = await User.findOne({email})
        if(!userIsFound){ return res.status(400).send({errors : [{msg : 'L utilisateur n existe pas'}]})}
        // Si l'email est valide on compare le mot passe de l'input et le mot de passe enregistrer dans la base de donnée 
        const verfiPassword = bcrypt.compareSync(password,userIsFound.password);
        //Si les entrées sont correctes on va générer un token et le retourner avec les coordonées de l'utilisateur 
        if(!verfiPassword){ return res.status(400).send({errors : [{msg : 'Mot de passe incorrect'}]})} 
        const payload = { id: userIsFound._id }
        const token = jwt.sign(payload, process.env.SecretKEY);            
        res.status(200).send({msg:`Vous etes connectez mr : ${userIsFound.name}`,userIsFound,token})
    } catch (error) {
        res.status(500).send({errors : [{msg : 'Vous ne pouvez pas se connecter ! '}]})
    }
}

exports.CurrentUser = (req, res) => {

    try {

        res.send({
            user: req.user
        })
    } catch (error) {
        res.send(error)
    }
}

exports.GetAllUsers = async (req,res)=>{
    try {
        const usersList = await User.find()
        res.status(200).send({ msg: 'Users List : ', usersList })

    } catch (error) {
        res.status(500).send({ errors: [{ msg: 'On ne peut pas afficher les utilisateur' }] })
    }
}

exports.DeleteUser = async (req,res) => {
    const {id} = req.params
    try {
        await User.findByIdAndDelete(id)
        res.status(200).send({ msg: 'Lutilisateur est supprimer' });
    } catch (error) {
        res.status(500).send({ msg: "On ne peut pas supprimer" })
    }
}
// name : nomP,email : emailP,phone : phoneP,profession : professionP,adresse : adresseP, birth : dateP ,userImage: picP

exports.UpdateUser = async (req,res)=>{
    const {id} = req.params
    try {
        const user= await User.findById(id)
        if(req.file){
            const updateUser = await User.findByIdAndUpdate(id,{$set : {...req.body,pic : req.file.path}})
        }else{
            const updateUser = await User.findByIdAndUpdate(id,{$set : {...req.body}})
        }
        
        res.status(200).send({ msg:'User updated' ,updateUser});
    } catch (error) {
        res.status(500).send({msg:'could not update'})
    }
}

exports.GetOneUser = async (req,res)=>{
    const {id} = req.params
    try {
        const userToFind = await User.findById(id)
        res.status(200).send({ msg: 'The user : ', userToFind })
    } catch (error) {
        res.status(500).send({ msg: 'Can not get User' })
    }
}


