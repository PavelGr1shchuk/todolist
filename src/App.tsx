import './App.css'
import { TodolistItem } from './TodolistItem'

function App() {
  //BLL
const todoListTitle_1: string = "What to learn"
const todoListTitle_2: string = "What to buy"

//UI
  return (
      <div className="app">
        {/* React.createElement("div") => document.createElement("div") */}
        <TodolistItem title={todoListTitle_1}/>
        <TodolistItem title={todoListTitle_2}/>
      </div>
  )
}

export default App
