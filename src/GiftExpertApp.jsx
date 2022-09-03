import { useState } from "react";
import { AddCategory } from "./AddCategory";

// Componente global de la aplicación
const GiftExpertApp = () => {
  // El estado no se puede condicionar con IF's
  const [categories, setCategories] = useState([
    "Dragon Ball",
    "Pokemón",
    "Ranma 1/2",
  ]);

  const addCategory = (newValue) => {
    // Validar que el nuevo valor no se encuentre previamente en el estado de categorias
    if (categories.includes(newValue)) return true;

    // En react esta PROHIBIDO mutar el estado.
    // Se genera un nuevo arreglo, con los valores actuales en el estado, sumado al nuevo valor
    setCategories([...categories, newValue]);
  }

  return (
    <>
      {/* Titulo */}
      <h1>Gift Expert App</h1>

      {/* Buscador */}
      {/* Los props pueden tener como valor funciones, generalmente se usan para comunicar información de los hijos hacia el padre */}
      <AddCategory onAddCategory={addCategory} />
      
      {/* Listado de Gifts */}
      <ol>
        {/* Iterar e imprimir un listado de elementos */}
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ol>
      {/* Gift Item */}
    </>
  );
};

export default GiftExpertApp;
