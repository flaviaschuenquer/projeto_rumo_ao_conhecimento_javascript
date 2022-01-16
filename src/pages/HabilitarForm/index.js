import { Link } from 'react-router-dom'
import { Button } from '../../components/PrimaryButton/styles'
import React, { useState } from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications'
import api from '../../Services/api'

import Navbar from '../../components/Navbar/index'
import Dark from '../../components/Darkmode/Dark'

import './styles.scss'
import { ContentCopy } from '@mui/icons-material'

function HabilitarForm() {
  const [form, setForm] = useState({
    Matricula: '',
    Data: '',
    Avaliacao: '',
    Coach: '',
    PDI: ''
  })
  console.log(form)

  async function handleSubmitOnRegister() {
    console.log('Form', form)
    await api.post('api/v1/form/salvar', form)
    alert('Formulário Cadastrado com sucesso!')
  }
  return (
    <>
      <Navbar />
      <Dark />

      <div className="home-container">
        <div className="base-card home-card">
          <form className="form">
            <div className="title">
              <h1 style={{ margin: '20px' }}>
                Habilitar formulário de Avaliação:
              </h1>
              <spam>
                <strong style={{ margin: '20px' }}>
                  Matricula do Colaborador:
                </strong>
              </spam>
              <input
                placeholder="Matricula"
                value={form?.Matricula}
                onChange={event => {
                  setForm({ ...form, Matricula: event.target.value })
                }}
              />
            </div>

            <div>
              <table>
                <tr>
                  <th>Data</th>
                  <th>Alvo/Avaliação</th>
                  <th>Coach</th>
                  <th>PDI</th>
                </tr>

                <tr>
                  <td>
                    <textarea
                      className="inp"
                      value={form?.Data}
                      onChange={event => {
                        setForm({ ...form, Data: event.target.value })
                      }}
                    />
                  </td>

                  <td>
                    <textarea
                      className="inp"
                      value={form?.Meta}
                      onChange={event => {
                        setForm({ ...form, Avaliacao: event.target.value })
                      }}
                    />
                  </td>

                  <td>
                    <textarea
                      className="inp"
                      value={form?.AlvoDisponivel}
                      onChange={event => {
                        setForm({ ...form, Coach: event.target.value })
                      }}
                    />
                  </td>

                  <td>
                    <textarea
                      className="inp"
                      value={form?.Meta}
                      onChange={event => {
                        setForm({ ...form, PDI: event.target.value })
                      }}
                    />
                  </td>
                </tr>
              </table>
            </div>

            <button onClick={this.handleClick}>
              <h1>+</h1>
            </button>

            <Link to={'/formulario'}>
              <Button
                className="btnHome"
                onClick={handleSubmitOnRegister}
                style={{
                  marginTop: '5%'
                }}
              >
                Habilitar Formulário
              </Button>
            </Link>
          </form>
        </div>
      </div>
    </>
  )
}

export default HabilitarForm
