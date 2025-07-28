import { IssuePriorityCreateOrConnectWithoutIssuesInput } from "../inputs/IssuePriorityCreateOrConnectWithoutIssuesInput";
import { IssuePriorityCreateWithoutIssuesInput } from "../inputs/IssuePriorityCreateWithoutIssuesInput";
import { IssuePriorityUpdateToOneWithWhereWithoutIssuesInput } from "../inputs/IssuePriorityUpdateToOneWithWhereWithoutIssuesInput";
import { IssuePriorityUpsertWithoutIssuesInput } from "../inputs/IssuePriorityUpsertWithoutIssuesInput";
import { IssuePriorityWhereInput } from "../inputs/IssuePriorityWhereInput";
import { IssuePriorityWhereUniqueInput } from "../inputs/IssuePriorityWhereUniqueInput";
export declare class IssuePriorityUpdateOneWithoutIssuesNestedInput {
    create?: IssuePriorityCreateWithoutIssuesInput | undefined;
    connectOrCreate?: IssuePriorityCreateOrConnectWithoutIssuesInput | undefined;
    upsert?: IssuePriorityUpsertWithoutIssuesInput | undefined;
    disconnect?: IssuePriorityWhereInput | undefined;
    delete?: IssuePriorityWhereInput | undefined;
    connect?: IssuePriorityWhereUniqueInput | undefined;
    update?: IssuePriorityUpdateToOneWithWhereWithoutIssuesInput | undefined;
}
