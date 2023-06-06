import { TodoCounter } from './components/TodoCounter/TodoCounter';
import { TodoSearch } from './components/TodoSearch/TodoSearch';
import { TodoList } from './components/TodoList/TodoList';
import { TodoItem } from './components/TodoItem/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton/CreateTodoButton';
import React from 'react';
// import { TodoDay } from './components/TodoDay/TodoDay';

const defaultTodo = [
  { text: "1", completed: true},
  { text: "2", completed: false},
  { text: "3", completed: true},
  { text: "4", completed: true},
];

function App() {
  const [tasks, setTasks] = React.useState(defaultTodo);
  const [searchValue, setSearchValue] = React.
  useState("");

  const completedTasks = tasks.filter(task => !!task.completed
    ).length;

    const totalTasks = tasks.length;

  console.log("los usuarios buscan to do de " + searchValue);
  
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
        {defaultTodo.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}


export default App;
