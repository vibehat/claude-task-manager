import { TaskCreateOrConnectWithoutIssuesInput } from "../inputs/TaskCreateOrConnectWithoutIssuesInput";
import { TaskCreateWithoutIssuesInput } from "../inputs/TaskCreateWithoutIssuesInput";
import { TaskUpdateToOneWithWhereWithoutIssuesInput } from "../inputs/TaskUpdateToOneWithWhereWithoutIssuesInput";
import { TaskUpsertWithoutIssuesInput } from "../inputs/TaskUpsertWithoutIssuesInput";
import { TaskWhereInput } from "../inputs/TaskWhereInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";
export declare class TaskUpdateOneWithoutIssuesNestedInput {
    create?: TaskCreateWithoutIssuesInput | undefined;
    connectOrCreate?: TaskCreateOrConnectWithoutIssuesInput | undefined;
    upsert?: TaskUpsertWithoutIssuesInput | undefined;
    disconnect?: TaskWhereInput | undefined;
    delete?: TaskWhereInput | undefined;
    connect?: TaskWhereUniqueInput | undefined;
    update?: TaskUpdateToOneWithWhereWithoutIssuesInput | undefined;
}
