export type Task = {
    name: string,
    description: string,
    checked: boolean,
}
export type Todo = {
    name: string,
    id: number,
    tasks: Task[],
    data: string,
    deadline: string
}