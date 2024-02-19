import './Topicos.css'


export default function Topicos() {
    
    return (
        <section className="topicos">
            <h2 className='topicos__titulo'>Tópicos visitados recentemente</h2>
            <div className="lista">
                <ul className="topicos__lista">
                    <li className='topicos__item topicos__link'>Android</li>
                    <li className='topicos__item topicos__link'>Marketing Digital</li>
                    <li className='topicos__item topicos__link'>Agile</li>
                    <li className='topicos__item topicos__link'>Startups</li>
                    <li className='topicos__item topicos__link'>HTML e CSS</li>
                    <li className='topicos__item topicos__link'>Python</li>
                    <li className='topicos__item topicos__link'>OO</li>
                    <li className='topicos__item topicos__link'>Java</li>
                </ul>
            </div>
        </section>
    )
}