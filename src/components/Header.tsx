import { useState } from "react";
import {Logo} from "./Logo.js"
import {Menu} from "./Menu.js"
import { Sidebar } from "./Sidebar.js";
import { CiMenuFries as ToogleButton } from "react-icons/ci";

export const Header = () => {
    const [ isShow, setIsShow ] = useState(false)

    return (
        <header className="flex items-center justify-between px-10 py-5 bg-slate-500">
            <Logo/>
            {!isShow && (
                <div className="hidden md:flex">
                    <Menu isSidebarOpen={isShow}/>
                </div>
            )}
            <Sidebar show={isShow} onHide={() => setIsShow(false)}/>
            <button onClick={()=> setIsShow(true)} className="block text-white md:hidden ">
                {!isShow && <ToogleButton  className="size-7"/>}
            </button>
        </header>
    )
}