import { useContext } from "react"
import { XMarkIcon } from "@heroicons/react/16/solid"
import { ShoppingCartContext } from "../../Context"

const ProductDetail = ()=> {
  const context = useContext(ShoppingCartContext)

  const handleCloseOutsideClick = ()=> {
    context.closeProductDetail()
  }

  return (
    <div
      className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} fixed inset-0 bg-black bg-opacity-80 justify-center items-center`}
      onClick={handleCloseOutsideClick}
    >
      <aside
        className="bg-white border border-black rounded-lg max-w-[600px] max-h-[90vh] overflow-y-auto"
        onClick={(e)=> e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-4">
          <h2 className="font-medium text-xl">Detalle del producto</h2>
          <button>
            <XMarkIcon
              className="h8 w-8 text-blue-800 hover:text-blue-500"
              onClick={()=> context.closeProductDetail()}/>
          </button>
        </div>
        <figure className="flex justify-center">
          <img
            className="w-100 h-64 object-cover rounded-lg"
            src={context.productToShow.image}
            alt={context.productToShow.title} />
        </figure>
        <p className="flex flex-col px-6 pb-6">
          <span className="font-medium text-3xl font-bolder mb-2">${context.productToShow.price}</span>
          <span className="font-medium text-2xl">{context.productToShow.title}</span>
          <span className="font-medium text-md line-clamp-3">{context.productToShow.description}</span>
        </p>
      </aside>
    </div>
  )
}

export default ProductDetail