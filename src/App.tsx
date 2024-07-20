import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { LoginPage } from "./pages/login";
import { UsersPage } from "./pages/dashboard/sub-pages/users";
import { UsersDetailsPage } from "./pages/dashboard/sub-pages/users-details";
import { Dashboard } from "./pages/dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" index element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="users" element={<UsersPage />} />
          <Route path="user-details/:id" element={<UsersDetailsPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
