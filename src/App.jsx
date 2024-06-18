import './App.css'

var todoList = [];

function addTodo(id, title) {
  const item = {id, title};
  todoList.push(item);
}

addTodo(1, "Kilter Board");
addTodo(2, "Muay Thai");
addTodo(3, "Kickboxing");

export default function App() {
  return (
    <main>
      <h1>Todo List</h1>

      <ul>
        {
          todoList.map(function(item) {
            return <li key={item.id}>{item.title}</li>
          })
        }
      </ul>
    </main>
  )
}
