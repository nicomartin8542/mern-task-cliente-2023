import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthLayout } from "./layout/AuthLayout";
import { Login } from "./pages/Login";
import { ForgetPassword } from "./pages/ForgetPassword";
import { NewPassword } from "./pages/NewPassword";
import { ConfirmUser } from "./pages/ConfirmUser";
import { Register } from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forget-password" element={<ForgetPassword />} />
          <Route path="forget-password/:token" element={<NewPassword />} />
          <Route path="confirm-user/:id" element={<ConfirmUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
