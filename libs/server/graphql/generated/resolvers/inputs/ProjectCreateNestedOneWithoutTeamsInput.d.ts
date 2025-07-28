import { ProjectCreateOrConnectWithoutTeamsInput } from "../inputs/ProjectCreateOrConnectWithoutTeamsInput";
import { ProjectCreateWithoutTeamsInput } from "../inputs/ProjectCreateWithoutTeamsInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";
export declare class ProjectCreateNestedOneWithoutTeamsInput {
    create?: ProjectCreateWithoutTeamsInput | undefined;
    connectOrCreate?: ProjectCreateOrConnectWithoutTeamsInput | undefined;
    connect?: ProjectWhereUniqueInput | undefined;
}
