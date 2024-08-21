import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FooterCom from "./components/FooterCom";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import About from "./pages/About";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <FooterCom />
    </BrowserRouter>
  );
}
