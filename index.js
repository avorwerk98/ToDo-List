function App(){
  const [todos, setTodos] = React.useState([
    {
  
      text: 'Make coffee',
      isCompleted: false,
    },
    {
  
      text: 'Go to gym',
      isCompleted: false,
    },
    {
      text: 'Pick up dog food',
      isCompleted: false,
    },
    {
      text: 'Finish homework',
      isCompleted: false,
    },      
    {
      text: 'Sleep 😴',
      isCompleted: true,
    }     
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text, isCompleted:false}];
    setTodos(newTodos);
  }
  const removeTodo = index => {
    let temp = [...todos];    
    temp.splice(index, 1);
    setTodos(temp);
  }

  return(
    <div className="app">
      <div className="todo-list" >
        {todos.map((todo, i) => (
          <Todo key={i} index={i} todo={todo} remove={removeTodo}/>
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
