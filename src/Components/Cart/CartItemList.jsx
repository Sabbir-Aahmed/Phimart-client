import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'

const CartItemList = ({items, handleUpdateQuantity,handleRemoveItem}) => {
    if(items.length === 0){
        return(
            <div className="py-6 text-center text-gray-500">Your Cart is Empty</div>
        )
    }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">🛒 Shopping Cart</h2>

      <div className="overflow-x-auto ">
        <table className="table w-full">
          <thead className="bg-base-200">
            <tr>
              <th className="text-left">Product</th>
              <th className="text-right">Price</th>
              <th className="text-center">Quantity</th>
              <th className="text-right">Total</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) =>(
                <tr key={item.id} className="hover">
              <td className="font-medium">{item.product.name}</td>
              <td className="text-right">${item.product.price}</td>
              <td>
                <div className="flex items-center justify-center join">
                  <button 
                    onClick={()=> handleUpdateQuantity(item.id, Math.max(1,item.quantity-1))}
                    className="btn btn-xs btn-outline join-item"
                    >
                        -
                    </button>
                  <input
                    type="number"
                    min={1}
                    value={item.quantity}
                    onChange={(e)=> handleUpdateQuantity(item.id, e.target.value)}
                    className="input input-xs input-bordered join-item w-12 text-center
                      [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                  <button 
                     onClick={()=> handleUpdateQuantity(item.id, item.quantity+1)}
                    className="btn btn-xs btn-outline join-item">
                        +
                    </button>
                </div>
              </td>
              <td className="text-right">${item.totla_price}</td>
              <td className="text-center">
                <button
                  className="btn btn-ghost btn-xs btn-circle hover:bg-red-100 hover:text-red-500"
                  aria-label={`Remove ${item.name} from cart`}
                  onClick={()=> handleRemoveItem(item.id)}
                >
                  <FaRegTrashAlt className="h-4 w-4" />
                </button>
              </td>
            </tr>
            ))}
            
          </tbody>
        </table>
      </div>
      
    </div>
  )
}

export default CartItemList
