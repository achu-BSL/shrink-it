import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./utils/ProtectedRoute";
import { AuthRoute } from "./utils/AuthRoute";

const App = () => {
  return (
    <Routes>
      <Route path="/register" element={<AuthRoute child={<Register />} />} />
      <Route path="/login" element={<AuthRoute child={<Login />} />} />
      <Route path="/" element={<ProtectedRoute />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
