import { Route, Routes } from "react-router-dom";
import Form from "./Components/Auth/Form";
import FormRegister from "./Components/Register/FormRegister";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/sign-up" element={<FormRegister />} />
      <Route path="*" element={<h1>404 Page Not Found</h1>} />
    </Routes>
  );
}
