import React, { useContext } from 'react'
import './CardWidget.css'
import { CartContext } from '../../Context/CartContext'



const CardWidget = () => {


  const { totalCantidad } = useContext(CartContext)
  return (
    <><img src="/assets/img/carrito.png.png" alt="" className='img1' />
      <p>{totalCantidad == 0 ? null : totalCantidad}</p>
    </>
  )
}

export default CardWidget
