import './App.css'
import { TaskType, TodolistItem } from './TodolistItem'

function App() {
  //BLL
  const todoListTitle_1: string = "What to learn"
  const todoListTitle_2: string = "What to buy"

  const tasks_1: TaskType[] = []
  //   { id: 1, title: "HTML", isDone: true },
  //   { id: 2, title: "CSS", isDone: true },
  //   { id: 3, title: "JS/TS", isDone: false },
  // ]
  const tasks_2: Array<TaskType> = [
    { id: 4, title: "Beer", isDone: true },
    { id: 5, title: "Meat", isDone: true },
    { id: 6, title: "Cheeps", isDone: false },
  ]

  //UI
  return (
    <div className="app">
      {/* React.createElement("div") => document.createElement("div") */}
      <TodolistItem title={todoListTitle_1} tasks={tasks_1}/>
      <TodolistItem title={todoListTitle_2}tasks={tasks_2}/>
    </div>
  )
}

export default App
