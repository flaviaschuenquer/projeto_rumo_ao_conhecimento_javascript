import { Link } from "react-router-dom";
import { Button } from "../../components/PrimaryButton/styles";
import { ReactComponent as LogImage } from '../../assets/images/logomedio.svg';
import Dark from "../../components/Darkmode/Dark";
import api from "../../Services/api";
import React, { useState, useEffect } from "react";

function RecuperarSenha() {

  const [email, setEmail] = useState("");

 async function recuperarSenha () {



 }
  

  





  return (


    <>
      <Dark />
      <div className="home-container">

        <div className="base-card login-card">


          {/* <Header/> */}
          <form className="loginForm">
            <div className="title">
              <h1>Recuperar Senha</h1>
            </div>

            <div>
             
              <input
                id="recuperacao"
                type="text"
                name="recuperacao"
              placeholder="E-mail"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)}}
              />
            </div>


            <Link>
              <button onClick={recuperarSenha} className="user-login__submit-button" style={{ width: "120px", margin: "50px", padding: "5%" }} type="button">
                ENVIAR
              </button>
              </Link>

            <Link className="btnVoltar"
              href="/" 
              variant="body2">
              <h4>Voltar</h4>
            </Link>



          </form>
          {/* <Footer/> */}
        </div>
      </div>
    </>

  )
} export default RecuperarSenha;