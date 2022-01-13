import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LogImage } from "../../assets/images/logomedio.svg";
import Navbar from "../../components/Navbar/index"
import Dark from "../../components/Darkmode/Dark";
import api from "../../Services/api";
import "./index.scss";

import { Button } from "../../components/PrimaryButton/styles";

function Funcionarios() {
  const [usuario, setUsuario] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchData() {
      const result = await api.get(`/api/v1/usuario/listarTodos`);

      setUsuario(result.data);
    }

    fetchData();
  }, []);



  return (
    <>

      <Navbar />
      <Dark />
      <div className="home-container">
        <div className="base-card login-card">
          <div className="loginForm">
            <div className="user-login">
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
                    <h1>Relatório do cadastro de usuários</h1>
                  </div>

                  <div>
                    {usuario.map((user) => {
                      return (
                        <div key={user.id}>
                          {/* <Link to={`usuarios/${usuario?.id_usuario}`}> */}
                          <div className="cardForm">
                            <p>
                              Nome: <strong>{user?.nome}</strong>
                            </p>
                            <p>Id_usuario: {user?.id}</p>
                            <p>Login: {user?.login}</p>
                            <p>Data de nascimento: {user?.dataNasc}</p>
                            <p>Sexo: {user?.sexo}</p>
                            <p>Estado civil: {user?.estadoCivil}</p>
                            <p>Saudação: {user?.saudacao}</p>
                            <p>Nacionalidade: {user?.nacionalidade}</p>
                            <p>Naturalidade: {user?.naturalidade}</p>
                            <p>Nome do pai: {user?.nomepai}</p>
                            <p>Nome da mãe: {user?.nomeMae}</p>
                            <p>PNE: {user?.pNE}</p>
                            <p>Data de admissão: {user?.dataAdmissao}</p>
                            <p>Data de demissão: {user?.dataDemissao}</p>
                            <p>Motivo demissão: {user?.motivoDemissao}</p>
                            <p>Cep: {user?.cep}</p>
                            <p>Numero: {user?.numero}</p>
                            <p>Logradouro: {user?.logradouro}</p>
                            <p>Bairro: {user?.bairro}</p>
                            <p>Cidade: {user?.cidade}</p>
                            <p>Telefone: {user?.telefone}</p>
                            <p>Celular: {user?.celular}</p>
                            <p>
                              Telefone emergencial: {user?.telefoneEmergencia}
                            </p>
                            <p>Email empresarial: {user?.emailEmpresarial}</p>
                            <p>Email pessoal: {user?.emailpessoal}</p>
                            <p>Cargo: {user?.cargo}</p>
                            <p>Salario: {user?.salario}</p>
                            <p>Turno: {user?.turno}</p>
                            <p>Tipo de contrato: {user?.tipoContrato}</p>
                            <p>Data do contrato: {user?.dataContrato}</p>
                            <p>Escolaridade: {user?.escolaridade}</p>
                            <p>Superior direto: {user?.superiorDireto}</p>
                            <p>
                              Email do superior direto:{" "}
                              {user?.emailSuperiorDireto}
                            </p>
                            <p>Grau hierarquico: {user?.grauHierarquico}</p>
                            <p>Duração do contrato: {user?.duracaoContrato}</p>
                            <p>
                              Vencimento do contrato: {user?.vencimentoContrato}
                            </p>
                            <p>Departamento: {user?.departamento}</p>
                            <p>CpF: {user?.cpf}</p>
                            <p>RG: {user?.rg}</p>
                            <p>Título de eleitor: {user?.tituloEleitoral}</p>
                            <p>Zona eleitoral: {user?.zonaEleitoral}</p>
                            <p>Seção eleitoral: {user?.secaoEleitoral}</p>
                            <p>CpTS numero: {user?.cptsNumero}</p>
                            <p>CpTS serie: {user?.cptsSerie}</p>
                            <p>Reservista: {user?.reservista}</p>
                            <p>CNH: {user?.cnh}</p>
                            <p>Banco: {user?.banco}</p>
                            <p>Agencia: {user?.agencia}</p>
                            <p>Conta corrente: {user?.contaCorrente}</p>
                            <p>PIS: {user?.pis}</p>
                            <p>password: {user?.password}</p>
                            <p>Valor da recissão: {user?.valorRecissao}</p>
                          </div>
                        </div>
                      );
                    })}
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

export default Funcionarios;
