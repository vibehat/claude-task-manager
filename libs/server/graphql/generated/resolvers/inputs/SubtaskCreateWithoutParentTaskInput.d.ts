import { IssueCreateNestedManyWithoutSubtaskInput } from "../inputs/IssueCreateNestedManyWithoutSubtaskInput";
export declare class SubtaskCreateWithoutParentTaskInput {
    id: string;
    title: string;
    description: string;
    details?: string | undefined;
    testStrategy?: string | undefined;
    status: string;
    dependencies?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    issues?: IssueCreateNestedManyWithoutSubtaskInput | undefined;
}
