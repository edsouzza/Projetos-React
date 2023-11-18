import './Header.css'
import Logo from '../logo/Logo'
import Menu from '../menu/Menu'
import Icones  from '../icones/Icones'
import ListaMenuOpcoes from '../listaMenuOpcoes/listaMenuOpcoes'

export default function Header(){

    return(
        <section className="header">
            <div className="content">
                <div className="left">
                    <Menu/>
                    <Logo/>
                    <ListaMenuOpcoes/>
                </div>
                <div className="right">
                    <Icones comUser/>
                </div>          
            </div>
        </section>
    )
}