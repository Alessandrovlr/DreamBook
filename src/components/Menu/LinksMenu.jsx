import { Link } from "react-router-dom";

export const LinksMenu = () =>{
    return(
        <div className="flex flex-row gap-10 mr-10">
            <Link to="/login">Login</Link>
            <Link to="/cadastroUsuario">Cadastro</Link>
            <Link to="/Reservas">Reserva</Link>
            <Link to="/cadastroLivro">Livros</Link>
        </div>
    )
}