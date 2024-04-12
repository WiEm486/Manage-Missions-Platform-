import { Route, Routes } from "react-router-dom";

import { Home } from "./components/Home";
import { Services } from "./components/Services";
import "./App.css";
import { SignIn } from "./components/SignIn";
import { AuthContextProvider } from "./context/AuthContext";
import { SignUp } from "./components/SignUp";

// import { dark, light } from "@mui/material/styles/createPalette";
// import { green, red } from "@mui/material/colors";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Routes>
          <Route path="home" element={<Home />}></Route>
          <Route path="services" element={<Services></Services>} />
          <Route path="/" element={<SignIn></SignIn>} />
          <Route path="signin" element={<SignIn></SignIn>} />
          <Route path="signin" element={<SignIn></SignIn>} />
          <Route path="signup" element={<SignUp></SignUp>} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
