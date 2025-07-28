import { TaskOrderByWithRelationInput } from "../inputs/TaskOrderByWithRelationInput";
export declare class TaskDependencyOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    taskId?: "asc" | "desc" | undefined;
    dependsOnId?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    task?: TaskOrderByWithRelationInput | undefined;
    dependsOn?: TaskOrderByWithRelationInput | undefined;
}
