import './Header.css'
import Logo from '../logo/Logo'
import Menu from '../menu/Menu'
import Icones  from '../icones/Icones'

export default function Header(){

    return(
        <section className="header">
            <div className="content">
                <div className="left">
                    <Menu/>
                    <Logo/>
                </div>
                <div className="right">
                    <Icones comUser/>
                </div>          
            </div>
        </section>
    )
}