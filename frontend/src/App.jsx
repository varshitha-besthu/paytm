import { RecoilRoot } from "recoil";
import DashBoard from "./pages/DashBoard";
import Signin from "./pages/Signin";
import SignUp from "./pages/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SendMoney from "./components/SendMoney";

function App() {
  return (
    <RecoilRoot>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/sendMoney" element= {<SendMoney />}/>
          </Routes>
        </Router>
      </div>
    </RecoilRoot>
  );
}

export default App;
