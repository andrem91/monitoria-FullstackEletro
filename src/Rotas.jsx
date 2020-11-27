import { Form } from 'react-bootstrap'
import { Switch, Route } from 'react-router-dom'

import PageProdutos from './Pages/Produtos';
import PagePedidos from './Pages/Pedidos'

function Rotas() {
    return(
        <Switch>
            <Route exact path="/" component={ PageProdutos } />
            <Route exact path="/Pedidos" component={ PagePedidos } />
        </Switch>
    )
}

export default Rotas;
