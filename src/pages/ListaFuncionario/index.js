import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LogImage } from "../../assets/images/logomedio.svg";
import api from "../../Services/api";
import Navbar from "../../components/Navbar/index"
import Dark from "../../components/Darkmode/Dark";
import "./index.scss";

import { Button } from "../../components/PrimaryButton/styles";

function ListaFuncionario() {
  const [usuario, setUsuario] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState(false);

  console.log(search);
  useEffect(() => {
    async function fetchData() {
      const result = await api.get(`/api/v1/usuario/{login}`);

      setUsuario(result.data);
    }

    fetchData();
  }, []);



  async function BuscaFuncionario() {


    var { data } = await api.get(`/api/v1/usuario/${search}`);
    setUsuario(data);
    console.log(usuario);
    setStatus(true);


  };


  return (
    <>

      <Navbar />
      <Dark />
      <div className="home-container">

        <div className="base-card login-card">
          <div className="loginForm">
            <div className="usuario-login">
              <>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
          
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "rigth",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div className="title">
                    <h1>Relatório do cadastro de usuário</h1>
                  </div>

                  <label htmlFor="usuario">Informe a matricula `(login)`</label>


                  <input
                    id="usuario"
                    type="text"
                    name="usuario"
                    value={search}
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }} />

                  <button type="button" onClick={BuscaFuncionario} className="user-login__submit-button" style={{ margin: "50px", padding: "2.5%" }}>BUSCAR</button>

                  <div>



                    {
                      status === false ? null :




                        <div key={usuario.id}>
                          {/* <Link to={`usuarios/${usuario?.id_usuario}`}> */}
                          <div className="cardForm">
                            <p>
                              Nome: <strong>{usuario?.nome}</strong>
                            </p>
                            <p>Id_usuario: {usuario?.id}</p>
                            <p>Login: {usuario?.login}</p>
                            <p>Data de nascimento: {usuario?.dataNasc}</p>
                            <p>Sexo: {usuario?.sexo}</p>
                            <p>Estado civil: {usuario?.estadoCivil}</p>
                            <p>Saudação: {usuario?.saudacao}</p>
                            <p>Nacionalidade: {usuario?.nacionalidade}</p>
                            <p>Naturalidade: {usuario?.naturalidade}</p>
                            <p>Nome do pai: {usuario?.nomepai}</p>
                            <p>Nome da mãe: {usuario?.nomeMae}</p>
                            <p>PNE: {usuario?.pNE}</p>
                            <p>Data de admissão: {usuario?.dataAdmissao}</p>
                            <p>Data de demissão: {usuario?.dataDemissao}</p>
                            <p>Motivo demissão: {usuario?.motivoDemissao}</p>
                            <p>Cep: {usuario?.cep}</p>
                            <p>Numero: {usuario?.numero}</p>
                            <p>Logradouro: {usuario?.logradouro}</p>
                            <p>Bairro: {usuario?.bairro}</p>
                            <p>Cidade: {usuario?.cidade}</p>
                            <p>Telefone: {usuario?.telefone}</p>
                            <p>Celular: {usuario?.celular}</p>
                            <p>
                              Telefone emergencial: {usuario?.telefoneEmergencia}
                            </p>
                            <p>Email empresarial: {usuario?.emailEmpresarial}</p>
                            <p>Email pessoal: {usuario?.emailpessoal}</p>
                            <p>Cargo: {usuario?.cargo}</p>
                            <p>Salario: {usuario?.salario}</p>
                            <p>Turno: {usuario?.turno}</p>
                            <p>Tipo de contrato: {usuario?.tipoContrato}</p>
                            <p>Data do contrato: {usuario?.dataContrato}</p>
                            <p>Escolaridade: {usuario?.escolaridade}</p>
                            <p>Superior direto: {usuario?.superiorDireto}</p>
                            <p>
                              Email do superior direto:{" "}
                              {usuario?.emailSuperiorDireto}
                            </p>
                            <p>Grau hierarquico: {usuario?.grauHierarquico}</p>
                            <p>Duração do contrato: {usuario?.duracaoContrato}</p>
                            <p>
                              Vencimento do contrato: {usuario?.vencimentoContrato}
                            </p>
                            <p>Departamento: {usuario?.departamento}</p>
                            <p>CpF: {usuario?.cpf}</p>
                            <p>RG: {usuario?.rg}</p>
                            <p>Título de eleitor: {usuario?.tituloEleitoral}</p>
                            <p>Zona eleitoral: {usuario?.zonaEleitoral}</p>
                            <p>Seção eleitoral: {usuario?.secaoEleitoral}</p>
                            <p>CpTS numero: {usuario?.cptsNumero}</p>
                            <p>CpTS serie: {usuario?.cptsSerie}</p>
                            <p>Reservista: {usuario?.reservista}</p>
                            <p>CNH: {usuario?.cnh}</p>
                            <p>Banco: {usuario?.banco}</p>
                            <p>Agencia: {usuario?.agencia}</p>
                            <p>Conta corrente: {usuario?.contaCorrente}</p>
                            <p>PIS: {usuario?.pis}</p>
                            <p>password: {usuario?.password}</p>
                            <p>Valor da recissão: {usuario?.valorRecissao}</p>
                          </div>
                        </div>
                    }

                    <Link
                      style={{ margin: "50px", textDecoration: "none" }}
                      to={"/acessarCadastro"}
                    >
                      <h4>Voltar</h4>
                    </Link>
                  </div>
                </div>
              </>
            </div>
          </div>
        </div>
      </div>

    </>

  );
}

export default ListaFuncionario;
