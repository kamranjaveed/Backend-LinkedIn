
// client-side routing
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import HomePage from "./pages/Homepage"
import Navbar from "./components/Navbar"
import Profile from "./pages/profile"

function App() {
  return (
    <Router>
      <Navbar />
        {/* routes */}
       <Routes>
        {/* inidvidual routes */}
          <Route path="/signup" element= {<Signup />}/>
          <Route path="/signin" element= {<Signin />}/>
          <Route path = "/" element = {<HomePage />}/>
          <Route path="/profile" element= {<Profile />}/>
       </Routes>

       {/* footer */}
    </Router>
  )
}

export default App
