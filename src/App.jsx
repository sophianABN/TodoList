import { useState } from 'react'
import './App.css'

const TODOS = [
  { todo: "Faire les courses", date: "Mercredi 29 janvier", checked: true, heure: 0, categorie: "courses" },
  { todo: "Rendez-vous médecin", date: "Jeudi 30 janvier", checked: false, heure: 1, categorie: "santé" },
  { todo: "Réviser React", date: "Vendredi 31 janvier", checked: false, heure: 4, categorie: "études" },
  { todo: "Sport avec Julie", date: "Samedi 1 février", checked: false, heure: 3, categorie: "sport" },
  { todo: "Dîner en famille", date: "Dimanche 2 février", checked: false, heure: 2, categorie: "famille" }
]

//Composant ToDo
function ToDo({ todo, date, checked, heureRestante }) {
  const [heures, setHeures] = useState(heureRestante)

  const handleClick = () => {
    alert(todo)
  }

  const handleClickPlus = () => {
    setHeures(heures + 1)
  }

  const handleClickMinus = () => {
    if (heures > 0) {
      setHeures(heures - 1)
    }
  }

  if (checked) {
    return (
      <li className="green" onClick={handleClick}>
        <input type="checkbox" defaultChecked />
        {todo} - {date}
        <div>
          <button onClick={handleClickMinus}>-</button>
          <span> {heures}h </span>
          <button onClick={handleClickPlus}>+</button>
        </div>
      </li>
    )
  }
  return (
    <li className="orange" onClick={handleClick}>
      {todo} - {date}
      <div>
        <button onClick={handleClickMinus}>-</button>
        <span> {heures}h </span>
        <button onClick={handleClickPlus}>+</button>
      </div>
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

function Form({ onSubmit }) {
  const handleChange = (event) => {
    console.log(event.target.value)
  }

  return (
    <form onSubmit={onSubmit}>
      <input 
        type="text" 
        placeholder="La ToDo" 
        onChange={(event) => handleChange(event)}
      />
      <input 
        type="text" 
        placeholder="La Date" 
        onChange={(event) => handleChange(event)}
      />
      <input type="submit" value="Ajouter" />
    </form>
  )
}

function App() {
  const DATE = new Date()
  const [courses, setCourses] = useState(true)
  const [sante, setSante] = useState(true)
  const [etudes, setEtudes] = useState(true)
  const [sport, setSport] = useState(true)
  const [famille, setFamille] = useState(true)

  const handleSubmit = (event) => {
    event.preventDefault()
    const INPUTS = document.querySelectorAll('input[type="text"]')
    INPUTS.forEach(input => {
      console.log(input.value)
    })
  }

  const TODOLIST = TODOS.filter(element => {
    if (element.categorie === 'courses' && !courses === true) {
      return false
    }
    if (element.categorie === 'santé' && !sante === true) {
      return false
    }
    if (element.categorie === 'études' && !etudes === true) {
      return false
    }
    if (element.categorie === 'sport' && !sport === true) {
      return false
    }
    if (element.categorie === 'famille' && !famille === true) {
      return false
    }
    return true
  })

  return (
    <article className="todolist">
      <h1>Ma Liste de Tâches</h1>
      <h2>{DATE.toLocaleString()}</h2>
      <section className="filters">
        <label>
          <input 
            type="checkbox" 
            checked={courses}
            onChange={() => setCourses(!courses)}
          /> Courses
        </label>
        <label>
          <input 
            type="checkbox" 
            checked={sante}
            onChange={() => setSante(!sante)}
          /> Santé
        </label>
        <label>
          <input 
            type="checkbox" 
            checked={etudes}
            onChange={() => setEtudes(!etudes)}
          /> Études
        </label>
        <label>
          <input 
            type="checkbox" 
            checked={sport}
            onChange={() => setSport(!sport)}
          /> Sport
        </label>
        <label>
          <input 
            type="checkbox" 
            checked={famille}
            onChange={() => setFamille(!famille)}
          /> Famille
        </label>
      </section>
      <ul>
        {TODOLIST.map((item, index) => (
          <ToDo 
            key={index}
            todo={item.todo}
            date={item.date}
            checked={item.checked}
            heureRestante={item.heure}
          />
        ))}
      </ul>
      <Form onSubmit={(event) => handleSubmit(event)} />
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
