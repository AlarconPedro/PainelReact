import React from "react";

import "./FilmesCrud.css";

export default props => (
    <main className="content container-fluid">
        <div className="p-3 mt-3">
            <div className="filmes-container ">
                <header>
                    <h3>Filmes</h3>
                    <button className="btn btn-success" >+ Adicionar Filme</button>
                </header>
                <hr />
                <div class="input-group rounded">
                    <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                    <span class="input-group-text border-0" id="search-addon">
                        <i class="fa fa-search"></i>
                    </span>
                </div>
                <br />
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>Gênero</th>
                            <th>Duração</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Nome do Filme</td>
                            <td>Gênero do Filme</td>
                            <td>Duração do Filme</td>
                            <td>
                                <button className="btn btn-warning">
                                    <i className="fa fa-pencil"></i>
                                </button>{" "}
                                <button className="btn btn-danger">
                                    <i className="fa fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </main>
);