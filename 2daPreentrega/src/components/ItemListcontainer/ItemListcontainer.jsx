import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';





const ItemListcontainer = () => {

   const [productos, setProductos] = useState([]);

   const { categoryId } = useParams()


   useEffect(() => {


      const fetchData = async () => {
         try {
            const response = await fetch("/productos.json")
            const data = await response.json()


            if (categoryId) {
               const filtrarProductos = data.filter((p) =>p.category== categoryId)
               setProductos(filtrarProductos)
            } else {
               setProductos(data)
            }





         } catch (error) {
            console.log("error en el fetch" + error)
         }

      }

      fetchData()
   }, [categoryId])

   return (
      <div>
         

         {productos.length == 0
            ?
            <h1>Cargando productos...</h1>
            :
            <ItemList productos={productos} />
         }


      </div>
   )
}

export default ItemListcontainer