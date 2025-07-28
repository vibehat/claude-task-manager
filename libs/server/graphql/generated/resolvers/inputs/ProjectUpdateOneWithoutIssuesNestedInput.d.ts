import { ProjectCreateOrConnectWithoutIssuesInput } from "../inputs/ProjectCreateOrConnectWithoutIssuesInput";
import { ProjectCreateWithoutIssuesInput } from "../inputs/ProjectCreateWithoutIssuesInput";
import { ProjectUpdateToOneWithWhereWithoutIssuesInput } from "../inputs/ProjectUpdateToOneWithWhereWithoutIssuesInput";
import { ProjectUpsertWithoutIssuesInput } from "../inputs/ProjectUpsertWithoutIssuesInput";
import { ProjectWhereInput } from "../inputs/ProjectWhereInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";
export declare class ProjectUpdateOneWithoutIssuesNestedInput {
    create?: ProjectCreateWithoutIssuesInput | undefined;
    connectOrCreate?: ProjectCreateOrConnectWithoutIssuesInput | undefined;
    upsert?: ProjectUpsertWithoutIssuesInput | undefined;
    disconnect?: ProjectWhereInput | undefined;
    delete?: ProjectWhereInput | undefined;
    connect?: ProjectWhereUniqueInput | undefined;
    update?: ProjectUpdateToOneWithWhereWithoutIssuesInput | undefined;
}
