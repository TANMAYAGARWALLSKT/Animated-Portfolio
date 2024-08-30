import React from "react";
import { Routes, Route } from "react-router-dom";
import Project from "../Project";
import Hero from "../Hero";
import Loader from "../Loader";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Loader />} />

      <Route path="/Project" element={<Project />} />
    </Routes>
  );
}

export default Router;
