import { MdDelete as EditIcon } from "react-icons/md";
import { RiEdit2Fill as DeleteIcon } from "react-icons/ri";
import { BookProps } from "../content/typed";
import {  toast } from 'react-toastify';

export const BookItem = ({title, author, price, type, photo, id} : BookProps) => {

    function handleDelete (id: number) {
        toast.success(`Book with id: ${id} deleted!`)
    }

    function handleEdit(id: number) {
        toast.success(`Book with id: ${id} edited!`)
    }

    return (
        <article className="w-64 overflow-hidden bg-white border-2 border-solid rounded-md shadow-md h-fit">
            <header className="overflow-hidden aspect-[12/16]"> 
                <img className="block w-full h-full object-conatain" src={photo} alt="Imagen película" />
            </header>
            <main className="flex flex-col items-stretch justify-center gap-5 p-4">
                <h4 className="font-bold">{title}</h4>
                <aside className="flex items-center justify-between">
                    <h5 className="text-gray-400">{author}</h5>
                    <span className="px-4 py-1 text-white bg-gray-700 rounded-full">{type}</span>
                </aside>
            </main>
            <footer className="flex justify-between px-4 py-2">
                <span className="text-white">{price} €</span>
                <aside className="flex items-center justify-center gap-2">
                    <button onClick={() => handleEdit(id)}>
                        <EditIcon className="text-blue-700 hover:text-blue-500" size={30} />    
                    </button>
                    <button onClick={() => handleDelete(id)}>
                        <DeleteIcon size={30} className="text-red-600 hover:text-red-400" />
                    </button>
                </aside>
            </footer>
        </article>
    
    )
}