import mongoose from "mongoose";
import { Schema } from "mongoose";

const postSchema = new Schema({
    userId:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
    },
    img:{
        type:String,
        default:"https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
    },
    likes:{
        type:Array,
        default:[],
    }
},
{
    timestamps:true,
}
);

export default mongoose.model("Post",postSchema);