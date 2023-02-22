import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
// Pages
import { Home, Contact, Login, Register, Reset } from "./Pages";
// Components
import { Header, Footer } from "./components";
function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
