import { Link } from "react-router-dom";
import { Button } from "../../components/PrimaryButton/styles";
import Container from "@mui/material/Container";
import Navbar from "../../components/Navbar/index";
import Box from "@mui/material/Box";
import Dark from "../../components/Darkmode/Dark";
import NotificationsIcon from '@mui/icons-material/Notifications';

import "./home.scss"

function Home() {

    return (
        <>
            <Navbar />
            <Dark /> 
           
            <div className="home-container">
                <div className="base-card home-card">
                    <Container component="main">''
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >


                            <div className="title">
                                <h1>Bem-vindo(a) a Tic Social!</h1>
                            </div>



                            <Link to={"/acessarCadastro"}>
                                <Button
                                    className="btnHome"
                                    type="submit">Fazer Cadastro
                                </Button>
                            </Link>




                            <Link to={"/historicodePlanos"}>
                                <Button
                                    className="btnHome"
                                    type="submit">Criar e acompanhar PDI
                                </Button>
                            </Link>



                            <Link to={"/historicodePlanos"}>
                                <Button
                                    className="btnHome"
                                    type="submit">Histórico de planos
                                </Button>
                            </Link>

                            <Link to={"/home"}>
                                <Button
                                    className="btnHome"
                                    type="submit">Habilitar Plano (alvo)
                                </Button>
                            </Link>

                            <Link to={"/home"}>
                                <Button
                                    className="btnHome"
                                    type="submit">Aprovação
                                </Button>
                            </Link>

                            <Link to={"/home"}>
                                <Button
                                    className="btnHome"
                                    type="submit">Acompanhamento
                                </Button>
                            </Link>

                            <Link to={"/home"}>
                                <Button
                                    className="btnHome"
                                    type="submit">Validação
                                </Button>
                            </Link>

                            <Link to={"/home"}>
                                <Button
                                    className="btnHome"
                                    type="submit">Plano de Desenvolvimento Individual
                                </Button>
                            </Link>

                            <Link to={"/home"}>
                                <Button
                                    className="btnHome"
                                    type="submit">Mentoria
                                </Button>
                            </Link>



                            <Link className="btnVoltar" to={"/"}>
                                <h4>Voltar</h4>
                            </Link>

                            <Link className="notification" to={"/cadastro"}>
                            <icon><NotificationsIcon /></icon>
                            </Link>
                        </Box>

                    </Container>

                </div>

            </div>






        </>

    )
}

export default Home;