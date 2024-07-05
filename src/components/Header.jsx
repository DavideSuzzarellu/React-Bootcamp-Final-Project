import {Logo} from "../components/Logo.jsx"
import {Menu} from "../components/Menu.jsx"

export const Header = () => {

    return (
        <header className="bg-slate-500 p-5 flex justify-between items-center">
            <Logo/>
            <Menu/>
        </header>
    )
}