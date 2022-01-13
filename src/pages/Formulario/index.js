import React, { useState } from 'react'
import './formulario.scss'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Navbar from '../../components/Navbar/index'

import api from '../../Services/api'
import { green } from '@mui/material/colors'

function Formulario() {
  const [usuario, setUsuario] = useState({
    nome: '',
    dataAdmissao: '',
    cargo: '',
    gestor: '',
    dataRealizacao: '',
    cliente: '',

    anivelDesempenho: '',
    aexemplos: '',
    acomentarios: '',
    anivelDesempenho: '',

    bnivelDesempenho: '',
    bexemplos: '',
    bcomentarios: '',

    cnivelDesempenho: '',
    cexemplos: '',
    ccomentarios: '',

    dnivelDesempenho: '',
    dexemplos: '',
    dcomentarios: '',

    enivelDesempenho: '',
    eexemplos: '',
    ecomentarios: '',

    fnivelDesempenho: '',
    fexemplos: '',
    fcomentarios: '',

    gnivelDesempenho: '',
    gexemplos: '',
    gcomentarios: '',

    hnivelDesempenho: '',
    hexemplos: '',
    hcomentarios: '',

    comentariosAvaliador: ''
  })

  console.log(usuario)

  async function handleSubmitOnRegister() {
    console.log('Usuario', usuario)
    await api.post('api/v1/usuario/salvar', usuario)
    alert('Usuario Cadastrado com sucesso!')
  }

  return (
    <div className="bg-formulario">
      <Navbar />
      <div className="home-container">
        <div className="base-card home-card">
          <Container component="main">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 5,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <Typography component="h1" variant="h5">
                Dados do Colaborador
              </Typography>
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
                      label="Colaborador:"
                      autoFocus
                      value={usuario?.nome}
                      onChange={event => {
                        setUsuario({ ...usuario, nome: event.target.value })
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
                      id="dataAdmissao:"
                      label="Data de Admissão"
                      value={usuario?.dataAdmissao}
                      onChange={event => {
                        setUsuario({
                          ...usuario,
                          dataAdmissao: event.target.value
                        })
                      }}
                    />
                  </Grid>

                  <Grid item xs={13} sm={6}>
                    <TextField
                      type="text"
                      required
                      fullWidth
                      id="cargo"
                      label="Cargo Atual:"
                      name="cargo"
                      value={usuario?.cargo}
                      onChange={event => {
                        setUsuario({ ...usuario, cargo: event.target.value })
                      }}
                    />
                  </Grid>

                  <Grid item xs={13} sm={6}>
                    <TextField
                      required
                      type="text"
                      name="gestor"
                      fullWidth
                      id="gestor"
                      label="Gestor:"
                      value={usuario?.gestor}
                      onChange={event => {
                        setUsuario({
                          ...usuario,
                          gestor: event.target.value
                        })
                      }}
                    />
                  </Grid>

                  <Grid item xs={13} sm={6}>
                    <TextField
                      type="date"
                      className="maskDate"
                      name="dataRealizacao"
                      required
                      fullWidth
                      id="dataRealizacao"
                      label="Data da Realização:"
                      value={usuario?.dataRealizacao}
                      onChange={event => {
                        setUsuario({
                          ...usuario,
                          dataRealizacao: event.target.value
                        })
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      required
                      type="text"
                      name="cliente"
                      fullWidth
                      id="cliente"
                      label="Cliente:"
                      value={usuario?.cliente}
                      onChange={event => {
                        setUsuario({
                          ...usuario,
                          cliente: event.target.value
                        })
                      }}
                    />
                  </Grid>

                  <div style={{ margin: '20px' }}>
                    <h3>COMPETÊNCIAS:</h3>
                  </div>

                  <div style={{ margin: '20px' }}>
                    <h4>
                      1 - COMPROMETIMENTO: O colaborador apresenta
                      compormetimento ético em relação aos valores da Empresa e
                      seu envolvimento nas demandas estabelecidas:
                    </h4>
                  </div>

                  <Grid item xs={13} sm={2}>
                    <TextField
                      type="text"
                      name="nivelDesempenho"
                      fullWidth
                      id="nivelDesempenho"
                      label="Nível de Desempenho:"
                      value={usuario?.anivelDesempenho}
                      onChange={event => {
                        setUsuario({
                          ...usuario,
                          anivelDesempenho: event.target.value
                        })
                      }}
                    />
                  </Grid>

                  <Grid item xs={13} sm={5}>
                    <TextField
                      id="outlined-multiline-static"
                      label="Multiline"
                      multiline
                      rows={2}
                      type="text"
                      name="exemplos"
                      fullWidth
                      id="exemplos"
                      label="Exemplos:"
                      value={usuario?.aexemplos}
                      onChange={event => {
                        setUsuario({
                          ...usuario,
                          aexemplos: event.target.value
                        })
                      }}
                    />
                  </Grid>

                  <Grid item xs={13} sm={5}>
                    <TextField
                      id="outlined-multiline-static"
                      label="Multiline"
                      multiline
                      rows={2}
                      type="text"
                      name="comentarios"
                      fullWidth
                      id="comentarios"
                      label="Comentários:"
                      value={usuario?.acomentarios}
                      onChange={event => {
                        setUsuario({
                          ...usuario,
                          acomentarios: event.target.value
                        })
                      }}
                    />
                  </Grid>

                  <div style={{ margin: '20px' }}>
                    <h4>
                      2 - COMUNICAÇÃO: O colaborador apresenta clareza e
                      objetividade na emissão e execução de mensagens (oral ou
                      escrita), propiciando um perfeito entendimento das
                      informações:
                    </h4>
                  </div>

                  <Grid item xs={13} sm={2}>
                    <TextField
                      type="text"
                      name="nivelDesempenho"
                      fullWidth
                      id="nivelDesempenho"
                      label="Nível de Desempenho:"
                      value={usuario?.bnivelDesempenho}
                      onChange={event => {
                        setUsuario({
                          ...usuario,
                          bnivelDesempenho: event.target.value
                        })
                      }}
                    />
                  </Grid>

                  <Grid item xs={13} sm={5}>
                    <TextField
                      id="outlined-multiline-static"
                      label="Multiline"
                      multiline
                      rows={2}
                      type="text"
                      name="exemplos"
                      fullWidth
                      id="exemplos"
                      label="Exemplos:"
                      value={usuario?.bexemplos}
                      onChange={event => {
                        setUsuario({
                          ...usuario,
                          bexemplos: event.target.value
                        })
                      }}
                    />
                  </Grid>

                  <Grid item xs={13} sm={5}>
                    <TextField
                      id="outlined-multiline-static"
                      label="Multiline"
                      multiline
                      rows={2}
                      type="text"
                      name="comentarios"
                      fullWidth
                      id="comentarios"
                      label="Comentários:"
                      value={usuario?.bcomentarios}
                      onChange={event => {
                        setUsuario({
                          ...usuario,
                          bcomentarios: event.target.value
                        })
                      }}
                    />
                  </Grid>

                  <div style={{ margin: '20px' }}>
                    <h4>
                      3 - PROATIVIDADE: O colaborador apresenta iniciativa,
                      identifica problemas, apresenta soluções e realiza
                      alinhamentos com a liderança:
                    </h4>
                  </div>

                  <Grid item xs={13} sm={2}>
                    <TextField
                      type="text"
                      name="nivelDesempenho"
                      fullWidth
                      id="nivelDesempenho"
                      label="Nível de Desempenho:"
                      value={usuario?.cnivelDesempenho}
                      onChange={event => {
                        setUsuario({
                          ...usuario,
                          cnivelDesempenho: event.target.value
                        })
                      }}
                    />
                  </Grid>

                  <Grid item xs={13} sm={5}>
                    <TextField
                      id="outlined-multiline-static"
                      label="Multiline"
                      multiline
                      rows={2}
                      type="text"
                      name="exemplos"
                      fullWidth
                      id="exemplos"
                      label="Exemplos:"
                      value={usuario?.cexemplos}
                      onChange={event => {
                        setUsuario({
                          ...usuario,
                          cexemplos: event.target.value
                        })
                      }}
                    />
                  </Grid>

                  <Grid item xs={13} sm={5}>
                    <TextField
                      id="outlined-multiline-static"
                      label="Multiline"
                      multiline
                      rows={2}
                      type="text"
                      name="comentarios"
                      fullWidth
                      id="comentarios"
                      label="Comentários:"
                      value={usuario?.ccomentarios}
                      onChange={event => {
                        setUsuario({
                          ...usuario,
                          ccomentarios: event.target.value
                        })
                      }}
                    />
                  </Grid>

                  <div style={{ margin: '20px' }}>
                    <h4>
                      4 - RELACIONAMENTO: O colaborador se relaciona bem com a
                      equipe, com o cliente e com o Gestor, reforçando um bom
                      clima de trabalho em um formato colaborativo:
                    </h4>
                  </div>

                  <Grid item xs={13} sm={2}>
                    <TextField
                      type="text"
                      name="nivelDesempenho"
                      fullWidth
                      id="nivelDesempenho"
                      label="Nível de Desempenho:"
                      value={usuario?.dnivelDesempenho}
                      onChange={event => {
                        setUsuario({
                          ...usuario,
                          dnivelDesempenho: event.target.value
                        })
                      }}
                    />
                  </Grid>

                  <Grid item xs={13} sm={5}>
                    <TextField
                      id="outlined-multiline-static"
                      label="Multiline"
                      multiline
                      rows={2}
                      type="text"
                      name="exemplos"
                      fullWidth
                      id="exemplos"
                      label="Exemplos:"
                      value={usuario?.exemplos}
                      onChange={event => {
                        setUsuario({
                          ...usuario,
                          dexemplos: event.target.value
                        })
                      }}
                    />
                  </Grid>

                  <Grid item xs={13} sm={5}>
                    <TextField
                      id="outlined-multiline-static"
                      label="Multiline"
                      multiline
                      rows={2}
                      type="text"
                      name="comentarios"
                      fullWidth
                      id="comentarios"
                      label="Comentários:"
                      value={usuario?.dcomentarios}
                      onChange={event => {
                        setUsuario({
                          ...usuario,
                          comentarios: event.target.value
                        })
                      }}
                    />
                  </Grid>

                  <div style={{ margin: '20px' }}>
                    <h4>
                      5 - FLEXIBILIDADE: O colaborador é flexível e disponível
                      para mudanças e diferentes visões no grupo de trabalho
                      atual :
                    </h4>
                  </div>

                  <Grid item xs={13} sm={2}>
                    <TextField
                      type="text"
                      name="nivelDesempenho"
                      fullWidth
                      id="nivelDesempenho"
                      label="Nível de Desempenho:"
                      value={usuario?.enivelDesempenho}
                      onChange={event => {
                        setUsuario({
                          ...usuario,
                          enivelDesempenho: event.target.value
                        })
                      }}
                    />
                  </Grid>

                  <Grid item xs={13} sm={5}>
                    <TextField
                      id="outlined-multiline-static"
                      label="Multiline"
                      multiline
                      rows={2}
                      type="text"
                      name="exemplos"
                      fullWidth
                      id="exemplos"
                      label="Exemplos:"
                      value={usuario?.eexemplos}
                      onChange={event => {
                        setUsuario({
                          ...usuario,
                          eexemplos: event.target.value
                        })
                      }}
                    />
                  </Grid>

                  <Grid item xs={13} sm={5}>
                    <TextField
                      id="outlined-multiline-static"
                      label="Multiline"
                      multiline
                      rows={2}
                      type="text"
                      name="comentarios"
                      fullWidth
                      id="comentarios"
                      label="Comentários:"
                      value={usuario?.ecomentarios}
                      onChange={event => {
                        setUsuario({
                          ...usuario,
                          ecomentarios: event.target.value
                        })
                      }}
                    />
                  </Grid>

                  <div style={{ margin: '20px' }}>
                    <h4>
                      6 - ORGANIZAÇÃO: O colaborador é organizado e disciplinado
                      em suas tarefas e métodos de trabalho no seu dia a dia:
                    </h4>
                  </div>

                  <Grid item xs={13} sm={2}>
                    <TextField
                      type="text"
                      name="nivelDesempenho"
                      fullWidth
                      id="nivelDesempenho"
                      label="Nível de Desempenho:"
                      value={usuario?.fnivelDesempenho}
                      onChange={event => {
                        setUsuario({
                          ...usuario,
                          fnivelDesempenho: event.target.value
                        })
                      }}
                    />
                  </Grid>

                  <Grid item xs={13} sm={5}>
                    <TextField
                      id="outlined-multiline-static"
                      label="Multiline"
                      multiline
                      rows={2}
                      type="text"
                      name="exemplos"
                      fullWidth
                      id="exemplos"
                      label="Exemplos:"
                      value={usuario?.fexemplos}
                      onChange={event => {
                        setUsuario({
                          ...usuario,
                          fexemplos: event.target.value
                        })
                      }}
                    />
                  </Grid>

                  <Grid item xs={13} sm={5}>
                    <TextField
                      id="outlined-multiline-static"
                      label="Multiline"
                      multiline
                      rows={2}
                      type="text"
                      name="comentarios"
                      fullWidth
                      id="comentarios"
                      label="Comentários:"
                      value={usuario?.fcomentarios}
                      onChange={event => {
                        setUsuario({
                          ...usuario,
                          fcomentarios: event.target.value
                        })
                      }}
                    />
                  </Grid>

                  <div style={{ margin: '20px' }}>
                    <h4>
                      {' '}
                      7 - INTELIGÊNCIA EMOCIONAL: O colaborador demonstra
                      controle em relação as adversidades ( frustrações,
                      pressões, problemas pessoais... ):
                    </h4>
                  </div>

                  <Grid item xs={13} sm={2}>
                    <TextField
                      type="text"
                      name="nivelDesempenho"
                      fullWidth
                      id="nivelDesempenho"
                      label="Nível de Desempenho:"
                      value={usuario?.gnivelDesempenho}
                      onChange={event => {
                        setUsuario({
                          ...usuario,
                          gnivelDesempenho: event.target.value
                        })
                      }}
                    />
                  </Grid>

                  <Grid item xs={13} sm={5}>
                    <TextField
                      id="outlined-multiline-static"
                      label="Multiline"
                      multiline
                      rows={2}
                      type="text"
                      name="exemplos"
                      fullWidth
                      id="exemplos"
                      label="Exemplos:"
                      value={usuario?.gexemplos}
                      onChange={event => {
                        setUsuario({
                          ...usuario,
                          gexemplos: event.target.value
                        })
                      }}
                    />
                  </Grid>

                  <Grid item xs={13} sm={5}>
                    <TextField
                      id="outlined-multiline-static"
                      label="Multiline"
                      multiline
                      rows={2}
                      type="text"
                      name="comentarios"
                      fullWidth
                      id="comentarios"
                      label="Comentários:"
                      value={usuario?.gcomentarios}
                      onChange={event => {
                        setUsuario({
                          ...usuario,
                          gcomentarios: event.target.value
                        })
                      }}
                    />
                  </Grid>

                  <div style={{ margin: '20px' }}>
                    <h4>
                      8 - CONHECIMENTOS ESPECÍFICOS/TÉCNICO: O colaborador
                      possui conhecimento técnico específico para o cargo e para
                      a função que exerce no momento, bem como as qualificações
                      apresentadas pelo profissional:
                    </h4>
                  </div>

                  <Grid item xs={13} sm={2}>
                    <TextField
                      type="text"
                      name="nivelDesempenho"
                      fullWidth
                      id="nivelDesempenho"
                      label="Nível de Desempenho:"
                      value={usuario?.hnivelDesempenho}
                      onChange={event => {
                        setUsuario({
                          ...usuario,
                          hnivelDesempenho: event.target.value
                        })
                      }}
                    />
                  </Grid>

                  <Grid item xs={13} sm={5}>
                    <TextField
                      id="outlined-multiline-static"
                      label="Multiline"
                      multiline
                      rows={2}
                      type="text"
                      name="exemplos"
                      fullWidth
                      id="exemplos"
                      label="Exemplos:"
                      value={usuario?.hexemplos}
                      onChange={event => {
                        setUsuario({
                          ...usuario,
                          hexemplos: event.target.value
                        })
                      }}
                    />
                  </Grid>

                  <Grid item xs={13} sm={5}>
                    <TextField
                      id="outlined-multiline-static"
                      label="Multiline"
                      multiline
                      rows={2}
                      type="text"
                      name="comentarios"
                      fullWidth
                      id="comentarios"
                      label="Comentários:"
                      value={usuario?.hcomentarios}
                      onChange={event => {
                        setUsuario({
                          ...usuario,
                          hcomentarios: event.target.value
                        })
                      }}
                    />
                  </Grid>

                  <div style={{ margin: '20px' }}>
                    <h3>COMENTÁRIOS DO AVALIADOR:</h3>
                  </div>

                  <Grid item xs={12}>
                    <TextField
                      id="outlined-multiline-static"
                      label="Multiline"
                      multiline
                      rows={4}
                      type="text"
                      name="comentariosAvaliador"
                      fullWidth
                      id="comentariosAvalidador"
                      label="Comentários do Avaliador"
                      value={usuario?.comentariosAvaliadaor}
                      onChange={event => {
                        setUsuario({
                          ...usuario,
                          comentariosAvaliador: event.target.value
                        })
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
                    GERAR RELATÓRIO
                  </button>
                  <Grid container justifyContent="flex-end" marginBottom="3%">
                    <Grid item></Grid>
                  </Grid>

                  <Grid container justifyContent="flex-end" marginBottom="3%">
                    <Grid item>
                      <Link href="/home" variant="body2">
                        <h4 style={{ color: 'black' }}>Voltar</h4>
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
  )
}

export default Formulario
