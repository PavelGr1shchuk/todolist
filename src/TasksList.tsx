import { TaskType } from "./TodolistItem"

type TasksListPropsType = {
    tasks: Array<TaskType>
}

export const TasksList = ({ tasks }: TasksListPropsType) => {


    const tasksList = tasks.length === 0
        ? <span>Ваш список пуст</span>
        : <ul>
            {
                tasks.map(t => {
                    return (
                        <li>
                            <input type="checkbox" checked={t.isDone} /> <span>{t.title}</span>
                        </li>
                    )
                })
            }
        </ul>
    return (
        <>
            { tasksList }
        </>
    )
}