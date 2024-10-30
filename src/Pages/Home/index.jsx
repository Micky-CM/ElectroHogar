import { useContext } from "react"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetail from "../../Components/ProductDetail"
import { ShoppingCartContext } from "../../Context"

function Home() {
  const context = useContext(ShoppingCartContext)

  const renderView = () => {
    if (context.filteredItems?.length > 0) {
      return (
        context.filteredItems?.map(item => (
          <Card key={item.id} data={item} />
        ))
      )
    } else {
      return (
        <div>Cargando productos...</div>
      )
    }
  }

    return (
      <Layout>
        <div className="flex justify-center items-center relative w-full mb-8">
          <h1 className="font-medium text-xl mr-4">La mejor tecnología para tu hogar</h1>
          <input
            className="w-80 rounded-lg border border-black focus:outline-blue-800 p-2 "
            type="text"
            placeholder="Buscar un producto"
            onChange={(event)=> context.setSearchByTitle(event.target.value)}
          />
        </div>

        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
          { renderView() }
        </div>
        <ProductDetail />
      </Layout>
    )
  }

  export default Home