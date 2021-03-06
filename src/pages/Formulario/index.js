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

function Formulario() {
  const [usuario, setUsuario] = useState({
    nome: '',
    dataAdmissao: '',
    cargo: '',
    gestor: '',
    dataRealizacao: '',
    cliente: '',

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

    comentariosAvaliador: '',

    perfis: [{ id: 4 }]
  })

  console.log(usuario)

  const handleSubmitOnRegister = async () => {
    console.log('Usuario', usuario)
    try {
      const response = await api.post('/api/v1/usuario', usuario)
      console.log('RETORNO API:', response.data)
      alert('Usuario Cadastrado com sucesso!')
    } catch (err) {
      console.log('erro', err.response)
    }
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
                      label="Data de Admiss??o"
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
                      label="Data da Realiza????o:"
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
                    <h3>COMPET??NCIAS:</h3>
                  </div>

                  <div style={{ margin: '20px' }}>
                    <h4>
                      1 - COMPROMETIMENTO: O colaborador apresenta
                      compormetimento ??tico em rela????o aos valores da Empresa e
                      seu envolvimento nas demandas estabelecidas:
                    </h4>
                  </div>

                  <Grid item xs={13} sm={4}>
                    <TextField
                      type="text"
                      name="nivelDesempenho"
                      required
                      fullWidth
                      id="nivelDesempenho"
                      label="1:Atende, 2:Atende parcialmente, 3:N??o atende, 4:Supera"
                      value={usuario?.anivelDesempenho}
                      onChange={event => {
                        setUsuario({
                          ...usuario,
                          anivelDesempenho: event.target.value
                        })
                      }}
                    />
                  </Grid>

                  <Grid item xs={13} sm={4}>
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

                  <Grid item xs={13} sm={4}>
                    <TextField
                      id="outlined-multiline-static"
                      label="Multiline"
                      multiline
                      rows={2}
                      type="text"
                      name="comentarios"
                      fullWidth
                      id="comentarios"
                      label="Coment??rios:"
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
                      2 - COMUNICA????O: O colaborador apresenta clareza e
                      objetividade na emiss??o e execu????o de mensagens (oral ou
                      escrita), propiciando um perfeito entendimento das
                      informa????es:
                    </h4>
                  </div>

                  <Grid item xs={13} sm={4}>
                    <TextField
                      type="text"
                      name="nivelDesempenho"
                      required
                      fullWidth
                      id="nivelDesempenho"
                      label="1:Atende, 2:Atende parcialmente, 3:N??o atende, 4:Supera"
                      value={usuario?.bnivelDesempenho}
                      onChange={event => {
                        setUsuario({
                          ...usuario,
                          bnivelDesempenho: event.target.value
                        })
                      }}
                    />
                  </Grid>

                  <Grid item xs={13} sm={4}>
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

                  <Grid item xs={13} sm={4}>
                    <TextField
                      id="outlined-multiline-static"
                      label="Multiline"
                      multiline
                      rows={2}
                      type="text"
                      name="comentarios"
                      fullWidth
                      id="comentarios"
                      label="Coment??rios:"
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
                      identifica problemas, apresenta solu????es e realiza
                      alinhamentos com a lideran??a:
                    </h4>
                  </div>

                  <Grid item xs={13} sm={4}>
                    <TextField
                      type="text"
                      name="nivelDesempenho"
                      required
                      fullWidth
                      id="nivelDesempenho"
                      label="1:Atende, 2:Atende parcialmente, 3:N??o atende, 4:Supera"
                      value={usuario?.cnivelDesempenho}
                      onChange={event => {
                        setUsuario({
                          ...usuario,
                          cnivelDesempenho: event.target.value
                        })
                      }}
                    />
                  </Grid>

                  <Grid item xs={13} sm={4}>
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

                  <Grid item xs={13} sm={4}>
                    <TextField
                      id="outlined-multiline-static"
                      label="Multiline"
                      multiline
                      rows={2}
                      type="text"
                      name="comentarios"
                      fullWidth
                      id="comentarios"
                      label="Coment??rios:"
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
                      equipe, com o cliente e com o Gestor, refor??ando um bom
                      clima de trabalho em um formato colaborativo:
                    </h4>
                  </div>

                  <Grid item xs={13} sm={4}>
                    <TextField
                      type="text"
                      name="nivelDesempenho"
                      required
                      fullWidth
                      id="nivelDesempenho"
                      label="1:Atende, 2:Atende parcialmente, 3:N??o atende, 4:Supera"
                      value={usuario?.dnivelDesempenho}
                      onChange={event => {
                        setUsuario({
                          ...usuario,
                          dnivelDesempenho: event.target.value
                        })
                      }}
                    />
                  </Grid>

                  <Grid item xs={13} sm={4}>
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

                  <Grid item xs={13} sm={4}>
                    <TextField
                      id="outlined-multiline-static"
                      label="Multiline"
                      multiline
                      rows={2}
                      type="text"
                      name="comentarios"
                      fullWidth
                      id="comentarios"
                      label="Coment??rios:"
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
                      5 - FLEXIBILIDADE: O colaborador ?? flex??vel e dispon??vel
                      para mudan??as e diferentes vis??es no grupo de trabalho
                      atual :
                    </h4>
                  </div>

                  <Grid item xs={13} sm={4}>
                    <TextField
                      type="text"
                      name="nivelDesempenho"
                      required
                      fullWidth
                      id="nivelDesempenho"
                      label="1:Atende, 2:Atende parcialmente, 3:N??o atende, 4:Supera"
                      value={usuario?.enivelDesempenho}
                      onChange={event => {
                        setUsuario({
                          ...usuario,
                          enivelDesempenho: event.target.value
                        })
                      }}
                    />
                  </Grid>

                  <Grid item xs={13} sm={4}>
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

                  <Grid item xs={13} sm={4}>
                    <TextField
                      id="outlined-multiline-static"
                      label="Multiline"
                      multiline
                      rows={2}
                      type="text"
                      name="comentarios"
                      fullWidth
                      id="comentarios"
                      label="Coment??rios:"
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
                      6 - ORGANIZA????O: O colaborador ?? organizado e disciplinado
                      em suas tarefas e m??todos de trabalho no seu dia a dia:
                    </h4>
                  </div>

                  <Grid item xs={13} sm={4}>
                    <TextField
                      type="text"
                      name="nivelDesempenho"
                      required
                      fullWidth
                      id="nivelDesempenho"
                      label="1:Atende, 2:Atende parcialmente, 3:N??o atende, 4:Supera"
                      value={usuario?.fnivelDesempenho}
                      onChange={event => {
                        setUsuario({
                          ...usuario,
                          fnivelDesempenho: event.target.value
                        })
                      }}
                    />
                  </Grid>

                  <Grid item xs={13} sm={4}>
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

                  <Grid item xs={13} sm={4}>
                    <TextField
                      id="outlined-multiline-static"
                      label="Multiline"
                      multiline
                      rows={2}
                      type="text"
                      name="comentarios"
                      fullWidth
                      id="comentarios"
                      label="Coment??rios:"
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
                      7 - INTELIG??NCIA EMOCIONAL: O colaborador demonstra
                      controle em rela????o as adversidades ( frustra????es,
                      press??es, problemas pessoais... ):
                    </h4>
                  </div>

                  <Grid item xs={13} sm={4}>
                    <TextField
                      type="text"
                      name="nivelDesempenho"
                      required
                      fullWidth
                      id="nivelDesempenho"
                      label="1:Atende, 2:Atende parcialmente, 3:N??o atende, 4:Supera"
                      value={usuario?.gnivelDesempenho}
                      onChange={event => {
                        setUsuario({
                          ...usuario,
                          gnivelDesempenho: event.target.value
                        })
                      }}
                    />
                  </Grid>

                  <Grid item xs={13} sm={4}>
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

                  <Grid item xs={13} sm={4}>
                    <TextField
                      id="outlined-multiline-static"
                      label="Multiline"
                      multiline
                      rows={2}
                      type="text"
                      name="comentarios"
                      fullWidth
                      id="comentarios"
                      label="Coment??rios:"
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
                      8 - CONHECIMENTOS ESPEC??FICOS/T??CNICO: O colaborador
                      possui conhecimento t??cnico espec??fico para o cargo e para
                      a fun????o que exerce no momento, bem como as qualifica????es
                      apresentadas pelo profissional:
                    </h4>
                  </div>

                  <Grid item xs={13} sm={4}>
                    <TextField
                      type="text"
                      name="nivelDesempenho"
                      required
                      fullWidth
                      id="nivelDesempenho"
                      label="1:Atende, 2:Atende parcialmente, 3:N??o atende, 4:Supera"
                      value={usuario?.hnivelDesempenho}
                      onChange={event => {
                        setUsuario({
                          ...usuario,
                          hnivelDesempenho: event.target.value
                        })
                      }}
                    />
                  </Grid>

                  <Grid item xs={13} sm={4}>
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

                  <Grid item xs={13} sm={4}>
                    <TextField
                      id="outlined-multiline-static"
                      label="Multiline"
                      multiline
                      rows={2}
                      type="text"
                      name="comentarios"
                      fullWidth
                      id="comentarios"
                      label="Coment??rios:"
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
                    <h3>COMENT??RIOS DO AVALIADOR:</h3>
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
                      label="Coment??rios do Avaliador"
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
                    GERAR RELAT??RIO
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
