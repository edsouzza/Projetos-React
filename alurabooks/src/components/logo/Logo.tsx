import './Logo.css'
import imgLogo from "../../assets/Logo.svg"


export default function Logo(){

    return(
        <>
          <img src={imgLogo} alt="Logo" className='logo'/>
          <h2 className="nomeAluraBold">
            <b>Alura</b>Books
          </h2>
        </>
    )

}