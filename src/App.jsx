import './App.css'

var todoList = [
  {
    id: 1,
    title: "Kilter Board"
  },
  {
    id: 2,
    title: "Muay Thai"
  },
  {
    id: 3,
    title: "Kickboxing"
  }
]

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
