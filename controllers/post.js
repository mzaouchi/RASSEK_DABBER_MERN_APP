const Posts = require('../models/Posts')
const User = require('../models/User')
// Ajouter un post
exports.AddPost = async (req,res)=>{
    console.log(req.file)

    try {

        const userPost = await User.findById(req.user.id)
        const newPost = new Posts({ ...req.body,userId: req.user.id, dateOffre : Date.now(), referenceOffre : Math.random()})
        await newPost.save()
        userPost.posts = [...userPost.posts, newPost]
        await userPost.save()
        res.send({ newPost })

    } catch (error) {
        res.status(500).send({ errors: [{ msg: 'On ne peut ajouter un nouveau post' }] })
    }
}
//Afficher les post d'un utilisateur
exports.GetMyPosts = async (req, res) => {
    try {
        const posts = await Posts.find({ userId: req.user._id }).populate("userId")

        res.status(200).send({ msg: 'My Posts List : ', posts })
    } catch (error) {
        res.status(500).send({ msg: 'Can not get my posts' })

    }
}


// Afficher tout les posts
exports.GetAllPosts = async (req, res) => {
    try {
        const postsList = await Posts.find();
        res.status(200).send({ msg: 'Posts List : ', postsList })
    } catch (error) {
        res.status(500).send({ msg: 'Can not get posts' })
    }
}

// Afficher tout les posts
exports.GetOnePost = async (req, res) => {
    const {id} = req.params
    try {
        const postToFind = await Posts.findById(id);
        res.status(200).send({ msg: 'The post : ', postToFind })
    } catch (error) {
        res.status(500).send({ msg: 'Can not get posts' })
    }
}
// Supprimer un post
exports.DeletePost = async (req, res) => {

    const { id } = req.params
    try {
        await User.updateOne({_id:req.user._id},{$pull:{posts:id}})  
        await Posts.findByIdAndDelete(id)
        res.status(200).send({ msg: 'deleted' });
    } catch (error) {
        res.status(500).send({ msg: "could not delete" })
    }
}
// Mise a jour d'un post
exports.UpdatePost = async (req,res)=>{
    const {id} = req.params
    try {
        const updatePost = await Posts.findByIdAndUpdate(id,{$set : {...req.body,dateOffre : Date.now()}})
        res.status(200).send({ msg:'Post updated' ,updatePost});
    } catch (error) {
        res.status(500).send({msg:'could not update'})
    }
}
