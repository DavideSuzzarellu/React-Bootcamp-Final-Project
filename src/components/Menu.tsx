type Props = {
  isSidebarOpen: boolean
}

export const Menu = ({isSidebarOpen}: Props) => {
  
    return (
      <nav className={`flex flex-col items-center gap-10 mt-10 ${isSidebarOpen ? "flex flex-col items-center" : "md:flex-row md:flex md:justify-evenly md:m-0"}`}>
        <a className="text-orange-300 hover:text-slate-700" href="/" >Libros</a>
        <a className="text-orange-300 hover:text-slate-700"href="/" >Editar libro</a>
        <a className="text-orange-300 hover:text-slate-700"href="/">Log In</a>
      </nav>
    );
  }
  