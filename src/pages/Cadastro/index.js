import React, { useState } from "react";
import "./cadastro.scss";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Navbar from "../../components/Navbar/index"
import Dark from "../../components/Darkmode/Dark";
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import api from "../../Services/api";

function Cadastro() {
  // const { register, handleSubmit, setValue, setFocus } = useForm();

  // const onSubmit = (e) => {
  //   console.log(e);
  // }

  // const checkCEP = (e) => {
  //   const cep = e.target.value.replace(/\D/g, '');
  //   console.log(cep);
  //   fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
  //     console.log(data);
  //     // register({ name: 'address', value: data.logradouro });
  //     setValue('address', data.logradouro);
  //     setValue('neighborhood', data.bairro);
  //     setValue('city', data.localidade);
  //     setValue('uf', data.uf);
  //     setFocus('addressNumber');
  //   });
  // }

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
    valorRecisao: "",
    cep: "",
    numero: "",
    complemento: "",
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
    cargoInicial: "",
    evolucao: "",
    dataInicial: "",
    dataFinal: "",
    dataAvaliacao: ""
  });

  console.log(usuario);

  async function handleSubmitOnRegister() {
    console.log("Usuario", usuario);
    await api.post("api/v1/usuario/salvar", usuario);
    alert("Usuario Cadastrado com sucesso!");


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
                <Typography component="h1" variant="h5">
                  Formulário de Cadastro
                </Typography>
                <Box component="form" noValidate sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                      color="secondary"
                        type="text"
                        autoComplete="given-name"
                        name="nome"
                        request="true"
                        required
                        color="warning"
                        fullWidth
                        id="nome"
                        label="Nome Completo"
                        autoFocus
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
                        label="Matrícula"
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
                        className="maskDate"
                        required
                        fullWidth
                        id="dataNasc"
                        label="Data de Nascimento"
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
                        className="maskDate"
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
                        className="maskDate"
                        name="dataDemisao"
                        required
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
                        value={usuario?.valorRecisao}
                        onChange={(event) => {
                          setUsuario({
                            ...usuario,
                            valorRecisao: +event.target.value,
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
                        id="complemento"
                        label="Logradouro"
                        type="text"
                        // {...register("cep")}
                        // onBlur={checkCEP}

                        // {...register("address")}
                        value={usuario?.complemento}
                        onChange={(event) => {
                          setUsuario({
                            ...usuario,
                            complemento: event.target.value,
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
                        label="Cidade"
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

                    <Grid item xs={12}>
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
                        className="maskDate"
                        required
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
                        type="date"
                        className="maskDate"
                        required
                        name="vencimentoContrato"
                        fullWidth
                        id="vencimentoContrato"
                        label="Vencimento do Contrato"
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
                        value={usuario?.secaoEleitoral}
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

                    <Grid item xs={12}>
                      <TextField
                        type="text"
                        name="cargoInicial"
                        fullWidth
                        id="cargoInicial"
                        label="Cargo Inicial"
                        value={usuario?.cargoInicial}
                        onChange={(event) => {
                          setUsuario({
                            ...usuario,
                            cargoInicial: event.target.value,
                          });
                        }}
                      />
                    </Grid>

                    <Grid item xs={13} sm={6}>
                      <TextField
                        type="text"
                        name="evolucao"
                        fullWidth
                        id="evolucao"
                        label="Evolução"
                        value={usuario?.evolucao}
                        onChange={(event) => {
                          setUsuario({
                            ...usuario,
                            evolucao: event.target.value,
                          });
                        }}
                      />
                    </Grid>

                    <Grid item xs={13} sm={6}>
                      <TextField
                        type="date"
                        className="maskDate"
                        required
                        name="dataInicial"
                        fullWidth
                        id="dataInicial"
                        label="Data Inicial"
                        value={usuario?.dataInicial}
                        onChange={(event) => {
                          setUsuario({
                            ...usuario,
                            dataInicial: event.target.value,
                          });
                        }}
                      />
                    </Grid>

                    <Grid item xs={13} sm={6}>
                      <TextField
                        type="date"
                        className="maskDate"
                        required
                        name="dataFinal"
                        fullWidth
                        id="dataFinal"
                        label="Data Final"
                        value={usuario?.dataFinal}
                        onChange={(event) => {
                          setUsuario({
                            ...usuario,
                            dataFinal: event.target.value,
                          });
                        }}
                      />
                    </Grid>

                    <Grid item xs={13} sm={6}>
                      <TextField
                        type="date"
                        className="maskDate"
                        required
                        name="dataAvaliacao"
                        fullWidth
                        id="dataAvaliacao"
                        label="Data Avaliação"
                        value={usuario?.dataAvaliacao}
                        onChange={(event) => {
                          setUsuario({
                            ...usuario,
                            dataAvaliacao: event.target.value,
                          });
                        }}
                      />
                    </Grid>



                    <button
                      fullWidth
                      variant="contained"
                      onClick={() => handleSubmitOnRegister()}
                      sx={{ mt: 3, mb: 4 }}
                      className="user-login__submit-button-entrar"
                    >
                      CADASTRAR
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
                        <Link 
                        className="btnVoltar" 
                        href="/acessarCadastro" variant="body2">
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

export default Cadastro;

