import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FooterCom from "./components/FooterCom";
import Header from "./components/Header";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <FooterCom />
    </BrowserRouter>
  );
}
