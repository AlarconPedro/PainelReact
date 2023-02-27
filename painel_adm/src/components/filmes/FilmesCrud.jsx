import React, { useState, useEffect } from "react";

import Main from "../template/Main";

import axios from "axios";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

import "./FilmesCrud.css";

export default function FilmesCrud() {

    const baseUrl = "https://localhost:7106/filme";

    const [filmesData, setFilmesData] = useState([]);

    const [filme, setFilme] = useState({
        // Id: "",
        titulo: "",
        genero: "",
        duracao: ""
    });

    const [tituloBusca, setTituloBusca] = useState({
        titulo: ""
    });

    const [abrirCadastroFilmes, setAbrirCadastroFilmes] = useState(false);
    const [abrirEditarFilmes, setAbrirEditarFilmes] = useState(false);
    const [updateFilmes, setUpdateFilmes] = useState(true);

    const abrirFecharCadastroFilmes = () => {
        setAbrirCadastroFilmes(!abrirCadastroFilmes);
    }

    const abrirFecharEditarFilmes = () => {
        setAbrirEditarFilmes(!abrirEditarFilmes);
     }

    const atualizaCampo = e => {
        const { name, value } = e.target;
        setFilme({
            ...filme,
            [name]: value
        });
    }

    const atualizaCampoBusca = e => {
        const { name, value } = e.target;
        setTituloBusca({
            ...tituloBusca,
            [name]: value
        });
    }

    const getFilmes = async () => {
        await axios.get(baseUrl).then(response => {
            setFilmesData(response.data);
        }).catch(error => {
            console.log(error);
        });
    }

    const getFilmesTitulo = async () => {
        await axios.get(baseUrl + "/" + filme.titulo).then(response => {
            setFilmesData(response.data);
        }).catch(error => {
            console.log(error);
        });
    }

    const postFilmes = async () => {
        // delete filme.Id;
        filme.duracao = parseInt(filme.duracao);
        await axios.post(baseUrl, filme).then(response => {
            setFilme(filme.concat(response.data));
            setUpdateFilmes(true);
            abrirFecharCadastroFilmes();
        }).catch(error => {
            console.log(error);
        });
    }

    useEffect(() => {
        if (updateFilmes) {
            getFilmes();
            setUpdateFilmes(false);
        }
    }, [updateFilmes]);

    return (
        <Main icon="user" title="Filmes" subtitle="Painel Sou+Fit">
            <div className="filmes-container ">
                <header>
                    <h3>Filmes</h3>
                    <button className="btn btn-success btn-adicionar" onClick={() => abrirFecharCadastroFilmes()}><strong>+</strong> Adicionar Filme</button>
                </header>
                <hr />
                <div className="input-group rounded">
                    <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" onChange={atualizaCampoBusca} />
                    <button className="botaoBusca" onClick={() => getFilmesTitulo()}>
                        <span className="input-group-text border-0" id="search-addon">
                            <i className="fa fa-search"></i>
                        </span>
                    </button>
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
                        {filmesData.map((filme) => (
                            <tr key={filme.id}>
                                <td>{filme.id}</td>
                                <td>{filme.titulo}</td>
                                <td>{filme.genero}</td>
                                <td>{filme.duracao}</td>
                                <td>
                                    <button className="btn btn-warning">
                                        <i className="fa fa-pencil"></i>
                                    </button>{" "}
                                    <button className="btn btn-danger">
                                        <i className="fa fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <Modal isOpen={abrirCadastroFilmes}>
                    <ModalHeader>Incluir Filme</ModalHeader>
                    <ModalBody>
                        <div className="form-group" name="titulo">
                            <label>Titulo</label>
                            <br />
                            <input type="text" className="form-control" name="titulo" onChange={atualizaCampo} />
                            <br />
                            <label>Genero</label>
                            <br />
                            <input type="text" className="form-control" name="genero" onChange={atualizaCampo} />
                            <br />
                            <label>Duração</label>
                            <br />
                            <input type="number" className="form-control" name="duracao" onChange={atualizaCampo} />
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <button className="btn btn-success" onClick={() => postFilmes()}>Salvar</button>{" "}
                        <button className="btn btn-danger" onClick={() => abrirFecharCadastroFilmes()}>Cancelar</button>
                    </ModalFooter>
                </Modal>
            </div>
        </Main>

    );
}

// export default props => (
//     <Main icon="user" title="Filmes" subtitle="Painel Sou+Fit">
//         <div className="filmes-container ">
//             <header>
//                 <h3>Filmes</h3>
//                 <button className="btn btn-success" >+ Adicionar Filme</button>
//             </header>
//             <hr />
//             <div class="input-group rounded">
//                 <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
//                 <span class="input-group-text border-0" id="search-addon">
//                     <i class="fa fa-search"></i>
//                 </span>
//             </div>
//             <br />
//             <table className="table table-striped">
//                 <thead>
//                     <tr>
//                         <th>Id</th>
//                         <th>Nome</th>
//                         <th>Gênero</th>
//                         <th>Duração</th>
//                         <th>Ações</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td>1</td>
//                         <td>Nome do Filme</td>
//                         <td>Gênero do Filme</td>
//                         <td>Duração do Filme</td>
//                         <td>
//                             <button className="btn btn-warning">
//                                 <i className="fa fa-pencil"></i>
//                             </button>{" "}
//                             <button className="btn btn-danger">
//                                 <i className="fa fa-trash"></i>
//                             </button>
//                         </td>
//                     </tr>
//                 </tbody>
//             </table>
//         </div>
//     </Main>
// );