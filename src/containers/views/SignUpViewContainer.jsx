import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const SignUpViewContainer = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUpViewContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default SignUpViewContainer;
