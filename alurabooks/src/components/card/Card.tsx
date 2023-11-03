import './Card.css'
import hart from '../../assets/Favoritos.svg'
import bag from '../../assets/Compras.svg'
import estrelas from '../../assets/Estrelinhas.svg'

export default function Card(props:any){
    return(       
        <section className="card">
            
            <div className="card__descricao">
                
                <div className="descricao">
                    <img src={estrelas} alt="imagem de estrelas" id="escritora" className='estrelas' />
                    <h3 className="descricao__titulo">{props.descricao}</h3>
                    <h2 className="descricao__titulo-livro">{props.titulo}</h2>
                    <p className="descricao__texto">{props.texto}</p>
                </div>
                <div className="descricao__imagem">
                    <img src={props.foto} alt="imagem" id="foto" className="descricao__imagem escritora"/>
                    <a href="#" className="botoes__ancora">Saiba mais</a>
                </div>
            </div>

            <div className="card__botoes">
                <ul className="botoes">
                    <li className="botoes__item"><img src={hart} alt="Imagem Favoritos"/></li>
                    <li className="botoes__item"><img src={bag} alt="Imagem Compras"/></li>                
                </ul>                
            </div>
        </section>
    )
}