import { TodoCounter } from '../TodoCounter/TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList/TodoList';
import { TodoItem } from '../TodoItem/TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import React from 'react';
// import { TodoDay } from './components/TodoDay/TodoDay';

// const defaultTodo = [
//   { text: "hacer tarea", completed: true},
//   { text: "comprar leche", completed: false},
//   { text: "estudiar", completed: false},
//   { text: "hacer la cena", completed: false},
// ];

// localStorage.setItem("TASK_V1", JSON.stringify(defaultTodo));
// localStorage.removeItem("TASK_V1", defaultTodo)

function useLocalStorage (itemName, initialValue) {
  
  
  const localStorageItem = localStorage.getItem(itemName);
  let parseItem;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify([initialValue]));
    parseItem = initialValue;
  } else {
    parseItem = JSON.parse(localStorageItem);
  }
  
  const [item, setItem] = React.useState(parseItem);
  
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    
    setItem (newItem);
  };
  
  return [item,saveItem];
}


function App() {
  
  
  
  const [tasks, saveTasks] = useLocalStorage("TASK_V1", []);
  const [searchValue, setSearchValue] = React.
  useState("");

  const completedTasks = tasks.filter(task => !!task.completed
    ).length;
    const totalTasks = tasks.length; 
    
    const searchTask = tasks.filter(
      (task) => {
        
        const taskText = task.text.toLocaleLowerCase();
        const sTask =  searchValue.toLocaleLowerCase();
        
        return taskText.includes(sTask);

      }
    );


  
    const completeTask = (text) => {
    const newTasks = [...tasks ];
    const taskIndex  = newTasks.findIndex(
      (task) => task.text == text 
    )
    newTasks[taskIndex].completed = true;
    saveTasks (newTasks);
  }
  const deleteTask = (text) => {
    const newTasks = [...tasks ];
    const taskIndex  = newTasks.findIndex(
      (task) => task.text == text 
    )
     newTasks.splice(taskIndex, 1);
     saveTasks (newTasks);
  }
  
  return (
    // <React.Fragment></React.Fragment> == <></>
    <React.Fragment>

      <TodoCounter 
      completed={completedTasks} 
      total={totalTasks} 
      />
      
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      
      {/* <TodoDay /> */}

      <TodoList> 
        {searchTask.map(task => (
          <TodoItem 
            key={task.text} 
            text={task.text}
            completed={task.completed}
            onComplete = {() => {
              completeTask(task.text);
            }}
            onDelete = {() => {
              deleteTask(task.text);
            }}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}


export default App;
