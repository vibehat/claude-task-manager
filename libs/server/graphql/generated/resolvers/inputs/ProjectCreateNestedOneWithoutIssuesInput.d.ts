import { ProjectCreateOrConnectWithoutIssuesInput } from "../inputs/ProjectCreateOrConnectWithoutIssuesInput";
import { ProjectCreateWithoutIssuesInput } from "../inputs/ProjectCreateWithoutIssuesInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";
export declare class ProjectCreateNestedOneWithoutIssuesInput {
    create?: ProjectCreateWithoutIssuesInput | undefined;
    connectOrCreate?: ProjectCreateOrConnectWithoutIssuesInput | undefined;
    connect?: ProjectWhereUniqueInput | undefined;
}
