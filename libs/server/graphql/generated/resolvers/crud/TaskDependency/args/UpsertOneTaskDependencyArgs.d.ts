import { TaskDependencyCreateInput } from "../../../inputs/TaskDependencyCreateInput";
import { TaskDependencyUpdateInput } from "../../../inputs/TaskDependencyUpdateInput";
import { TaskDependencyWhereUniqueInput } from "../../../inputs/TaskDependencyWhereUniqueInput";
export declare class UpsertOneTaskDependencyArgs {
    where: TaskDependencyWhereUniqueInput;
    create: TaskDependencyCreateInput;
    update: TaskDependencyUpdateInput;
}
