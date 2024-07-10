import { FaFacebook, FaInstagram, FaLinkedinIn   } from "react-icons/fa";

export const Footer = () => {
    return (
        <footer className="bottom-0 flex items-center justify-center w-full gap-10 p-4 bg-slate-400">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferer"><FaFacebook className="size-10" /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferer"><FaInstagram className="size-10"/></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferer"><FaLinkedinIn className="size-10"/></a>
        </footer>
    )
}