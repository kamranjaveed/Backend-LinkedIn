import React, {useState} from "react";
import { FaPen } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import axios from "axios";
import { useSelector } from "react-redux";

const CreatePost = () => {
    // state variable for post content
    const [content, setContent] = useState("");
    console.log("content",content);

    const [isSendButtonEnabled, setIsSendButtonEnabled] = useState(false)
    // isSendButtonEnabled = false

    // handle send post
    const handleSendPost = async() => {
        try{
            if (content === ""){
                return alert("Post content cannot be empty")
            }
            const response = await axios.post("http://localhost:4000/api/create-post",
                {
                    content, author : currentUser?._id
                }
            )
            // alert message on successful post creation

            if(response.data.success) {
                setContent("");
                setIsSendButtonEnabled(false);
                return alert("Post created successfully")
            }
        }
        catch(err) {
            console.log("err",err.message)
        }
    }

  return (
    <div>
      <div className="flex items-center border-2 border-gray-500 px-10 rounded-full py-2">
        <input
          type="text"
          placeholder="What's on your mind?"
          className="p-4 text-2xl  outline-none"
          onChange={(e) => setContent(e.target.value)}
        />
         {/* create post icon */}
         <div>

             {
               ! isSendButtonEnabled && (
             
             <FaPen onClick = {() => setIsSendButtonEnabled(true)} className="text-2xl cursor-pointer"/>
            )}
             {
                // is isSendButtonEnabled = true then only show send icon
                isSendButtonEnabled && (<IoIosSend onClick={handleSendPost} className="text-2xl cursor-pointer"/>)
             }
             
         </div>
      </div>
    </div>
  );
};

export default CreatePost;