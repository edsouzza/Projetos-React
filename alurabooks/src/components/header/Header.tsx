import './Header.css'
import Logo from '../logo/Logo'
import Menu from '../menu/Menu'
import hart from '../../assets/Favoritos.svg'
import bag from '../../assets/Compras.svg'
import user from '../../assets/Usuario.svg'

export default function Header(){

    return(
        <section className="header">
            <div className="content">
                <div className="left">
                    <Menu/>
                    <Logo/>
                </div>
                <div className="right">
                    <img src={hart} alt="imagem do coracao" className='hart'/>
                    <img src={bag} alt="imagem do coracao" className='bag'/>
                    <img src={user} alt="imagem do coracao" className='user'/>
                </div>
            </div>
        </section>
    )

}