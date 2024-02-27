import React, { useContext } from 'react'
import './Cart.css'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'

const Cart = () => {

    const { cart,vaciarCarrito,eliminarItem,totalCarrito } = useContext(CartContext)



    return (
        <div className='cart'>


            {cart.length == 0
                ?
                <>
                    <h2>No hay productos en el carrito</h2>
                    <Link to={'/'}>Volver al inicio</Link>
                </>
                :
                <>
                    <h2 className='list1'>Lista de carrito</h2>
                    {cart.map((p) => (
                        <CartItem key={p.id} producto={p} eliminarItem={eliminarItem} />
                    ))}


                    <p className='total'>Total: ${totalCarrito()}</p>

                    <button className='btnn' onClick={vaciarCarrito}>Vaciar carrito</button>
                </>
            }


        </div>
    )
}

export default Cart

