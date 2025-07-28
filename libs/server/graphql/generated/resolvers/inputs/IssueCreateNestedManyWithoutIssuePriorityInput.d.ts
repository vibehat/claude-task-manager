import { IssueCreateManyIssuePriorityInputEnvelope } from "../inputs/IssueCreateManyIssuePriorityInputEnvelope";
import { IssueCreateOrConnectWithoutIssuePriorityInput } from "../inputs/IssueCreateOrConnectWithoutIssuePriorityInput";
import { IssueCreateWithoutIssuePriorityInput } from "../inputs/IssueCreateWithoutIssuePriorityInput";
import { IssueWhereUniqueInput } from "../inputs/IssueWhereUniqueInput";
export declare class IssueCreateNestedManyWithoutIssuePriorityInput {
    create?: IssueCreateWithoutIssuePriorityInput[] | undefined;
    connectOrCreate?: IssueCreateOrConnectWithoutIssuePriorityInput[] | undefined;
    createMany?: IssueCreateManyIssuePriorityInputEnvelope | undefined;
    connect?: IssueWhereUniqueInput[] | undefined;
}
