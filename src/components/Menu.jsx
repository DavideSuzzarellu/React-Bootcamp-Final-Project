import {Home} from "../pages/Home.jsx"
import {Libros} from "../pages/Libros.jsx"
import {Login} from "../pages/Login.jsx"

export const Menu = () => {
    const handleRenderLibros = () => {
      // Renderizar el componente de libros al hacer clic en el enlace
      return <Libros />;
    };
    const handleRenderEditarLibro = () => {
      // Renderizar el componente de editar libro al hacer clic en el enlace
      return <Home />;
    };
  
    const handleRenderLogin = () => {
      // Renderizar el componente de login al hacer clic en el enlace
      return <Login />;
    };
  
    return (
      <nav className="flex justify-evenly gap-5 items-center">
        <a href="/" onClick={handleRenderLibros}>Libros</a>
        <a href="/" onClick={handleRenderEditarLibro}>Editar libro</a>
        <a href="/" onClick={handleRenderLogin}>Log In</a>
      </nav>
    );
  }
  