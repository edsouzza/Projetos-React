import './ListaMenu.css'

export default function ListaMenu(){

   return(
       <>
         <input type="checkbox" id="menu" className="container__botao" />
         <label htmlFor="menu" className='container__rotulo'>
            <span className="menuHamburger container__imagem"></span>
         </label>
         <ul className="listaMenu">
            <li className="listaMenuTitulo">Categorias</li>
            <li className="listaMenuItem"><a href="#" className='listaMenuLink'>Programação</a></li>
            <li className="listaMenuItem"><a href="#" className='listaMenuLink'>front-end</a></li>
            <li className="listaMenuItem"><a href="#" className='listaMenuLink'>infraestrutura</a></li>
            <li className="listaMenuItem"><a href="#" className='listaMenuLink'>design &ux</a></li>
          </ul>        
       </>
   )

}