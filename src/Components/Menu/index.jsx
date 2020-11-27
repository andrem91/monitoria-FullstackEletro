import {Navbar, Nav} from 'react-bootstrap'
import {Link, withRouter} from 'react-router-dom'

import './style.css'

function Menu(props) {
    const {location} = props
    return(
        <Navbar className="navbar-dark" bg="primary" expand="lg" fixed="top">
            <Navbar.Brand>
                FullStakEletro REACT
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="item-menu" />
            <Navbar.Collapse id="item-menu">
                <Nav activeKey={location.pathname} className="ml-auto mr-3">
                    <Nav.Item>
                        <Nav.Link as={Link} href="/" to="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} href="/produtos" to="/produtos">Produtos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} href="/contato" to="/contato">Contato</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} href="/pedidos" to="/pedidos">Pedidos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} href="/lojas" to="/lojas">Nossas Lojas</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default  withRouter(Menu)
