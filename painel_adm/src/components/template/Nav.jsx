import React from "react";
import "./css/Nav.css";

import { Link } from "react-router-dom";

export default props =>
<aside className="menu-area">
    <nav className="menu">
        <Link to="/">
            <i className="fa fa-home"></i> Início
        </Link>
        <Link to="/filmes">  
            <i className="fa fa-users"></i> Filmes
        </Link>
    </nav>
</aside>