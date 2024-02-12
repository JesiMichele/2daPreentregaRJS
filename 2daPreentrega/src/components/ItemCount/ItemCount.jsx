import React, { useState } from "react";


const ItemCount = ({ Initial, stock }) => {

    const [contador, setContador] = useState(Initial)

    const decrement = () => {
        if (contador > Initial) {
            setContador(contador - 1)
        }
    }
    const increment = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }

    const agregarCarrito = () => {
        alert("Agregaste esta cantidad de productos" + contador);
    }
    return (
        <div>
            <p>{contador}</p>
            <button onClick={decrement}>-</button>
            <button onClick={agregarCarrito}>Agregar al Carrito</button>
            <button onClick={increment}>+</button>




        </div>
    )



}
export default ItemCount