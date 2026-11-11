import React, {useState, useEffect} from 'react';
import { getAllProductos } from '../servicios/ProductosServicio';
import Producto from './Producto';

function Productos() {

    const [loading, setLoading] = useState(true);
    const [productos, setProductos] = useState();

    useEffect(() => {
        const request = async () => {
            try {
                const response = await getAllProductos();
                

                console.log("desde productos:",response.results);

                setProductos(response.results);
                setLoading(false);
            }catch (evento) {
                console.log(evento);
            }
        };
        request();
    }, []);

if (loading) {
    return (
        <div>Cargando...</div>
    )
} else {
    return (
        <>
            {productos.map((producto) =>
                <Producto
                    id={producto.id}
                    imagen={producto.thumbnail}
                    nombre={producto.title}
                    precio={producto.price}
                />
            )}
            <br />
            {/* <button onClick={handleClick}>Agregar al carrito</button> */}
        </>
    );
}
}



export default Productos;