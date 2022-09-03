import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

// Un hook personalizado es una función que retorna uno o varios valores a manera de objeto
// Se les usa comunmente para encapsular lógica que se repite en muchos componentes
export const useFetchGifs = (category) => {
  // Un hook personalizado tambien puede tener su propio estado interno
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Llamar a la API con la categoría solicitada, solo la primera vez que se renderiza el componente
  // Los kooks no pueden ser asincronos (firma), pero internamente si pueden tener instrucciones asincronas
  useEffect(() => {
    const newImages = async () => {
      const newImages = await getGifs(category);
      // Gracias a React 18, solo se renderiza el componente una sola vez aunque tengamos funciones modificadoras de estado consecutivas
      setImages(newImages);
      setIsLoading(false);
    };
    newImages();
  }, []);

  // Valores que devuelve el hook personalizado.
  // Cuando el estado de este hook cambia, obliga al componente que lo usa a renderizarse tambien para que muestre el nuevo estado.
  return {
    images,
    isLoading,
  };
};
