import { IssueCreateNestedManyWithoutIssueStatusInput } from "../inputs/IssueCreateNestedManyWithoutIssueStatusInput";
export declare class IssueStatusCreateInput {
    id: string;
    name: string;
    color: string;
    iconName: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    issues?: IssueCreateNestedManyWithoutIssueStatusInput | undefined;
}
