import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages";
import Signin from "./pages/Signin";
import TradingAcademy from "./pages/TradingAcademy";
import Academy from "./pages/Academy";
import Physical from "./pages/Checkout/Physical";
import Online from "./pages/Checkout/Online";
import Redirect from "./components/Auth/Redirect";
import ScrollToTop from "./components/Auth/authStatus";
function App() {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/Academy" element={<TradingAcademy />} />
          <Route element={<Redirect />}>
            <Route path="/Academy/Offers/Physical" element={<Physical />} />
            <Route path="/Academy/Offers/Online" element={<Online />} />
            <Route path="/Academy/Offers" element={<Academy />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
