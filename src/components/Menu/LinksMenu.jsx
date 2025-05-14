import { Link } from "react-router-dom";

export const LinksMenu = () =>{
    return(
        <div>
            <Link to="/login">Login</Link>
            <Link to="/cadastroUsuario">cadastroUse</Link>
            <Link to="/Reservas">Reserva</Link>
            <Link to="/cadastroLivro">CadastroLivro</Link>
        </div>
    )
}