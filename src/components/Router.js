import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { authService } from "../fbase";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

export const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return (
    <BrowserRouter>
      <Routes>{isLoggedIn ? <Route path="/" element={<Home />} /> : <Route path="/" element={<Auth />} />}</Routes>
    </BrowserRouter>
  );
};
