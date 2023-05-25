import PostModel from "../Models/postModel.js";
import mongoose from "mongoose";
import UserModel from "../Models/userModel.js";

//Create new post
export const createPost = async(req,res)=>{
    const newPost = new PostModel(req.body)
    
    try {
   //Error here come back later multiple posts get created even if id entered is wrong 
        await newPost.save()
        res.status(200).json(newPost)
    } catch (error) {
        res.status(500).json(error)
    }
}

//Get a Post
export const getPost=async(req,res)=>{
    const id = req.params.id

    try {
        const post = await PostModel.findById(id)
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json(error)
    }
}

//Update a Post
export const updatePost=async(req,res)=>{
    const id =req.params.id
    const {userId}=req.body

    try {
        const post = await PostModel.findById(id)
        if(post.userId===userId){
            await post.updateOne({$set:req.body})
            res.status(200).json("Post Updated!")
        }
        else{
            res.status(403).json("Action forbidden")
        }

    } catch (error) {
        res.status(500).json(error)
    }
}

//Delete a post
export const deletePost=async(req,res)=>{
    const id = req.params.id
    const {userId}=req.body
    try {
        const post = await PostModel.findById(id)
        if(post.userId===userId){
            await post.deleteOne()
            res.status(200).json("Post deleted successfully")
        }
        else{
            res.status(403).json("Action forbidden")
        }
    } catch (error) {
        res.status(500).json(error)
        
    }
}

// like and dislike a post
export const likePost = async(req,res)=>{
    const id= req.params.id
    const {userId}=req.body
    try {
        const post= await PostModel.findById(id);
        if(!post.likes.includes(userId)){
             await post.updateOne({$pull:{likes:userId}})
             res.status(200).json("post disliked")
        }
        else{
            await post.updateOne({$push:{likes:userId}})
             res.status(403).json("post liked")
        }
    } catch (error) {
        res.status(500).json(error)

    }
};
// export const unLikePost = async(req,res)=>{
//     console.log("ok")
//     const id= req.params.id
//     const {userId}=req.body
//     try {
//         const post= await PostModel.findById(id);
//         if(post.likes.includes(userId)){
//              await post.updateOne({$pull:{likes:userId}})
//              res.status(200).json("post unliked")
//         }
//         else{
//              res.status(403).json("post not liked")
//         }
//     } catch (error) {
//         res.status(500).json(error)

//     }
// }

//Get timeline posts 
export const getTimeLinePosts = async (req,res)=>{
    const userId =req.params.id

    try {
        const currentUserPost = await  PostModel.find({userId : userId})
        const followingPosts = await UserModel.aggregate([
            {
                $match : {
                    _id : new mongoose.Types.ObjectId(userId)
                }
            },
            {
                $lookup : {
                    from : "posts",
                    localField: "following",
                    foreignField: "userId",
                    as : "followingPosts"                    
                } 
            },
            {
                $project : {
                    followingPosts : 1,
                    _id:0
                }
            }
        ])

        res.status(200).json(currentUserPost.concat(...followingPosts[0].followingPosts)
        .sort((a,b)=>{
            return b.createAt - a.createAt;
        })
        );
    } catch (error) {
        res.status(500).json(error)

    }
}