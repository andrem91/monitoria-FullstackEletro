import {useState, useEffect} from 'react'

import Produto from '../Components/Produto'
import {Container, Row} from 'react-bootstrap'

export default function Produtos() {
    const [produtos, setProdutos] = useState([])

    useEffect(async () => {
        const resposta = await fetch("http://localhost/monitoria-fullstackeletro/php/api/produtos.php")
        const dados = await resposta.json()
        setProdutos(dados)
    }, [])

    return (
        <div>
            <Container>
                <Row>
                    {produtos && produtos.map(item => <Produto imagem={item.imagem} produto={item.produto} preco={item.preco} preco_venda={item.preco} imagem={item.imagem} /> )}
                </Row>
            </Container>
        </div>

    )
}