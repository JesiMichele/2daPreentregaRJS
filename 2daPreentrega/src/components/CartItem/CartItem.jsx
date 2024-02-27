import React from 'react';
import  './CartItem.css'
const CartItem = ({producto,eliminarItem}) => {

    return (
        <div className='item'>
            <h3>{producto.producto.name}</h3>

            <img src={producto.producto.image} alt={producto.producto.name}/>
            <p className='count'>Cantidad: {producto.cantidad}</p>
            <p className='v'>Valor unitario: ${producto.producto.price*producto.cantidad}</p>
            <button className='btn' onClick={()=> eliminarItem(producto.producto.id)}>Eliminar producto</button>
        </div>
    );
};

export default CartItem;