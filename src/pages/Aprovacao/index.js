import { Link } from "react-router-dom";
import { Button } from "../../components/PrimaryButton/styles";
import React, { useState } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import api from "../../Services/api";

import Navbar from "../../components/Navbar/index";
import Dark from "../../components/Darkmode/Dark";


import Table from "../../components/Table/index"
import "./styles.scss";

function Aprovacao() {

  const data = [
    { id: 1, name: 'Ana', last: 'Bull' },
    { id: 2, name: 'Athos', last: 'Portes' },
    { id: 3, name: 'Maggie', last: 'Bully' }
  ]

  const head = {
    id: 'IDDD',
    name: 'Tipo',
    last: 'Cadastrado em'
  }

  return (
    <>
      <Navbar />
      <Dark />
      <div className="home-container">
        <div className="base-card home-card">
          <form className="loginForm">
          <div className="title"><h1>Lista de Aprovação</h1></div>


            <div>
              <Table data={data} head={head}/>
            </div>


            <Link className="btnVoltar" to={"/historicodePlanos"}>
              <h4>Voltar</h4>
            </Link>

          </form>
        </div>
      </div>
    </>
  )
}

export default Aprovacao;