import { XMarkIcon } from "@heroicons/react/16/solid"

const OrderCard = props=> {
  const { id, title, image, price, handleDelete } = props
  return (
    <div className="flex justify-between items-center mb-3 w-full">
      <div className="flex items-center gap-2">
        <figure className="w-14 h-14 flex-shrink-0">
          <img className="w-full h-full rounded-lg object-contain" src={image} alt={title} />
        </figure>
        <p className="text-sm font-medium max-w-[150px] truncate">{title}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg font-bold min-w-[50px] text-right">{price}</p>
          {
            handleDelete &&
            <XMarkIcon
              className="h6 w-6 text-blue-800 cursor-pointer hover:text-blue-500"
              onClick={()=> handleDelete(id)}
            />
          }
      </div>
    </div>
  )
}

export default OrderCard