import { Link } from "react-router-dom";
import { Button } from "../../components/PrimaryButton/styles";
import { ReactComponent as LogImage } from '../../assets/images/logomedio.svg';
import Dark from "../../components/Darkmode/Dark";


function NovaSenha() {
  return (


    <>
      <Dark />

      <div className="home-container">

        <div className="base-card login-card">


          {/* <Header/> */}
          <form className="loginForm">
            <div className="title">
              <h1>Redefinir Senha</h1>
            </div>

            <div>
              <label htmlFor="user">Nova senha</label>
              <input
                id="senha"
                type="text"
                name="senha"

              />
            </div>

            <div>
              <label htmlFor="user">Repetir nova senha</label>
              <input
                id="novaSenha"
                type="text"
                name="novaSenha"

              />
            </div>


            <Link to={"/"}>
              <button className="user-login__submit-button" style={{ width: "120px", margin: "50px", padding: "5%" }} type="submit">
                ATUALIZAR
              </button>
            </Link>

            <Link className="btnVoltar"
              href="/recuperarSenha" variant="body2">
              <h4>Voltar</h4>
            </Link>



          </form>
          {/* <Footer/> */}
        </div>
      </div>

    </>

  )
} export default NovaSenha;