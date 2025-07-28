import { IssuePriorityCreateOrConnectWithoutIssuesInput } from "../inputs/IssuePriorityCreateOrConnectWithoutIssuesInput";
import { IssuePriorityCreateWithoutIssuesInput } from "../inputs/IssuePriorityCreateWithoutIssuesInput";
import { IssuePriorityWhereUniqueInput } from "../inputs/IssuePriorityWhereUniqueInput";
export declare class IssuePriorityCreateNestedOneWithoutIssuesInput {
    create?: IssuePriorityCreateWithoutIssuesInput | undefined;
    connectOrCreate?: IssuePriorityCreateOrConnectWithoutIssuesInput | undefined;
    connect?: IssuePriorityWhereUniqueInput | undefined;
}
