import './Input.css'

export default function Input(props:any){

    return(
        <div className="banner__areainput banner__areainput__forcontato">
            {/* se for para contato imprime só pra contato caso contrario imprime o normal */}
            {
                props.forContato == true &&(
                  <input type="text" className="banner__pesquisa__forcontato" placeholder={props.texto}/>  
                )     
            }
            {
                props.forContato != true &&(
                    <input type="text" className="banner__pesquisa" placeholder={props.texto}/>      
                )     
            }                  
           
        </div>
    )

}