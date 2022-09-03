import React from 'react'
import ReactDOM from 'react-dom/client'
import { GifExpertApp } from './components';

// Estilos globales de la aplicación
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // Cuando se trabaja con el modo estricto, es normal que el ciclo de vida se ejecute 2 veces por cuestiones de inspección de React. Pero esto se anula en producción cuando se genera el builder final. No hay necesidad de remover.
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>
)
