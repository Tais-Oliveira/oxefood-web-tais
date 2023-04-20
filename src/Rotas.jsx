import React from 'react';
import { Route, Routes } from "react-router-dom";

import Home from './views/Home/Home';
import FormCliente from './views/cliente/FormCliente';
import FormEntregador from './views/entregador/FormEntregador';
import FormProduto from './views/produto/FormProduto';

function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="form-cliente" element={ <FormCliente/> } />
                <Route path="form-produto" element={ <FormProduto/> } />
                <Route path="form-entregador" element={ <FormEntregador/> } />
            </Routes>
        </>
    )
}

export default Rotas
