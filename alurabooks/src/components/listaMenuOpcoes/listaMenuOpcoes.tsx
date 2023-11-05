// Este será o menu na versão tablet/desktop
import './listaMenuOpcoes.css'

export default function listaMenuOpcoes()
{
    return(
        <ul className="opcoes">
            <input type="checkbox" id="opcoes__menu" className="opcoes__botao" />
            <label htmlFor="opcoes__menu" className='opcoes__rotulo'>
                <li className="opcoes__item">Categorias</li>
            </label>
            <ul className="listaMenu">
                <li className="listaMenuItem"><a href="#" className='listaMenuLink'>Programação</a></li>
                <li className="listaMenuItem"><a href="#" className='listaMenuLink'>front-end</a></li>
                <li className="listaMenuItem"><a href="#" className='listaMenuLink'>Infraestrutura</a></li>
                <li className="listaMenuItem"><a href="#" className='listaMenuLink'>Business</a></li>
                <li className="listaMenuItem"><a href="#" className='listaMenuLink'>Design & Ux</a></li>
            </ul>        
                <li className="opcoes__item">
                    <a href="#" className="opcoes__link">Favoritos</a>
                </li>
                <li className="opcoes__item">
                    <a href="#" className="opcoes__link">Minha estante</a>
                </li>
        </ul>

    )
}