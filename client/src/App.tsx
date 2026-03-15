import "./App.css";
import { Route, Routes } from "react-router";
import { Home } from "./Pages/Home";
import { Ads } from "./Pages/Ads";
import { Ad } from "./Pages/Ad";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Layout from "./Layout/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/ads/categories" element={<Ads />} />
          <Route path="/ad/:id" element={<Ad />} />
          <Route
            path="*"
            element={
              <div className="h-[85vh] w-full flex justify-center items-center text-gray-600 text-3xl font-semibold">
                404 Not found
              </div>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
