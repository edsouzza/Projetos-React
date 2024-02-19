import './Card.css'
import estrelas from '../../assets/Estrelinhas.svg'
import Icones from '../../components/icones/Icones'

export default function Card(props:any){
    return(       
        <section className="card">
            
            <div className="card__descricao">
                
                <div className="descricao">
                    {/* criei um props.temEstrela para mostrar as estrelinhas apenas no card que tiver o valor true nela */}
                    {
                        props.temEstrela &&
                        <img src={estrelas} alt="imagem de estrelas" id="escritora" className='estrelas' />
                    }
                    <h3 className="descricao__titulo">{props.descricao}</h3>
                    <h2 className="descricao__titulo-livro">{props.titulo}</h2>
                    <p className="descricao__texto">{props.texto}</p>
                </div>
                <div className="descricao__imagem">
                    <img src={props.foto} alt="imagem" id="foto" className="descricao__imagem escritora"/>
                    <a href="#" className="botoes__ancora">Saiba mais</a>
                </div>
            </div>
           
            <Icones />
        </section>
    )
}