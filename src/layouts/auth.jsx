import { SignIn, SignUp } from "@/pages/auth";
import { Routes, Route } from "react-router-dom";

export function Auth() {

  return (
    <div className="relative min-h-screen w-full">
      <Routes>
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
      </Routes>
    </div>
  );
}

Auth.displayName = "/src/layout/auth.jsx";

export default Auth;
