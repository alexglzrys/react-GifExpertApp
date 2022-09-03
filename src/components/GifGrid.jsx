import React, { useEffect, useState } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

// Sniped para crear el cuerpo de un componente funcional - rafc
export const GifGrid = ({ category }) => {

  const {images, setImages} = useFetchGifs(category);

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
