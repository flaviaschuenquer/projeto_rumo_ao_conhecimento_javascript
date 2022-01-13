import { Link } from "react-router-dom";
import { Button } from "../../components/PrimaryButton/styles";
import { ReactComponent as LogImage } from "../../assets/images/logomedio.svg";
import Navbar from "../../components/Navbar/index"
import Dark from "../../components/Darkmode/Dark";

import NotificationsIcon from "@mui/icons-material/Notifications";

import "./index.scss";
import { height } from "@mui/system";

function HistoricoPlanos() {
  return (
    <>

      <Navbar />
      <Dark />
      <div className="home-container">
        <div className="base-card home-card">
          <form className="loginForm">

            <div className="title">
              <h1>Plano de desenvolvimento individual</h1>
            </div>

            <div style={{ height: "50px", margin: "20px" }}>

              {/* 
              async function fetchData() {
      const result = await api.get(`/api/v1/usuario/listarTodos`);

      setUsuario(result.data);
    }
                 */}


                 
              <p>
                Você não possui nenhum plano em andamento, verificar
                disponibilidade em CRIAR NOVO PLANO
              </p>
            </div>

            <div>
              <Link to={"/criarPlano"}>
                <Button className="btnHome" type="submit">
                  Criar novo plano
                </Button>
              </Link>
            </div>

            <Link className="btnVoltar" to={"/home"}>
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

export default HistoricoPlanos;
