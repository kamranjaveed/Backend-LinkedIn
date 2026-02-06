import React, {useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import action
import { loginSuccessful } from "../redux/slices/userSlice";
import { useDispatch } from "react-redux";
import axios from "axios"

// all hooks in react start with "use"

const Signin = () => {

  // dispatch
  const dispatch = useDispatch();

  // state for input fields

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // two new states

  const [loading, setLoading] = useState(false);// true
  const [err, setError] = useState(null);

  console.log("err", err)

  console.log("email", email)
  console.log("password", password)


    const navigate = useNavigate()

  // function to signup user

  const handleSignIn = async(e) => {

    // prevent the normal behavior of fomms -> to refresh the page unnecessarily on the click of button
    e.preventDefault()

    try{

      setLoading(true);
      setError(null)

      const res = await axios.post("http://localhost:4000/api/signin", 
        // state variables(req.body)
        {
          email, password
        },
        {
          withCredentials : true
        }
      );

      console.log("response from the signup api",res.data.message)

      // redirecting to home route on successful signin
      if(res.data.user){
        // dispatch -> action -> (data to work on)
        /*
          {username : "abc", email : "abc@gmail.com", password : 123}
        */
        dispatch(loginSuccessful(res.data.user))
        navigate("/")
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
        <form onSubmit={handleSignIn} className="flex flex-col gap-3 border-2 border-black p-16 rounded-lg">
          <h1 className="text-xl font-semibold text-center">Sign In</h1>


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
            <button type="submit" className="bg-blue-500 w-30 text-xl p-2 rounded-lg cursor-pointer text-white">
              {/* ternary operator */}
              {loading ? "Loading..." : "Sign In"}
            </button>
          </div>

          {/*  */}

          <p className="text-md text-gray-500">
            Don't have an account?{" "}
            <NavLink to={"/signup"}><span className="text-blue-600">Create account</span></NavLink>
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

export default Signin;

// rfce - react fuunctional component