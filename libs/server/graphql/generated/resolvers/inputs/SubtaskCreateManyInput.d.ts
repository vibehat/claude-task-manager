export declare class SubtaskCreateManyInput {
    id: string;
    title: string;
    description: string;
    details?: string | undefined;
    testStrategy?: string | undefined;
    status: string;
    parentId: number;
    dependencies?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
