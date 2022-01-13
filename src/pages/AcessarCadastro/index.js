import { Link } from "react-router-dom";
import { Button } from "../../components/PrimaryButton/styles";
import { ReactComponent as LogImage } from '../../assets/images/logomedio.svg';
import Navbar from "../../components/Navbar/index"
import Dark from "../../components/Darkmode/Dark";

import NotificationsIcon from '@mui/icons-material/Notifications';

import "./index.scss"

function AcessarCadastro() {
    return (
        <>


            <Navbar />
            <Dark />

            <div className="home-container">
                <div className="base-card login-card">
                    <form className="loginForm">

                        <div className="title">
                            <h1>Cadastro </h1>
                        </div>

                        <Link to={"/cadastro"}>
                            <Button
                                className="btnHome"
                                type="submit">Cadastro dados Pessoais
                            </Button>
                        </Link>

                        <Link to={"/atualizarcadastro"}>
                            <Button
                                className="btnHome"
                                type="submit">Atualizar cadastro
                            </Button>
                        </Link>


                        <Link to={"/ListarFuncionarios"}>
                            <Button
                                className="btnHome"
                                type="submit">Listar funcionários
                            </Button>
                        </Link>


                        <Link to={"/ListaFuncionario"}>
                            <Button
                                className="btnHome"
                                type="submit">Buscar um funcionário
                            </Button>
                        </Link>

                        <Link className="btnVoltar" to={"/home"}>
                            <h4>Voltar</h4>
                        </Link>

                        <Link className="notification" to={"/cadastro"}>
                            <icon><NotificationsIcon /></icon>
                        </Link>

                    </form>

                </div>
                {/* <Footer className="footer"/> */}
            </div>





            {/* <Link to="/home">
               <PrimaryButton message="Link to Home" />
           </Link>
          

       <Link to="/home/products">
       <PrimaryButton message="Link to Products" />
       </Link> */}




        </>
    )
}

export default AcessarCadastro;