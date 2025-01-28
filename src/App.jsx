import { useState } from 'react'
import './App.css'

const TODOS = [
  { todo: "Faire les courses", date: "Mardi 28 janvier", checked: true },
  { todo: "Rendez-vous médecin", date: "Jeudi 30 janvier", checked: false },
  { todo: "Réviser React", date: "Vendredi 31 janvier", checked: false },
  { todo: "Sport avec Julie", date: "Samedi 1 février", checked: false },
  { todo: "Dîner en famille", date: "Dimanche 2 février", checked: false }
]

function ToDo({ todo, date, checked }) {
  if (checked) {
    return (
      <li className="green">
        <input type="checkbox" defaultChecked />
        {todo} - {date}
      </li>
    )
  }
  return (
    <li className="orange">
      {todo} - {date}
    </li>
  )
}

/*
function TodoTernaire({ todo, date, checked }) {
  return (
    <li className={checked ? "green" : "orange"}>
      {checked && <input type="checkbox" defaultChecked />}
      {todo} - {date}
    </li>
  )
}

function TodoAnd({ todo, date, checked }) {
  return (
    <li>
      {checked && <input type="checkbox" defaultChecked />}
      {todo} - {date}
    </li>
  )
}
  */

function App() {
  const DATE = new Date()

  return (
    <article className="todolist">
      <h1>Ma Liste de Tâches</h1>
      <h2>{DATE.toLocaleString()}</h2>
      <ul>
        {TODOS.map((item, index) => (
          <ToDo 
            key={index}
            todo={item.todo}
            date={item.date}
            checked={item.checked}
          />
        ))}
      </ul>
      {/* <h3>Version avec ternaire :</h3>
      <ul>
        {TODOS.map((item, index) => (
          <TodoTernaire 
            key={index}
            todo={item.todo}
            date={item.date}
            checked={item.checked}
          />
        ))}
      </ul>
      <h3>Version avec &&:</h3>
      <ul>
        {TODOS.map((item, index) => (
          <TodoAnd 
            key={index}
            todo={item.todo}
            date={item.date}
            checked={item.checked}
          />
        ))}
      </ul> */}
    </article>
  )
}

export default App
