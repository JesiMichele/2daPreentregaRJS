import React, { useState, useContext } from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'

const ItemDetail = ({ producto }) => {


  const [cart, setCart] = useState(false)

  const { agregarItem } = useContext(CartContext)

  const Agregar = (count) => {
    setCart(true)

    agregarItem(producto, count)

  }

  return (
    <div className='itdet'>

      <h1 className='name'>{producto.name}</h1>
      <img src={producto.image} alt={producto.name} />
      <h3>{producto.price}</h3>
      <h3>{producto.stock}</h3>
      <p>{producto.description}</p>
      <p>{producto.category}</p>

      {cart ? <Link to={'/Cart'}>Ir al Carrito</Link> : <ItemCount Initial={0} stock={producto.stock} Agregar={Agregar} />}







    </div>
  )
}

export default ItemDetail
