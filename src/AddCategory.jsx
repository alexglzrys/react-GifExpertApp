import React, { useState } from "react";

export const AddCategory = ({ onAddCategory }) => {
  // Cada componente en React puede tener su propio estado interno
  const [inputValue, setInputValue] = useState("");

  // Función manejadora de evento, para cambiar el estado de la entrada de formulario
  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const handleFormSubmit = (event) => {
    // Prevenir el comportamiento por defecto de un formulario, para que no recargue la página
    event.preventDefault();
    event.stopPropagation();

    const category = inputValue.trim();

    // Validar que la nueva categoría contenga al menos 2 caracteres
    if (category.length <= 1) return;
    
    // Hacer uso de la función pasada como prop, para modificar el estado de las categorías definido en el componente padre
    // La lógica le corresponde 100% al pedre, este componente solo se encarga de emitir el nuevo valor
    onAddCategory(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleFormSubmit}>
      {/* En React debemos procurar que todos nuestros elementos de formulario sean controlados, deben tener un estado inicial, y una función que maneje el cambio de ese estado */}
      <input
        type="text"
        placeholder="Buscar Gfts"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
};
