import './Produto.css'

export default function Produto(props) {
    return (
        <div className="boxProduto col-lg-4 col-md-6 mb-4 text-dark" id={props.categoria}>
            <div className="card h-100">
                <span className="text-center mt-2 pointer">
                    <img className="img card-img-top" src={require(`./img/${props.imagem}`).default} />
                </span>
                <div className="card-body">
                    <p className="card-title">{props.produto}</p>
                    <div className="card-text">
                        <h6 className="text-danger"><del>R$ {props.preco}</del></h6>
                        <h5>R$ {props.preco_venda}</h5>
                    </div>
                </div>
                <div className="card-footer">
                    <button type="button" className="btn btn-primary btn-block">Detalhes</button>
                </div>
            </div>
        </div>
    )
}