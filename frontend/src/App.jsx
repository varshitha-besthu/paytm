import DashBoard from "./pages/DashBoard";
import Signin from "./pages/Signin";
import SignUp from "./pages/Signup"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element = {< SignUp/>} />
          <Route path="/signup" element = {<SignUp />}/>
          <Route path="/signin" element = {<Signin />}/>
          <Route path="/dashboard" element = {<DashBoard />} />


        </Routes>
      </Router>
    </div>
  )
}

export default App
