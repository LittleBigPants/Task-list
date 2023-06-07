import "./TodoItem.css"
import {ImCheckmark} from "react-icons/im"
import {FaWindowClose} from "react-icons/fa"

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
      onClick = {props.onComplete}
      >
        <ImCheckmark />
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete"
      onClick = {props.onDelete}
      >
      <FaWindowClose />
      </span>
    </li>
  );
}

  export {TodoItem}