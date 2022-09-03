import React, { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

// Sniped para crear el cuerpo de un componente funcional - rafc
export const GifGrid = ({ category }) => {

  const [images, setImages] = useState([]);

  // Llamar a la API con la categoría solicitada, solo la primera vez que se renderiza el componente
  // Los kooks no pueden ser asincronos (firma), pero internamente si pueden tener instrucciones asincronas
  useEffect(() => {
    const newImages = async () => {
      const newImages = await getGifs(category);
      setImages(newImages);
    }
    newImages();
  }, []);

  return (
    <div>
      <h4>{category}</h4>
      <ol>
        {images.map(({id, title}) => <li key={id}>{title}</li>)}
      </ol>
    </div>
  );
};
