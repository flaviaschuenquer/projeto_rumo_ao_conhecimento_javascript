import { Link } from "react-router-dom";
import { Button } from "../../components/PrimaryButton/styles";
import { ReactComponent as LogImage } from "../../assets/images/logomedio.svg";
import Navbar from "../../components/Navbar/index";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Dark from "../../components/Darkmode/Dark";
import React,{useState} from "react";
import api from "../../Services/api";

import "./index.scss";

function CriarPlano() {
const [pdi, setPdi]= useState({

  AlvoDisponivel: "",
  Meta: "",
  Mentor: "",
  Indicador: "",
  Recurso: "",
  Acoes: "",
  Prazo: ""




});
console.log(pdi);

  async function handleSubmitOnRegister() {
    console.log("Pdi", pdi);
    await api.post("api/v1/plano/salvar",pdi);
    alert("Plano Cadastrado com sucesso!");


  }




  return (
    <>

      <Navbar />
      <Dark />
      <div className="home-container">
        <div className="base-card home-card">
          <form className="loginForm">

            <div >
              <div className="title"><h1>Alvo Disponivel</h1></div>
              <select>
                <option value="OpMelhoria">Oportunidade de melhoria</option>
                <option value="EvCarreira">Evolução na carreira</option>
              </select>
            </div>



            <div style={{ margin: "20px" }}>
              <table  >
                <caption>PLANO DE AÇÃO</caption>

                <tr>
                  <th>Defina sua meta</th>
                  <th>Mentor</th>

                </tr>

                <tr>
                  <td>
                    <input
                        style={{ backgroundColor: "rgb(184, 183, 183)", fontSize: "small" }} 
                        value={pdi?.AlvoDisponivel}
                        onChange={(event) => {
                          setPdi({ ...pdi, AlvoDisponivel: event.target.value })}} />
                  
                  </td>

                  <td>
                    <input
                    style={{ backgroundColor: "rgb(184, 183, 183)", fontSize: "small" }}
                    value={pdi?.AlvoDisponivel}
                    onChange={(event) => {
                      setPdi({ ...pdi, AlvoDisponivel: event.target.value })}} />
                 </td>

                </tr>




                <tr>
                  <th>Indicador</th>
                  <th>Recurso</th>

                </tr>

                <tr>
                   <td>
                    <input
                    style={{ backgroundColor: "rgb(184, 183, 183)", fontSize: "small" }}
                    value={pdi?.AlvoDisponivel}
                    onChange={(event) => {
                      setPdi({ ...pdi, AlvoDisponivel: event.target.value })}} />
                 </td>

                 <td>
                    <input
                    style={{ backgroundColor: "rgb(184, 183, 183)", fontSize: "small" }}
                    value={pdi?.AlvoDisponivel}
                    onChange={(event) => {
                      setPdi({ ...pdi, AlvoDisponivel: event.target.value })}} />
                 </td>

                </tr>



                <tr>
                  <th>Ações</th>
                  <th>Prazo</th>

                </tr>

                <tr>
                <td>
                    <input
                    style={{ backgroundColor: "rgb(184, 183, 183)", fontSize: "small" }}
                    value={pdi?.AlvoDisponivel}
                    onChange={(event) => {
                      setPdi({ ...pdi, AlvoDisponivel: event.target.value })}} />
                 </td>
                 <td>
                    <input
                    style={{ backgroundColor: "rgb(184, 183, 183)", fontSize: "small" }}
                    value={pdi?.AlvoDisponivel}
                    onChange={(event) => {
                      setPdi({ ...pdi, AlvoDisponivel: event.target.value })}} />
                 </td>
                </tr>
              </table>
            </div>






            <Link to={"/plano"}>
              <Button className="btnHome" type="submit" style={{ marginTop: "5%" }}>
                Enviar plano
              </Button>
            </Link>

            <Link className="btnVoltar" to={"/historicodePlanos"}>
              <h4>Voltar</h4>
            </Link>

            <Link className="notification" to={"/cadastro"}>
              <icon><NotificationsIcon /></icon>
            </Link>
          </form>
        </div>
      </div>

    </>
  );
}

export default CriarPlano;