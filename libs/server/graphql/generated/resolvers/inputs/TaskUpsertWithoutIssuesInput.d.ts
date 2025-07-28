import { TaskCreateWithoutIssuesInput } from "../inputs/TaskCreateWithoutIssuesInput";
import { TaskUpdateWithoutIssuesInput } from "../inputs/TaskUpdateWithoutIssuesInput";
import { TaskWhereInput } from "../inputs/TaskWhereInput";
export declare class TaskUpsertWithoutIssuesInput {
    update: TaskUpdateWithoutIssuesInput;
    create: TaskCreateWithoutIssuesInput;
    where?: TaskWhereInput | undefined;
}
