import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Dark from "../../components/Darkmode/Dark";
import logo from "../../assets/images/logomedio.svg";

import "./login.scss";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const collectData = async () => {
    console.warn(login, password);
    let result = await fetch("http://api-v1-ticsocial.herokuapp.com/login", {
      method: "post",
      body: JSON.stringify({ login, password }),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer my-token",
      },
    });
    result = await result.text();

    localStorage.setItem("usuario", result);

    console.log(result)
    if (result) {
      history.push("/home");
      alert("Bem vindo a Tic Social.");
    } else {
      history.push("/");
      alert("Usuario ou senha incorretos");
    }
  };


  return (


    <>
      <Dark />

      <div className="login-container">
        <div className="base-card login-card">
          <div className="loginForm">
            <div className="user-login">
              
               <img id="img-inicial" src={logo}/>
               <h1>Acessar o Sistema</h1>
              <form>
                <div>
                  <label htmlFor="user">Usuário</label>
                  <input
                    id="user"
                    type="text"
                    name="user"
                    value={login}
                    onChange={(e) => {
                      setLogin(e.target.value);
                    }}
                  />
                </div>
                <div className="user-login__form-control">
                  <label htmlFor="password">Senha</label>
                  <input
                    id="password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>


                <button
                  onClick={collectData}
                  theme="contained-green"
                  className="user-login__submit-button"
                  rounded
                  type="button"
                >
                  ENTRAR
                </button>
                <Grid item className="forgot">
                  <Link href={"/recuperarSenha"} variant="body2">
                    <h4>Esqueceu sua senha?</h4>
                  </Link>
                </Grid>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;