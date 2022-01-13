import { Link } from "react-router-dom";
import { Button } from "../../components/PrimaryButton/styles";
import Navbar from "../../components/Navbar/index";
import Dark from "../../components/Darkmode/Dark";
import { ReactComponent as LogImage } from '../../assets/images/logomedio.svg';

import NotificationsIcon from '@mui/icons-material/Notifications';

import "./index.scss"

function Plano() {
    return (
        <>
            <Navbar />
            <Dark />
            <div className="home-container">
                <div className="base-card home-card">
                    <form className="loginForm">

                        <div className="title">
                            <h1> Tic Social.</h1>
                        </div>



                        <div className="title">
                            <h1>Plano de Desenvolvimento individual/ Acompanhamento.</h1>
                        </div>


                        <div style={{ margin: "20px" }}>


                        </div>


                        <Link to={"/finalizarPlano"}>
                            <Button
                                className="btnHome"
                                type="submit">Finalizar Plano
                            </Button>
                        </Link>


                        <Link className="btnVoltar" to={"/criarPlano"}>
                            <h4>Voltar</h4>
                        </Link>

                        <Link className="notification" to={"/cadastro"}>
                        <icon><NotificationsIcon /></icon>
                        </Link>

                    </form>

                </div>

            </div>







        </>
    )
}

export default Plano;