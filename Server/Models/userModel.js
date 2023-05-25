import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
    {
        username:{
            type:String,
            required: true,
        },
        password: {
            type:String,
            required: true,
        },
        firstname: {
            type:String,
            required: true,
        },
        lastname: {
            type:String,
            required: true,
        },
        isAdmin: {
            type:Boolean,
            default: false,
        },
        profilePicture: String,
        coverPicture: String,
        about: String,
        livesin: String,
        prn:String,
        Department :String,
        MailID :String,
        DOB :String,
        followers: [],
        following: []
         // worksAt: String,
        // relationship: String,
    },
    {timestamps:true}
)

const UserModel = mongoose.models.Users || mongoose.model("Users",UserSchema);
export default UserModel;