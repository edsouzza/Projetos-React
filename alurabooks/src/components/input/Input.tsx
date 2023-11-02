import './Input.css'

export default function Input(props:any){

    return(
        <div className="banner__areainput">
            <input type="text" className="banner__pesquisa" placeholder={props.texto}/>            
        </div>
    )

}