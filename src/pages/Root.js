import Home from './Home/index'
import Cadastro from './Cadastro'
import RecuperarSenha from './RecuperarSenha'
import NovaSenha from './NovaSenha'
import HistoricoFuncionarios from '../pages/HistoricoFuncionarios'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AcessarCadastro from './AcessarCadastro'
import Login from '../pages/Login'
import CriarPlano from './CriarPlano'
import HistoricoPlanos from './HistoricoPlanos'
import Plano from './Plano'
import ListaFuncionario from './ListaFuncionario'
import AtualizarCadastro from './AtualizarCadastro'
import Formulario from './Formulario'

import CriarFormulario from './CriarFormulario'
import HabilitarFormulario from './HabilitarFormulario'
import Aprovacao from './Aprovacao'
import Validacao from './Validacao'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/validacao" exact component={Validacao} />
        <Route path="/aprovacao" exact component={Aprovacao} />
        <Route path="/home" exact component={Home} />
        <Route path="/cadastro" exact component={Cadastro} />
        <Route path="/recuperarSenha" exact component={RecuperarSenha} />
        <Route path="/novaSenha" exact component={NovaSenha} />
        <Route path="/historicodePlanos" exact component={HistoricoPlanos} />
        <Route path="/criarPlano" exact component={CriarPlano} />
        <Route path="/plano" exact component={Plano} />
        <Route path="/listaFuncionario" exact component={ListaFuncionario} />
        <Route path="/atualizarCadastro" exact component={AtualizarCadastro} />
        <Route
          path="/listarFuncionarios"
          exact
          component={HistoricoFuncionarios}
        />
        <Route path="/acessarCadastro" exact component={AcessarCadastro} />
        <Route path="/formulario" exact component={Formulario} />
        <Route path="/criarFormulario" exact component={CriarFormulario} />
        <Route
          path="/HabilitarFormulario"
          exact
          component={HabilitarFormulario}
        />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
