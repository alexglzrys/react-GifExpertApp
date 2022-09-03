import React, { useEffect, useState } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
// Nos ahorramos 2 importaciones separadas, haciendo uso de nuestro archivo de barril.
import { GifItem, Loading } from "./index";

// Sniped para crear el cuerpo de un componente funcional - rafc
export const GifGrid = ({ category }) => {

  const {images, isLoading} = useFetchGifs(category);

  return (
    <div>
      <h4>{category}</h4>
      {isLoading && <Loading />}
      <div className="card-grid">
        {/* Tarjetas con la información de cada gif localizado referente a la categoría seleccionada */}
        {images.map(image => <GifItem key={image.id} {...image}/>)}
      </div>
    </div>
  );
};
