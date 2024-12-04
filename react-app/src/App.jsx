import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Projects from "./pages/Projects";
import DashBoard from "./pages/DashBoard";
import Header from "./components/Header";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route path="/sign-in" element={<SignIn />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/dashboard" element={<DashBoard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
