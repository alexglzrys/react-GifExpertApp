import { useState } from "react";

// Componente global de la aplicación
const GiftExpertApp = () => {
  // El estado no se puede condicionar con IF's
  const [categories, setCategories] = useState([
    "Dragon Ball",
    "Pokemón",
    "Ranma 1/2",
  ]);

  return (
    <>
      {/* Titulo */}
      <h1>Gift Expert App</h1>

      {/* Buscador */}
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
