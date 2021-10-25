const Application = require("../models/Application")
const Posts = require("../models/Posts")
const User = require("../models/User")

//Ajouter une demande
// dateApp : Date,
//     referenceApp : String,
//     statutApp : String,
exports.AddApplication = async (req,res)=>{
    try {
        const { id } = req.params
        const userApplication = await User.findById(req.user.id)
        const postApplication = await Posts.findById(id)
        const newApplication = new Application({ ...req.body, userId: req.user.id,postId : id,dateApp : Date.now(),referenceApp : Math.random(),statutApp : 'En cours de traitement' })
        await newApplication.save()
        userApplication.applications = [...userApplication.applications,newApplication]
        await userApplication.save()
        postApplication.applications = [...postApplication.applications,newApplication]
        await postApplication.save()
        res.status(200).send({msg:'La demande est enregistrer avec succé !',newApplication})
        
    } catch (error) {
        res.status(500).send({ errors: [{ msg: 'On ne peut pas ajouter une nouvelle demande' }] })
    }}
    // Afficher toutes les demandes
   exports.GetAllApplications = async (req,res)=> {
       try {
           const applicationsList = await Application.find()
           res.status(200).send({ msg: 'Applications List : ', applicationsList })

       } catch (error) {
        res.status(500).send({ errors: [{ msg: 'On ne peut pas afficher les applications' }] })
       }
   } 
   // Afficher mes demandes
   exports.GetMyApplications = async (req,res)=> {
       try {
           const myApplications = await Application.find({userId : req.user._id}).populate("userId")
           res.status(200).send({ msg: 'My Applications List : ', myApplications })
       } catch (error) {
        res.status(500).send({ msg: 'On ne peut pas afficher tes applications' })
       }
   }
   // Afficher les demandes d'un post
   exports.GetApplicationsPost = async (req,res)=> {
        const {id} = req.params
       try {
        const myApplications = await Application.find({postId: id}).populate("postId")
        res.status(200).send({ msg: `Les application du post ${id}`, myApplications })
        
       } catch (error) {
        res.status(500).send({ msg: 'On ne peut pas afficher les applications du post' })
       }
   }
   //Supprimer une demande 
   exports.DeleteApplication = async (req, res) => {
        
        const { id } = req.params
        try {
            await User.updateOne({_id:req.user.id},{$pull:{applications:id}})  
            await Posts.updateOne({_id:req.body},{$pull:{applications:id}})  
            await Application.findByIdAndDelete(id)
            res.status(200).send({msg:"Le post est supprimer"})
        } catch (error) {
            res.status(500).send({ msg: 'On ne peut pas supprimer la demande' })
        }
   }
   //Mise à jour d'une demande
   exports.UpdateApplication = async (req,res) => {
       const {id} = req.params
       try {
           const updateApplication = await Application.findByIdAndUpdate(id,{$set : {...req.body}})
           res.status(200).send({ msg:'Application updated' ,updateApplication});
       } catch (error) {
        res.status(500).send({msg:'could not update Application'})
       }
   }

   exports.GetOneApplication = async (req,res) =>{
    const {id} = req.params
    try {
        const applicationToFind = await Application.findById(id)
        res.status(200).send({ msg: 'The post : ', applicationToFind })
    } catch (error) {
        res.status(500).send({ msg: 'Can not get application' })
    }
   }
//    exports.GetOnePost = async (req, res) => {
//     const {id} = req.params
//     try {
//         const postToFind = await Posts.findById(id);
//         res.status(200).send({ msg: 'The post : ', postToFind })
//     } catch (error) {
//         res.status(500).send({ msg: 'Can not get posts' })
//     }
// }

