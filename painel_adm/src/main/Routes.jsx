import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../components/home/Home";
import FilmesCrud from "../components/filmes/FilmesCrud";

export default props =>
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/filmes" element={<FilmesCrud />} />
        <Route path="*" element={<Home />} />
    </Routes>