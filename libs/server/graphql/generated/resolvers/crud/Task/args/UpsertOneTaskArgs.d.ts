import { TaskCreateInput } from "../../../inputs/TaskCreateInput";
import { TaskUpdateInput } from "../../../inputs/TaskUpdateInput";
import { TaskWhereUniqueInput } from "../../../inputs/TaskWhereUniqueInput";
export declare class UpsertOneTaskArgs {
    where: TaskWhereUniqueInput;
    create: TaskCreateInput;
    update: TaskUpdateInput;
}
