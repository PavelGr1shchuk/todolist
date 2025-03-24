import { AddtaskForm } from "./AddtaskForm"
import { FilterButtons } from "./FilterButtons"
import { TasksList } from "./TasksList"
import { TodoListTitle } from "./TodoListtitle"

type TodolistItemPropsType = {
    title: string
}

export const TodolistItem = (props: TodolistItemPropsType) => {
    //console.log(props);
    
    return (
        <div>
            <TodoListTitle title={props.title} />
            <AddtaskForm />
            <TasksList />
            <FilterButtons />
        </div>
    )
}