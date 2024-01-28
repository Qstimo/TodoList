export type Task = {
    name: string,
    description: string,
    checked: boolean,
}
export type Todo = {
    id: number,
    mainTask: Task
    tasks: Task[],
    data: string,
    deadline: string
}