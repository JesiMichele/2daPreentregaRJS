import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({producto}) => {

return (
    <div>
      
    <h1>{producto.name}</h1>
    <img src={producto.image} alt={producto.name} />
    <h3>{producto.price}</h3>
    <h3>{producto.stock}</h3>
    <p>{producto.description}</p>
    <p>{producto.category}</p>

    <ItemCount Initial={1} stock={producto.stock}/>






    </div>
  )
}

export default ItemDetail
