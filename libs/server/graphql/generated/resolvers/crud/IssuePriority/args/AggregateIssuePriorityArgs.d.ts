import { IssuePriorityOrderByWithRelationInput } from "../../../inputs/IssuePriorityOrderByWithRelationInput";
import { IssuePriorityWhereInput } from "../../../inputs/IssuePriorityWhereInput";
import { IssuePriorityWhereUniqueInput } from "../../../inputs/IssuePriorityWhereUniqueInput";
export declare class AggregateIssuePriorityArgs {
    where?: IssuePriorityWhereInput | undefined;
    orderBy?: IssuePriorityOrderByWithRelationInput[] | undefined;
    cursor?: IssuePriorityWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
