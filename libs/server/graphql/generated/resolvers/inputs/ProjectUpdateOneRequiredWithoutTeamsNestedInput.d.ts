import { ProjectCreateOrConnectWithoutTeamsInput } from "../inputs/ProjectCreateOrConnectWithoutTeamsInput";
import { ProjectCreateWithoutTeamsInput } from "../inputs/ProjectCreateWithoutTeamsInput";
import { ProjectUpdateToOneWithWhereWithoutTeamsInput } from "../inputs/ProjectUpdateToOneWithWhereWithoutTeamsInput";
import { ProjectUpsertWithoutTeamsInput } from "../inputs/ProjectUpsertWithoutTeamsInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";
export declare class ProjectUpdateOneRequiredWithoutTeamsNestedInput {
    create?: ProjectCreateWithoutTeamsInput | undefined;
    connectOrCreate?: ProjectCreateOrConnectWithoutTeamsInput | undefined;
    upsert?: ProjectUpsertWithoutTeamsInput | undefined;
    connect?: ProjectWhereUniqueInput | undefined;
    update?: ProjectUpdateToOneWithWhereWithoutTeamsInput | undefined;
}
