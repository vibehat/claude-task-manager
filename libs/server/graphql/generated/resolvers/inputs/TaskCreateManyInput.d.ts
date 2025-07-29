export declare class TaskCreateManyInput {
    id: number;
    title: string;
    description: string;
    details?: string | undefined;
    testStrategy?: string | undefined;
    priority: string;
    status: string;
    complexity?: number | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
