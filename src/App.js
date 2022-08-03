import React from "react";
import Home from "./Home"
import "./App.css"
import NavBar from "./NavBar";
import { Routes, Route } from "react-router-dom";
import Cart from "./Cart";
import Signin from "./SignIn";
import SignInRoute from "./protectedRoutes/SignInRoute";
import AuthProtectedRoute from "./protectedRoutes/AuthProtectedRoute";
import SignOutRoute from "./protectedRoutes/SignOutRoute";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" />
        <Route path="/cart" element={<AuthProtectedRoute><Cart /></AuthProtectedRoute>} />
        <Route path="/signin" element={<SignInRoute><Signin /></SignInRoute>} />
        <Route path="signout" element={<SignOutRoute />} />
      </Routes>
    </div>
  );
}

export default App;