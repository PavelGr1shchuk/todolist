import { AddtaskForm } from "./AddtaskForm"
import { FilterButtons } from "./FilterButtons"
import { TasksList } from "./TasksList"
import { TodoListTitle } from "./TodoListtitle"

type TodolistItemPropsType = {
    title: string
    tasks: Array<TaskType>
}

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export const TodolistItem = ({title, tasks}: TodolistItemPropsType) => {
    //console.log(props);
    
    return (
        <div>
            <TodoListTitle title={title} />
            <AddtaskForm />
            <TasksList tasks={tasks}/>
            <FilterButtons />
        </div>
    )
}