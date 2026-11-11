import React from "react";
import { Routes, Route } from "react-router-dom";
import Loguearse from "../paginas/Loguearse";
import Registro from "../paginas/Registro";
import Home from "../paginas/Home";

function Rutas() {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/loguearse" element={<Loguearse />} />
                <Route path="/registro" element={<Registro />} />
            </Routes>
        </div>
    );
}

export default Rutas;