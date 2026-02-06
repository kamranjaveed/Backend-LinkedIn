import React, {useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios"

// all hooks in react start with "use"

const Signup = () => {

  // state for input fields

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // two new states

  const [loading, setLoading] = useState(false);// true
  const [err, setError] = useState(null);

  console.log("err", err)

  console.log("username", username)
  console.log("email", email)
  console.log("password", password)


    const navigate = useNavigate()

  // function to signup user

  const handleSignup = async(e) => {

    // prevent the normal behavior of fomms -> to refresh the page unnecessarily on the click of button
    e.preventDefault()

    try{

      setLoading(true);
      setError(null)

      const res = await axios.post("http://localhost:4000/api/register", 
        // state variables(req.body)
        {
          username, email, password
        }
      );

      console.log("response from the signup api",res.data.message)

      // redirecting to signin on successful signup
      if(res.data.user){
        navigate("/signin")
      }

      // storing the error message from backend response
      if(!res.data.user){
        setError(res.data.message)
      }

      setLoading(false)

      // check response from backend
  
    }catch(err){
      console.log("err", err.message)
      setError("All fields are required")
      setLoading(false)
    }
  }

  return (
    <div className="flex justify-center gap-30 items-center min-h-screen">
      {/* Signup Form */}
      <div>
        <form onSubmit={handleSignup} className="flex flex-col gap-3 border-2 border-black p-16 rounded-lg">
          <h1 className="text-xl font-semibold text-center">Signup</h1>

        {/* username */}
          <input
            className="text-2xl border-2 border-black p-4 outline-none rounded-lg"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            // e.target.value = whatever you enter inside of input
            placeholder="username"
          />

          <input
            className="text-2xl border-2 border-black p-4 outline-none rounded-lg"
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="text-2xl border-2 border-black p-4 outline-none rounded-lg"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="flex justify-center p-2">
            <button type="submit" className="bg-purple-500 w-30 text-xl p-2 rounded-lg cursor-pointer text-white">
              {/* ternary operator */}
              {loading ? "Loading..." : "Signup"}
            </button>
          </div>

          {/*  */}

          <p className="text-md text-gray-500">
            Already have an account?{" "}
            <NavLink to={"/signin"}><span className="text-purple-400">Sign In</span></NavLink>
          </p>
          
           {/* Error */}
           <p className="font-semibold text-red-700">{err ? err : ""}</p>
        </form>
      </div>

      {/* LinkedIn Logo */}
      <div>
        <img
          className="w-96"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd59I5VJJPg2VoucJNvnuqK2-_gmUVqIzvdA&s"
          alt="linkedin_logo"
        />
      </div>
    </div>
  );
};

export default Signup;

// rfce - react fuunctional component