import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { PlusIcon, CheckIcon } from "@heroicons/react/16/solid"

const Card = (data)=> {
  const context = useContext(ShoppingCartContext)

  const showProduct = (productDetail)=> {
    context.openProductDetail()
    context.setProductToShow(productDetail)
    context.closeCheckoutSideMenu()
  }

  const addProductstoCart = (event, productData)=> {
    event.stopPropagation()
    context.setCount(context.count + 1)
    context.setCartProducts([...context.cartProducts, productData])
    context.closeProductDetail()
    context.openCheckoutSideMenu()
  }

  const renderIcon = (id)=> {
    const isInCart = context.cartProducts.filter(product => product.id === id).length > 0

    if(isInCart) {
      return (
        <button
          className="absolute top-0 right-0 flex justify-center items-center bg-blue-800 w-6 h-6 rounded-full m-2 p-1 font-bold">
          <CheckIcon className="h-6 w-6 text-white" />
        </button>
      )
    } else {
      return (
        <button
          className="absolute top-0 right-0 flex justify-center items-center bg-blue-50 w-6 h-6 rounded-full m-2 p-1 font-bold hover:bg-blue-800"
          onClick={(event)=> addProductstoCart(event, data.data)}>
            <PlusIcon className="h-6 w-6 text-blue-800 hover:text-blue-50" />
        </button>
      )
    }
  }

  return (
    <article
      className="bg-white cursor-pointer w-56 h-60 rounded-lg shadow-lg p-4 mb-4 hover:scale-125"
      onClick={()=> showProduct(data.data)}>
      <figure className="relative mb-2 w-full h-4/5">
        <caption className="absolute bottom-0 left-0 bg-blue-300/60 rounded-lg text-black text-sm m-2 px-3 py-0.5">{data.data?.category}</caption>
        <img className="w-full h-full object-contain rounded-lg" src={data.data?.image} alt={data.data?.title} />
        { renderIcon(data.data.id) }
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{data.data?.title}</span>
        <span className="text-lg font-medium">${data.data?.price}</span>
      </p>
    </article>
  )
}

export default Card