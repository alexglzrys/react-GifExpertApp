import { useState } from "react";
// Nos ahorramos 2 importaciones separadas, haciendo uso de nuestro archivo de barril.
import { AddCategory, GifGrid } from "./index";


// Componente global de la aplicación
export const GifExpertApp = () => {
  // El estado no se puede condicionar con IF's
  const [categories, setCategories] = useState([]);

  const addCategory = (newValue) => {
    // Validar que el nuevo valor no se encuentre previamente en el estado de categorias
    if (categories.includes(newValue)) return true;

    // En react esta PROHIBIDO mutar el estado.
    // Se genera un nuevo arreglo, con los valores actuales en el estado, sumado al nuevo valor
    setCategories([newValue, ...categories]);
  };

  return (
    <>
      {/* Titulo */}
      <h1>Gift Expert App</h1>

      {/* Buscador */}
      {/* Los props pueden tener como valor funciones, generalmente se usan para comunicar información de los hijos hacia el padre */}
      <AddCategory onAddCategory={addCategory} />

      {/* Listado de Gifts */}
      {/* Iterar e imprimir un listado de elementos */}
      {categories.map((category, index) => (
        <GifGrid key={category + index} category={category} />
      ))}

      {/* Gift Item */}
    </>
  );
};

