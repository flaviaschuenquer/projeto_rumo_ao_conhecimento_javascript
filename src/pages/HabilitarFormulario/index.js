import React, { useState } from 'react'
import './habilitarformulario.scss'
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

function HabilitarFormulario() {
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
              <Box component="form" noValidate sx={{ mt: 3 }}>
                <div style={{ margin: '20px' }}>
                  <h2>Habilitar formulário de Avaliação:</h2>
                  <h3>Matrícula do colaborador:</h3>
                </div>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      type="text"
                      autoComplete="given-name"
                      name="login"
                      request="true"
                      className="maskDate"
                      required
                      fullWidth
                      id="login"
                      label="Matrícula:"
                      autoFocus
                      value={usuario?.login}
                      onChange={event => {
                        setUsuario({ ...usuario, login: event.target.value })
                      }}
                    />
                  </Grid>

                  <Grid item xs={13} sm={6}>
                    <TextField
                      type="text"
                      required
                      fullWidth
                      id="nome"
                      label="Nome Completo:"
                      name="name"
                      value={usuario?.nome}
                      onChange={event => {
                        setUsuario({ ...usuario, nome: event.target.value })
                      }}
                    />
                  </Grid>

                  <Grid item xs={13} sm={1}>
                    <TextField
                      id="outlined-multiline-static"
                      label="Multiline"
                      multiline
                      rows={3}
                      type="date"
                      name="data"
                      className="maskDate"
                      fullWidth
                      id="data"
                      label="data:"
                      value={usuario?.data}
                      onChange={event => {
                        setUsuario({
                          ...usuario,
                          data: event.target.value
                        })
                      }}
                    />
                  </Grid>

                  <Grid item xs={13} sm={5}>
                    <TextField
                      id="outlined-multiline-static"
                      label="Multiline"
                      multiline
                      rows={3}
                      type="text"
                      name="avaliacao"
                      fullWidth
                      id="avaliacao"
                      label="Avaliação:"
                      value={usuario?.avaliacao}
                      onChange={event => {
                        setUsuario({
                          ...usuario,
                          avaliacao: event.target.value
                        })
                      }}
                    />
                  </Grid>

                  <Grid item xs={13} sm={5}>
                    <TextField
                      id="outlined-multiline-static"
                      label="Multiline"
                      multiline
                      rows={3}
                      type="text"
                      name="coach"
                      fullWidth
                      id="coah"
                      label="Coach:"
                      value={usuario?.coach}
                      onChange={event => {
                        setUsuario({
                          ...usuario,
                          coach: event.target.value
                        })
                      }}
                    />
                  </Grid>
                  <Grid item xs={13} sm={1}>
                    <TextField
                      id="outlined-multiline-static"
                      label="Multiline"
                      multiline
                      rows={3}
                      type="text"
                      name="pdi"
                      fullWidth
                      id="pdi"
                      label="PDI:"
                      value={usuario?.pdi}
                      onChange={event => {
                        setUsuario({
                          ...usuario,
                          pdi: event.target.value
                        })
                      }}
                    />
                  </Grid>

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
                    HABILITAR
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

export default HabilitarFormulario
