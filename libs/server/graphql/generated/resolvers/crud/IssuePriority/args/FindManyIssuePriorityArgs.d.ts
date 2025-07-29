import { IssuePriorityOrderByWithRelationInput } from "../../../inputs/IssuePriorityOrderByWithRelationInput";
import { IssuePriorityWhereInput } from "../../../inputs/IssuePriorityWhereInput";
import { IssuePriorityWhereUniqueInput } from "../../../inputs/IssuePriorityWhereUniqueInput";
export declare class FindManyIssuePriorityArgs {
    where?: IssuePriorityWhereInput | undefined;
    orderBy?: IssuePriorityOrderByWithRelationInput[] | undefined;
    cursor?: IssuePriorityWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "iconName" | "order" | "createdAt" | "updatedAt"> | undefined;
}
