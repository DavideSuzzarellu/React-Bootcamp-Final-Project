import { Menu } from "./Menu"
import { IoCloseSharp as CloseButton } from "react-icons/io5";


interface Props {
    show: boolean,
    onHide: () => void
}

export const Sidebar = ({show, onHide}: Props) => {
    return (
        <div className={`fixed inset-y-0 right-0 z-50 w-64 bg-neutral-600 shadow-lg overflow-y-auto transition-transform duration-300 ease-in-out transform ${show ? 'translate-x-0 flex flex-col' : 'translate-x-full'}`}>
            <button className="w-full p-4" onClick={onHide}>
                <CloseButton className="ml-auto size-10 text-slate-200"/>
            </button>
            <Menu isSidebarOpen={show}/>
        </div>
    )
}