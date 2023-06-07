import React from "react";
import "./TodoCounter.css";

function TodoCounter({total, completed}) {
  
  if (completed == total) {
    return(
    <h1 className="TodoCounter">Felicidades has completado todos tus objetivos
    </h1>
  )}
  return(
    <h1 className="TodoCounter">
        Has completado <span>{completed}</span> de <span>{total}</span> to do
      </h1>
  )
  
}

export  {TodoCounter};