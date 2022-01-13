import React, { useState } from "react";
import "./index.scss";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Navbar from "../../components/Navbar/index"
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import api from "../../Services/api";
import Dark from "../../components/Darkmode/Dark";




function AtualizarCadastro() {

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState(false);

  const [usuario, setUsuario] = useState({
    nome: "",
    login: "",
    dataNasc: "",
    sexo: "",
    estadoCivil: "",
    saudacao: "",
    nacionalidade: "",
    naturalidade: "",
    nomeDoPai: "",
    nomeDaMae: "",
    pne: "",
    dataAdmissao: "",
    dataDemissao: "",
    motivoDemissao: "",
    cep: "",
    numero: "",
    logradouro: "",
    bairro: "",
    cidade: "",
    estado: "",
    telefone: "",
    celular: "",
    telefoneEmergencia: "",
    emailEmpresarial: "",
    emailPessoal: "",
    cargo: "",
    salario: "",
    turno: "",
    tipoContrato: "",
    dataContrato: "",
    escolaridade: "",
    superiorDireto: "",
    emailSuperiorDireto: "",
    grauHierarquico: "",
    duracaoContrato: "",
    vencimentoContrato: "",
    departamento: "",
    cpf: "",
    rg: "",
    tituloEleitor: "",
    zonaEleitoral: "",
    secaoEleitoral: "",
    cptsNum: "",
    cptsSerie: "",
    reservista: "",
    cnh: "",
    banco: "",
    agencia: "",
    contaCorrente: "",
    pis: "",
    password: "",
    valorRecissao: "",
  });





  async function BuscaFuncionario() {


    var { data } = await api.get(`/api/v1/usuario/${search}`);
    setUsuario(data);
    console.log(usuario);
    setStatus(true);


  };




  function Atualizar(event) {
    event.preventDefault();
    console.log(usuario);
    var x = document.getElementById("login").value;
    api.put(`/api/v1/usuario/${x}`, usuario).then
      (alert("Cadastrado atualizado com sucesso!"));


  }

  return (

    <>
      <div className="bg-cadastro">
        <Navbar />
        <Dark />
        <div className="home-container">
          <div className="base-card home-card">


            <Container component="main">
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 5,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography className="h1" variant="h5">
                  Atualização de Cadastro
                </Typography>

                <Grid container spacing={0}>
                  <TextField
                    type="text"
                    autoComplete="given-name"
                    name="nome"
                    request="true"
                    required

                    id="login"
                    label="informe matricula"
                    autoFocus
                    value={search}
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                  />

                  <button

                    variant="contained"
                    onClick={BuscaFuncionario}

                    className="user-login__submit-button-buscar"
                  >
                    Buscar
                  </button>

                </Grid>



                <Box component="form" noValidate sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        type="text"
                        autoComplete="given-name"
                        name="nome"
                        request="true"
                        required
                        fullWidth
                        id="nome"
                        label="Nome Completo"

                        value={usuario?.nome}
                        onChange={(event) => {
                          setUsuario({ ...usuario, nome: event.target.value });
                        }}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        required
                        type="text"
                        fullWidth
                        id="login"
                        label="matricula"
                        name="login"
                        value={usuario?.login}
                        onChange={(event) => {
                          setUsuario({ ...usuario, login: event.target.value });
                        }}
                      />
                    </Grid>

                    <Grid item xs={13} sm={6}>
                      <TextField
                        type="date"
                        required
                        fullWidth

                        id="dataNasc"
                        label=" data de nascimento"
                        name="dataNasc"
                        value={usuario?.dataNasc}
                        onChange={(event) => {
                          setUsuario({
                            ...usuario,
                            dataNasc: event.target.value,
                          });
                        }}
                      />
                    </Grid>

                    <Grid item xs={13} sm={6}>
                      <TextField
                        type="text"
                        name="sexo"
                        required
                        fullWidth
                        id="sexo"
                        label="Sexo"
                        value={usuario?.sexo}
                        onChange={(event) => {
                          setUsuario({ ...usuario, sexo: event.target.value });
                        }}
                      />
                    </Grid>

                    <Grid item xs={13} sm={6}>
                      <TextField
                        type="text"
                        name="civil"
                        fullWidth
                        id="civil"
                        label="Estado Civil"
                        autoComplete="new-password"
                        value={usuario?.estadoCivil}
                        onChange={(event) => {
                          setUsuario({
                            ...usuario,
                            estadoCivil: event.target.value,
                          });
                        }}
                      />
                    </Grid>

                    <Grid item xs={13} sm={6}>
                      <TextField
                        type="text"
                        name="saudacao"
                        fullWidth
                        id="saudacao"
                        label="Saudação"
                        value={usuario?.saudacao}
                        onChange={(event) => {
                          setUsuario({
                            ...usuario,
                            saudacao: event.target.value,
                          });
                        }}
                      />
                    </Grid>

                    <Grid item xs={13} sm={6}>
                      <TextField
                        type="text"
                        name="nacionalidade"
                        fullWidth
                        id="nacionalidade"
                        label="Nacionalidade"
                        value={usuario?.nacionalidade}
                        onChange={(event) => {
                          setUsuario({
                            ...usuario,
                            nacionalidade: event.target.value,
                          });
                        }}
                      />
                    </Grid>

                    <Grid item xs={13} sm={6}>
                      <TextField
                        type="text"
                        name="naturalidade"
                        fullWidth
                        id="naturalidade"
                        label="Naturalidade"
                        value={usuario?.naturalidade}
                        onChange={(event) => {
                          setUsuario({
                            ...usuario,
                            naturalidade: event.target.value,
                          });
                        }}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        type="text"
                        fullWidth
                        id="pai"
                        label="Nome do Pai"
                        name="pai"
                        autoComplete="new-password"
                        value={usuario?.nomeDoPai}
                        onChange={(event) => {
                          setUsuario({
                            ...usuario,
                            nomeDoPai: event.target.value,
                          });
                        }}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        type="text"
                        fullWidth
                        id="mae"
                        label="Nome da Mãe"
                        name="mae"
                        autoComplete="new-password"
                        value={usuario?.nomeDaMae}
                        onChange={(event) => {
                          setUsuario({
                            ...usuario,
                            nomeDaMae: event.target.value,
                          });
                        }}
                      />
                    </Grid>

                    <Grid item xs={13} sm={6}>
                      <TextField
                        type="text"
                        name="pne"
                        required
                        fullWidth
                        id="pne"
                        label="PNE"
                        value={usuario?.pne}
                        onChange={(event) => {
                          setUsuario({ ...usuario, pne: event.target.value });
                        }}
                      />
                    </Grid>

                    <Grid item xs={13} sm={6}>
                      <TextField
                        type="date"
                        name="dataAdmissao"
                        required

                        fullWidth
                        id="dataAdmissao"
                        label="Data de Admissão"
                        value={usuario?.dataAdmissao}
                        onChange={(event) => {
                          setUsuario({
                            ...usuario,
                            dataAdmissao: event.target.value,
                          });
                        }}
                      />
                    </Grid>

                    <Grid item xs={13} sm={6}>
                      <TextField
                        type="date"
                        name="dataDemisao"
                        fullWidth
                        id="dataDemisao"
                        label="Data de Demissão"
                        value={usuario?.dataDemissao}

                        onChange={(event) => {
                          setUsuario({
                            ...usuario,
                            dataDemissao: event.target.value,
                          });
                        }}
                      />
                    </Grid>

                    <Grid item xs={13} sm={6}>
                      <TextField
                        type="text"
                        fullWidth
                        id="valorRecisao"
                        label="Valor da Recisão"
                        name="valorRecisao"
                        value={usuario?.valorRecissao}
                        onChange={(event) => {
                          setUsuario({
                            ...usuario,
                            valorRecissao: +event.target.value,
                          });
                        }}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        type="text"
                        name="motivoDemissao"
                        fullWidth
                        id="motivoDemissao"
                        label="Motivo da Demissão"
                        value={usuario?.motivoDemissao}
                        onChange={(event) => {
                          setUsuario({
                            ...usuario,
                            motivoDemissao: event.target.value,
                          });
                        }}
                      />
                    </Grid>

                    <Grid item xs={13} sm={6}>
                      <TextField
                        name="cep"
                        fullWidth
                        id="cep"
                        label="CEP"
                        type="text"
                        // {...register("cep")}
                        // onBlur={checkCEP}
                        value={usuario?.cep}
                        onChange={(event) => {
                          setUsuario({ ...usuario, cep: event.target.value });
                        }}
                      />
                    </Grid>

                    <Grid item xs={13} sm={6}>
                      <TextField
                        name="logadouro"
                        fullWidth
                        id="logadouro"
                        label="Logadouro"
                        type="text"
                        // {...register("cep")}
                        // onBlur={checkCEP}

                        // {...register("address")}
                        value={usuario?.logradouro}
                        onChange={(event) => {
                          setUsuario({
                            ...usuario,
                            logradouro: event.target.value,
                          });
                        }}
                      />
                    </Grid>

                    <Grid item xs={13} sm={6}>
                      <TextField
                        name="numero"
                        fullWidth
                        id="numero"
                        label="Número"
                        type="text"
                        // {...register("cep")}
                        // onBlur={checkCEP}

                        //  {...register("addressNumber")}
                        value={usuario?.numero}
                        onChange={(event) => {
                          setUsuario({ ...usuario, numero: event.target.value });
                        }}
                      />
                    </Grid>

                    <Grid item xs={13} sm={6}>
                      <TextField
                        name="bairro"
                        fullWidth
                        id="bairro"
                        label="Bairro"
                        type="text"
                        //  {...register("cep")}
                        // onBlur={checkCEP}

                        // {...register("neighborhood")}
                        value={usuario?.bairro}
                        onChange={(event) => {
                          setUsuario({ ...usuario, bairro: event.target.value });
                        }}
                      />
                    </Grid>

                    <Grid item xs={13} sm={6}>
                      <TextField
                        name="cidade"
                        fullWidth
                        id="cidade"
                        label="cidade"
                        type="text"
                        // {...register("cep")}
                        // onBlur={checkCEP}

                        // {...register("city")}
                        value={usuario?.cidade}
                        onChange={(event) => {
                          setUsuario({ ...usuario, cidade: event.target.value });
                        }}
                      />
                    </Grid>

                    <Grid item xs={13} sm={6}>
                      <TextField
                        name="estado"
                        fullWidth
                        id="estado"
                        label="Estado"
                        type="text"
                        //  {...register("cep")}
                        // onBlur={checkCEP}

                        //  {...register("uf")}
                        value={usuario?.estado}
                        onChange={(event) => {
                          setUsuario({ ...usuario, estado: event.target.value });
                        }}
                      />
                    </Grid>


                    <Grid item xs={13} sm={6}>
                      <TextField
                        type="text"
                        name="telefone"
                        fullWidth
                        required
                        request
                        id="telefone"
                        label="Telefone"
                        value={usuario?.telefone}
                        onChange={(event) => {
                          setUsuario({
                            ...usuario,
                            telefone: event.target.value,
                          });
                        }}
                      />
                    </Grid>

                    <Grid item xs={13} sm={6}>
                      <TextField
                        type="text"
                        name="celular"

                        fullWidth
                        id="celular"
                        label="Celular"
                        value={usuario?.celular}
                        onChange={(event) => {
                          setUsuario({ ...usuario, celular: event.target.value });
                        }}
                      />
                    </Grid>

                    <Grid item xs={13} sm={6}>
                      <TextField
                        type="text"
                        name="telEmerg"
                        fullWidth
                        id="telEmerg"
                        label="Telefone de Emergência"
                        value={usuario?.telefoneEmergencia}
                        onChange={(event) => {
                          setUsuario({
                            ...usuario,
                            telefoneEmergencia: event.target.value,
                          });
                        }}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        request
                        type="text"
                        required
                        name="emailPessoal"
                        fullWidth
                        id="emailPessoal"
                        label="Email Pessoal"
                        value={usuario?.emailPessoal}
                        onChange={(event) => {
                          setUsuario({
                            ...usuario,
                            emailPessoal: event.target.value,
                          });
                        }}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        type="text"
                        name="emailEmpresarial"
                        fullWidth
                        id="emailEmpresarial"
                        label="Email Empresarial"
                        value={usuario?.emailEmpresarial}
                        onChange={(event) => {
                          setUsuario({
                            ...usuario,
                            emailEmpresarial: event.target.value,
                          });
                        }}
                      />
                    </Grid>

                    <Grid item xs={13} sm={6}>
                      <TextField
                        type="text"
                        required
                        fullWidth
                        id="cargo"
                        label="Cargo"
                        name="cargo"
                        value={usuario?.cargo}
                        onChange={(event) => {
                          setUsuario({ ...usuario, cargo: event.target.value });
                        }}
                      />
                    </Grid>

                    <Grid item xs={13} sm={6}>
                      <TextField
                        required
                        fullWidth
                        type="text"
                        id="salario"
                        label="Salário"
                        name="salario"
                        value={usuario?.salario}
                        onChange={(event) => {
                          setUsuario({ ...usuario, salario: +event.target.value });
                        }}
                      />
                    </Grid>

                    <Grid item xs={13} sm={6}>
                      <TextField
                        type="text"
                        name="turno"
                        fullWidth
                        id="turno"
                        label="Turno"
                        value={usuario?.turno}
                        onChange={(event) => {
                          setUsuario({ ...usuario, turno: event.target.value });
                        }}
                      />
                    </Grid>

                    <Grid item xs={13} sm={6}>
                      <TextField
                        type="text"
                        name="tipoContrato"
                        required
                        fullWidth
                        id="tipoContrato"
                        label="Tipo de Contrato"
                        value={usuario?.tipoContrato}
                        onChange={(event) => {
                          setUsuario({
                            ...usuario,
                            tipoContrato: event.target.value,
                          });
                        }}
                      />
                    </Grid>

                    <Grid item xs={13} sm={6}>
                      <TextField
                        type="date"
                        request
                        name="dataContrato"

                        fullWidth
                        id="dataContrato"
                        label="Data do Contrato"
                        value={usuario?.dataContrato}
                        onChange={(event) => {
                          setUsuario({
                            ...usuario,
                            dataContrato: event.target.value,
                          });
                        }}
                      />
                    </Grid>

                    <Grid item xs={13} sm={6}>
                      <TextField
                        type="text"
                        name="escolaridade"
                        required
                        fullWidth
                        id="escolaridade"
                        label="Escolaridade"
                        value={usuario?.escolaridade}
                        onChange={(event) => {
                          setUsuario({
                            ...usuario,
                            escolaridade: event.target.value,
                          });
                        }}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        type="text"
                        name="superiorDireto"
                        fullWidth
                        id="superiorDireto"
                        label="Superior Direto"
                        value={usuario?.superiorDireto}
                        onChange={(event) => {
                          setUsuario({
                            ...usuario,
                            superiorDireto: event.target.value,
                          });
                        }}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        type="text"
                        name="emailSuperiorDireto"
                        fullWidth
                        id="emailSuperiorDireto"
                        label="Email Superior Direto"
                        value={usuario?.emailSuperiorDireto}
                        onChange={(event) => {
                          setUsuario({
                            ...usuario,
                            emailSuperiorDireto: event.target.value,
                          });
                        }}
                      />
                    </Grid>

                    <Grid item xs={13} sm={6}>
                      <TextField
                        type="text"
                        name="grauHierarquico"
                        required
                        fullWidth
                        id="grauHierarquico"
                        label="Grau Hierárquico"
                        value={usuario?.grauHierarquico}
                        onChange={(event) => {
                          setUsuario({
                            ...usuario,
                            grauHierarquico: event.target.value,
                          });
                        }}
                      />
                    </Grid>

                    <Grid item xs={13} sm={6}>
                      <TextField
                        type="text"
                        name="duracaoContrato"
                        fullWidth
                        id="duracaoContrato"
                        label="Duração do Contrato"
                        value={usuario?.duracaoContrato}
                        onChange={(event) => {
                          setUsuario({
                            ...usuario,
                            duracaoContrato: event.target.value,
                          });
                        }}
                      />
                    </Grid>

                    <Grid item xs={13} sm={6}>
                      <TextField
                        type="text"
                        name="vencimentoContrato"
                        fullWidth
                        id="vencimentoContrato"
                        label="Vencimento do contrato"
                        value={usuario?.vencimentoContrato}
                        onChange={(event) => {
                          setUsuario({
                            ...usuario,
                            vencimentoContrato: event.target.value,
                          });
                        }}
                      />
                    </Grid>

                    <Grid item xs={13} sm={6}>
                      <TextField
                        request
                        required
                        type="text"
                        name="departamento"
                        fullWidth
                        id="departamento"
                        label="Departamento"
                        value={usuario?.departamento}
                        onChange={(event) => {
                          setUsuario({
                            ...usuario,
                            departamento: event.target.value,
                          });
                        }}
                      />
                    </Grid>


                    <Grid item xs={13} sm={6}>
                      <TextField
                        type="text"
                        name="cpf"
                        required
                        fullWidth
                        id="cpf"
                        label="CPF"
                        value={usuario?.cpf}
                        onChange={(event) => {
                          setUsuario({ ...usuario, cpf: event.target.value });
                        }}
                      />
                    </Grid>

                    <Grid item xs={13} sm={6}>
                      <TextField
                        type="text"
                        name="rg"
                        required
                        fullWidth
                        id="rg"
                        label="RG"
                        value={usuario?.rg}
                        onChange={(event) => {
                          setUsuario({ ...usuario, rg: event.target.value });
                        }}
                      />
                    </Grid>

                    <Grid item xs={13} sm={6}>
                      <TextField
                        type="text"
                        name="tituloEleitor"
                        fullWidth
                        id="tituloEleitor"
                        label="Título de Eleitor"
                        value={usuario?.tituloEleitor}
                        onChange={(event) => {
                          setUsuario({
                            ...usuario,
                            tituloEleitor: event.target.value,
                          });
                        }}
                      />
                    </Grid>

                    <Grid item xs={13} sm={6}>
                      <TextField
                        type="text"
                        name="zonaEleitoral"
                        fullWidth
                        id="zonaEleitoral"
                        label="Zona Eleitoral"
                        value={usuario?.zonaEleitoral}
                        onChange={(event) => {
                          setUsuario({
                            ...usuario,
                            zonaEleitoral: event.target.value,
                          });
                        }}
                      />
                    </Grid>

                    <Grid item xs={13} sm={6}>
                      <TextField
                        type="text"
                        name="secaoEleitoral"
                        fullWidth
                        id="secaoEleitoral"
                        label="Seção Eleitoral"
                        value={usuario?.tituloEleitor}
                        onChange={(event) => {
                          setUsuario({
                            ...usuario,
                            secaoEleitoral: event.target.value,
                          });
                        }}
                      />
                    </Grid>

                    <Grid item xs={13} sm={6}>
                      <TextField
                        type="text"
                        name="ctpsNum"
                        fullWidth
                        id="ctpsNum"
                        label="CTPS NUM"
                        value={usuario?.cptsNum}
                        onChange={(event) => {
                          setUsuario({ ...usuario, cptsNum: event.target.value });
                        }}
                      />
                    </Grid>

                    <Grid item xs={13} sm={6}>
                      <TextField
                        type="text"
                        name="ctpsSerie"
                        fullWidth
                        id="ctpsSerie"
                        label="CTPS Série"
                        value={usuario?.cptsSerie}
                        onChange={(event) => {
                          setUsuario({
                            ...usuario,
                            cptsSerie: event.target.value,
                          });
                        }}
                      />
                    </Grid>

                    <Grid item xs={13} sm={6}>
                      <TextField
                        type="text"
                        name="reservista"
                        fullWidth
                        id="reservista"
                        label="Reservista"
                        value={usuario?.reservista}
                        onChange={(event) => {
                          setUsuario({
                            ...usuario,
                            reservista: event.target.value,
                          });
                        }}
                      />
                    </Grid>

                    <Grid item xs={13} sm={6}>
                      <TextField
                        type="text"
                        name="cnh"
                        fullWidth
                        id="cnh"
                        label="CNH"
                        value={usuario?.cnh}
                        onChange={(event) => {
                          setUsuario({ ...usuario, cnh: event.target.value });
                        }}
                      />
                    </Grid>

                    <Grid item xs={13} sm={6}>
                      <TextField
                        type="text"
                        name="banco"
                        fullWidth
                        id="banco"
                        label="Banco"
                        value={usuario?.banco}
                        onChange={(event) => {
                          setUsuario({ ...usuario, banco: event.target.value });
                        }}
                      />
                    </Grid>

                    <Grid item xs={13} sm={6}>
                      <TextField
                        type="text"
                        name="agencia"
                        fullWidth
                        id="agencia"
                        label="Agência"
                        value={usuario?.agencia}
                        onChange={(event) => {
                          setUsuario({ ...usuario, agencia: event.target.value });
                        }}
                      />
                    </Grid>

                    <Grid item xs={13} sm={6}>
                      <TextField
                        type="text"
                        name="contaCorrente"
                        fullWidth
                        id="contaCorrente"
                        label="Conta Corrente"
                        value={usuario?.contaCorrente}
                        onChange={(event) => {
                          setUsuario({
                            ...usuario,
                            contaCorrente: event.target.value,
                          });
                        }}
                      />
                    </Grid>

                    <Grid item xs={13} sm={6}>
                      <TextField
                        type="text"
                        name="pis"
                        fullWidth
                        id="pis"
                        label="PIS"
                        value={usuario?.pis}
                        onChange={(event) => {
                          setUsuario({ ...usuario, pis: event.target.value });
                        }}
                      />
                    </Grid>

                    <Grid item xs={13} sm={6}>
                      <TextField
                        type="password"
                        name="password"
                        fullWidth
                        id="password"
                        label="Senha"
                        value={usuario?.password}
                        onChange={(event) => {
                          setUsuario({
                            ...usuario,
                            password: event.target.value,
                          });
                        }}
                      />
                    </Grid>



                    <button
                      fullWidth
                      variant="contained"
                      onClick={Atualizar}
                      sx={{ mt: 3, mb: 4 }}
                      className="user-login__submit-button-entrar"
                    >
                      ATUALIZAR
                    </button>
                    <Grid container justifyContent="flex-end" marginBottom="3%">
                      <Grid item>
                        <Link href="/" variant="body2">
                          <h4>Funcionário já possui cadastro? Entrar</h4>
                        </Link>
                      </Grid>
                    </Grid>

                    <Grid container justifyContent="flex-end" marginBottom="3%">
                      <Grid item>
                        <Link className="btnVoltar" href="/acessarCadastro" variant="body2">
                          <h4>Voltar</h4>
                        </Link>
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Container>
          </div>
        </div>
      </div>
    </>

  );
}

export default AtualizarCadastro;

