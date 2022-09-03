import { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";


// Componente global de la aplicación
const GifExpertApp = () => {
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

export default GifExpertApp;
