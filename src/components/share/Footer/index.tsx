import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="flex justify-between items-center w-full p-6 bg-tertiary text-white mt-10">
            <div>
                <p className="text-lg font-semibold">Gracias por comprar en Artesanos</p>
            </div>
            <div className="flex gap-4">
                <a href="#" className="hover:text-secondary transition-colors">
                    <FaFacebook size={24} />
                </a>
                <a href="#" className="hover:text-secondary transition-colors">
                    <FaInstagram size={24} />
                </a>
                <a href="#" className="hover:text-secondary transition-colors">
                    <FaTwitter size={24} />
                </a>
            </div>
        </footer>
    )
}

export { Footer }
