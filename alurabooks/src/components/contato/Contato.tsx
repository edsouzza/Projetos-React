import './Contato.css'
import Input from '../input/Input'

export default function Contato(){
    return(
        <section className="contato">
            <h2 className='contato__titulo'>Fique por dentro das novidades</h2>
            <p className='contato__texto'>Atualizações de e-books, novos livros, promoções e outros</p>
            <Input texto="Cadastre seu e-mail" forContato/>
        </section>
    )
}