import { TaskDependencyOrderByWithRelationInput } from "../../../inputs/TaskDependencyOrderByWithRelationInput";
import { TaskDependencyWhereInput } from "../../../inputs/TaskDependencyWhereInput";
import { TaskDependencyWhereUniqueInput } from "../../../inputs/TaskDependencyWhereUniqueInput";
export declare class FindManyTaskDependencyArgs {
    where?: TaskDependencyWhereInput | undefined;
    orderBy?: TaskDependencyOrderByWithRelationInput[] | undefined;
    cursor?: TaskDependencyWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "taskId" | "dependsOnId" | "createdAt"> | undefined;
}
