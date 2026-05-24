import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
  Navigate,
} from "react-router";
import "./App.css";
import MainLayout from "./components/layout/MainLayout";
import Home from "./pages/Home";
import EventDetails from "./components/events/EventDetails";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { getToken } from "./utils/auth";
import CreateEvent from "./pages/CreateEvent";

function App() {
  const [token, setToken] = useState(getToken());

  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='events/:slug' element={<EventDetails />} />
        <Route path='sign-up' element={<SignUp />} />
        <Route path='sign-in' element={<SignIn onLogin={() => setToken(getToken())} />} />
        <Route
          path='create-event'
          element={token ? <CreateEvent /> : <Navigate to='/sign-in' />}
        />
      </Route>
    </Routes>
  );
}

export default App;
