import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './views/Home/Home';
import FormCliente from './views/cliente/FormCliente';
import ListCliente from './views/cliente/ListCliente';

import FormProduto from './views/produto/FormProduto';
import ListProduto from './views/produto/ListProduto';


import FormEntregador from './views/entregador/FormEntregador';
import ListEntregador from './views/entregador/ListEntregador';

import FormComprador from './views/comprador/FormComprador';
import ListComprador from './views/comprador/ListComprador';




function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="list-cliente" element={ <ListCliente/> } />
                <Route path="form-cliente" element={ <FormCliente/> } />

                <Route path="form-produto" element={ <FormProduto/> } />
                <Route path="list-produto" element={ <ListProduto/> } />

                <Route path="list-entregador" element={ <ListEntregador/> } />
                <Route path="form-entregador" element={ <FormEntregador/> } />
                
                <Route path="form-comprador" element={ <FormComprador/> } />
                <Route path="list-comprador" element={ <ListComprador/> } />
           
             
              

            </Routes>
        </>
    )
}

export default Rotas
