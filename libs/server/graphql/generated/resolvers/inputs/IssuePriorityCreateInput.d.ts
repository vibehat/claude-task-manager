import { IssueCreateNestedManyWithoutIssuePriorityInput } from "../inputs/IssueCreateNestedManyWithoutIssuePriorityInput";
export declare class IssuePriorityCreateInput {
    id: string;
    name: string;
    iconName: string;
    order: number;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    issues?: IssueCreateNestedManyWithoutIssuePriorityInput | undefined;
}
