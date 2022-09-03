import React, { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";

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
      <div className="card-grid">
        {/* Tarjetas con la información de cada gif localizado referente a la categoría seleccionada */}
        {images.map(image => <GifItem key={image.id} {...image}/>)}
      </div>
    </div>
  );
};
