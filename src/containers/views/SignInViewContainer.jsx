import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const SignInViewContainer = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInViewContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default SignInViewContainer;
