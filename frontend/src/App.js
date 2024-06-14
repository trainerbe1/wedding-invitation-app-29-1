import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Home-page";
import Navigasi from "./Navigasi";
import Login from "./Login";
import SignUp from "./SignUp";
import NavCustomer from "./customer/NavCustomer";
import Dasboard from "./customer/Dasboardd";
import Undangan from "./customer/Undangan";
import CustomerService from "./customer/CustomerService";
import BuatUndangan from "./customer/BuatUndangan";
import KelolaUndangan from "./customer/KelolaUndangan";
import KelolaPengantin from "./KelolaFitur/KelolaPengantin";
import KelolaQuote from "./KelolaFitur/KelolaQuote";
import KelolaBukuTamu from "./KelolaFitur/KelolaBukuTamu";
import KelolaSetting from "./KelolaFitur/KelolaSetting";
import KelolaJadwal from "./KelolaFitur/KelolaJadwal";
import BuatJadwal from "./KelolaFitur/BuatJadwal";
import KelolaRSVP from "./KelolaFitur/KelolaRSVP";

function App() {
  return (
    <div>
      {/* Routes */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigasi />}>
            {/* <Route path="login" element={<Navigasi />} /> */}
            <Route index element={<HomePage />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
          </Route>
          <Route path="/navcustomer" element={<NavCustomer />}>
            <Route index element={<Dasboard />} />
            <Route path="/navcustomer/undangan" element={<Undangan />} />
            <Route
              path="navcustomer/customerservice"
              element={<CustomerService />}
            />
            <Route
              path="navcustomer/buatundangan"
              element={<BuatUndangan />}
            ></Route>
            <Route
              path="navcustomer/kelolaundangan"
              element={<KelolaUndangan />}
            ></Route>
            <Route
              path="navcustomer/kelolapengantin"
              element={<KelolaPengantin />}
            ></Route>
            <Route
              path="navcustomer/kelolabukutamu"
              element={<KelolaBukuTamu />}
            ></Route>{" "}
            <Route
              path="navcustomer/kelolaquote"
              element={<KelolaQuote />}
            ></Route>
            <Route
              path="navcustomer/kelolajadwal"
              element={<KelolaJadwal />}
            ></Route>
            <Route
              path="navcustomer/kelolasetting"
              element={<KelolaSetting />}
            ></Route>
            <Route
              path="navcustomer/buatjadwal"
              element={<BuatJadwal />}
            ></Route>
            <Route
              path="navcustomer/kelolarsvp"
              element={<KelolaRSVP />}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
