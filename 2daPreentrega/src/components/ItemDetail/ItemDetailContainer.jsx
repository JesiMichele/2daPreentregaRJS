import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {

    const { id } = useParams()
    const [producto, setProducto] = useState([]);

    useEffect(() => {


        const fetchData = async () => {
            try {
                const response = await fetch("/productos.json")
                const data = await response.json()
                const products = data.find((p) => p.id == id)
                setProducto(products)

            } catch (error) {
                console.log("error en el fetch" + error)
            }

        }

        fetchData()
    }, [])

    console.log(producto)
    return (
        <div>
            <ItemDetail producto={producto} />
        </div>
    )
}

export default ItemDetailContainer
