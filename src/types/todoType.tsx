export type todoType = {
    task: string,
    status: TaskStatus | TaskStatus.NOT_DONE
}

export enum TaskStatus {
    NOT_DONE,
    EDITING,
    DONE
}