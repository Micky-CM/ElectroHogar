import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ShoppingCartContext } from "../../Context"
import { ShoppingBagIcon } from "@heroicons/react/16/solid"

const Navbar = ()=> {
  const context = useContext(ShoppingCartContext)
  const activeStyle = "underline underline-offset-4 font-medium"
  return (
    <nav className="flex justify-between items-center fixed bg-blue-800/90 z-10 top-0 w-full py-5 px-8 text-md text-blue-50 mb-10">
      <ul className="flex items-center gap-3">
        <li className="font-bold text-blue-50 mr-3 text-2xl">
          <NavLink to='/'>
            Electro Hogar
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/'
            onClick={()=> context.setSearchByCategory()}
            className={({ isActive })=> isActive ? activeStyle : undefined
          }>
            Todo
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/Electrodomesticos'
            onClick={()=> context.setSearchByCategory('Electrodomesticos')}
            className={({ isActive })=> isActive ? activeStyle : undefined
          }>
            Electrodomésticos
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/Televisores'
            onClick={()=> context.setSearchByCategory('Televisores')}
            className={({ isActive })=> isActive ? activeStyle : undefined
          }>
            Televisores
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/Celulares'
            onClick={()=> context.setSearchByCategory('Celulares')}
            className={({ isActive })=> isActive ? activeStyle : undefined
          }>
            Celulares
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/Audio'
            onClick={()=> context.setSearchByCategory('Audio')}
            className={({ isActive })=> isActive ? activeStyle : undefined
          }>
            Audio
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/Videojuegos'
            onClick={()=> context.setSearchByCategory('Videojuegos')}
            className={({ isActive })=> isActive ? activeStyle : undefined
          }>
            Videojuegos
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li>
          <NavLink
            to='/my-orders'
            className={({ isActive })=> isActive ? activeStyle : undefined
          }>
            Mis Órdenes
          </NavLink>
        </li>
        <li className="flex items-center">
          <ShoppingBagIcon
            className="w-6 h-6 text-blue-50 cursor-pointer hover:text-blue-300"
            onClick={context.openCheckoutSideMenu}
          />
          {context.count}
        </li>
      </ul>
    </nav>
  )
}

export default Navbar