import { IoMdCheckmarkCircle } from "react-icons/io";

const Popup = () => {
    return (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black bg-opacity-50 animate-fadeIn">
          <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-md mx-4 animate-slideUp">
            <div className="flex flex-col items-center text-center gap-4">
              <IoMdCheckmarkCircle size={64} className="text-green-500 animate-bounce" />
              <h2 className="text-2xl font-bold text-gray-800">¡Gracias por tu compra!</h2>
              <p className="text-gray-600">Pronto llegará tu pedido a tu casa!</p>
            </div>
          </div>
        </div>
    )
}

export { Popup }
