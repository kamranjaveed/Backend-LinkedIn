const mongoose = require("mongoose");
const commentSchema = new mongoose.Schema({
    textComment : {
        type : String,
    },
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true  
    },
    postId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Post",
    },

},
    {
        timestamps : true
    })
    const Post = mongoose.model("Comment", commentSchema);

    module.exports = Post;
