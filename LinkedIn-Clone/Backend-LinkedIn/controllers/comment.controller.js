const Comment = require("../modules/comment.module");
const createComment = async (req, res) => {
    try{
        const { textComment , userId, postId }= req.body;
        const comment = new Comment({
            textComment, userId, postId,
});
await comment.save();
return res.ststus(201).json({ message: "Comment Added Successfully", comment})
   }
    catch(err) {
        console.log("err", err)
    }
};

module.exports = { createComment }