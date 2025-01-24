import { Routes, Route, Navigate} from "react-router-dom";
import { Auth, Panel, Sucursales } from "./layouts";
import { Home } from "./pages/panel";
import { SignIn, SignUp } from "./pages/auth";
import HomeBrange from "./pages/sucursales/home";

function App() {
  return (
      <Routes>
        <Route path="/sucursales/*" element={<Sucursales />} />
        <Route path="/panel/*" element={<Panel />} />
        <Route path="/auth/*" element={<Auth />} />
        
        <Route path="*" element={<Navigate to="/auth/sign-in" />} />
      </Routes>
  );
}

export default App;
