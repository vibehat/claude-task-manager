import { TaskCreateOrConnectWithoutIssuesInput } from "../inputs/TaskCreateOrConnectWithoutIssuesInput";
import { TaskCreateWithoutIssuesInput } from "../inputs/TaskCreateWithoutIssuesInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";
export declare class TaskCreateNestedOneWithoutIssuesInput {
    create?: TaskCreateWithoutIssuesInput | undefined;
    connectOrCreate?: TaskCreateOrConnectWithoutIssuesInput | undefined;
    connect?: TaskWhereUniqueInput | undefined;
}
