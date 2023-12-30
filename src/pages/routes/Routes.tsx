import React from "react";

import { Routes, Route } from "react-router";
import Home from "../home/Home";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" Component={Home} />
    </Routes>
  );
};

export default PageRoutes;
