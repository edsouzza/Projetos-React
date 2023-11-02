import Input from '../input/Input'
import './Banner.css'

export default function Banner(){

   return(
      <section className="banner">
        <div className="banner__textos">
           <h1 className="banner__h1">já sabe por onde começar?</h1>
           <p className="banner__descricao">Encontre em nossa estante o que precisa para seu desenvolvimento!</p>
        </div>
        <Input texto="Qual será sua próxima leitura?"/>
      </section>
   )

}