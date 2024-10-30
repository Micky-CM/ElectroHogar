import { Link, useParams } from "react-router-dom"
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { ChevronLeftIcon } from "@heroicons/react/16/solid"
import Layout from "../../Components/Layout"
import OrderCard from "../../Components/OrderCard"

const MyOrder = ()=> {
  const context = useContext(ShoppingCartContext)
  const params = useParams()
  const indexOrderPath = Number(params.id)
  const orders = !isNaN(indexOrderPath)  ?
    context.order?.[indexOrderPath].products :
    context.order?.slice(-1)[0].products

    return (
      <Layout>
        <div className="flex justify-center relative w-80 font-bold text-xl mb-6">
          <h1>Mi Orden</h1>
          <Link to={'/my-orders'} className="absolute left-0">
            <ChevronLeftIcon className="h-6 w-6 text-blue-800 cursor-pointer hover:text-blue-500" />
          </Link>
        </div>
        <div className="flex flex-col w-80">
          {
            orders.map((product, index)=> (
              <OrderCard
                key={product.id}
                id={!isNaN(indexOrderPath) ? product.id : index}
                title={product.title}
                image={product.image}
                price={product.price}
              />
            ))
          }
        </div>
      </Layout>
    )
  }

  export default MyOrder