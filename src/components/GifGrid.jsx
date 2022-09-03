import React, { useEffect, useState } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";
import { Loading } from "./Loading";

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
