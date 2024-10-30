import { useContext } from "react"
import { Link } from "react-router-dom"
import { XMarkIcon } from "@heroicons/react/16/solid"
import { ShoppingCartContext } from "../../Context"
import OrderCard from "../OrderCard"
import { totalPrice } from "../../Utils"

const CheckoutSideMenu = ()=> {
  const context = useContext(ShoppingCartContext)

  const handleDelete = (id)=> {
    const filteredProducts = context.cartProducts.filter((product) => product.id != id)
    context.setCartProducts(filteredProducts)
    context.setCount(context.count - 1)
  }

  const handleCheckout = ()=> {
    const date = new Date()
    const orderToAdd = {
      date: date.toLocaleDateString(),
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts)
    }
    context.setOrder([...context.order, orderToAdd])
    context.setCartProducts([])
    context.setSearchByTitle(null)
    context.setCount(0)
    context.closeCheckoutSideMenu()
  }

  return (
    <aside
      className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} flex-col fixed bg-white border border-blue-800 rounded-lg right-6 top-[72px] w-[370px] h-[calc(100vh-74px)]`}>
      <div className="flex justify-between items-center p-6">
        <h2 className="font-bold text-xl">Mi Orden</h2>
        <button>
          <XMarkIcon
            className="h-6 w-6 text-blue-800 hover:text-blue-500"
            onClick={()=> context.closeCheckoutSideMenu()}
          />
        </button>
      </div>
      <div className="px-6 overflow-y-scroll flex-1">
        {
          context.cartProducts.map(product => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
              handleDelete={handleDelete}
            />
          ))
        }
      </div>
      <div className="px-6 mb-6">
        <p className="flex justify-between items-center mb-2">
          <span className="font-medium text-xl">Total:</span>
          <span className="font-medium text-2xl">${totalPrice(context.cartProducts).toFixed(2)}</span>
        </p>
        <Link to='/my-orders/last'>
          <button
            className="w-full bg-blue-800 text-lg font-bold py-3 text-blue-50 rounded-lg hover:bg-blue-500"
            onClick={()=> handleCheckout()}>
              Comprar
          </button>
        </Link>
      </div>
    </aside>
  )
}

export default CheckoutSideMenu