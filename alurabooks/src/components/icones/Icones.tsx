import hart from '../../assets/Favoritos.svg'
import bag from '../../assets/Compras.svg'
import user from '../../assets/Usuario.svg'
import './Icones.css'

export default function Icones(props:any) {
    return (
        <>
            <div className="card__botoes">
                <ul className="botoes">
                    <li className="botoes__item"><img src={hart} alt="Imagem Favoritos" className='icone hart'/></li>
                    <li className="botoes__item"><img src={bag} alt="Imagem Compras" className='icone'/></li>
                    {
                        props.comUser &&
                        <li className="botoes__item"><img src={user} alt="Imagem Usuário" className='icone'/></li>
                    }
                </ul>
            </div>
        </>
    )
}