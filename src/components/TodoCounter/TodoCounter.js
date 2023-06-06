import React from "react";
import "./TodoCounter.css";

function TodoCounter({total, completed}) {
  
  
  
  return (
    <h1 className="TodoCounter">
        Has completado <span>{completed}</span> de <span>{total}</span> to do
    </h1>
  )
}

export  {TodoCounter};