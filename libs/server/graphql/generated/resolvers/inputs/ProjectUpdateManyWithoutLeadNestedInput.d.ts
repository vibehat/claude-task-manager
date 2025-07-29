import { ProjectCreateManyLeadInputEnvelope } from "../inputs/ProjectCreateManyLeadInputEnvelope";
import { ProjectCreateOrConnectWithoutLeadInput } from "../inputs/ProjectCreateOrConnectWithoutLeadInput";
import { ProjectCreateWithoutLeadInput } from "../inputs/ProjectCreateWithoutLeadInput";
import { ProjectScalarWhereInput } from "../inputs/ProjectScalarWhereInput";
import { ProjectUpdateManyWithWhereWithoutLeadInput } from "../inputs/ProjectUpdateManyWithWhereWithoutLeadInput";
import { ProjectUpdateWithWhereUniqueWithoutLeadInput } from "../inputs/ProjectUpdateWithWhereUniqueWithoutLeadInput";
import { ProjectUpsertWithWhereUniqueWithoutLeadInput } from "../inputs/ProjectUpsertWithWhereUniqueWithoutLeadInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";
export declare class ProjectUpdateManyWithoutLeadNestedInput {
    create?: ProjectCreateWithoutLeadInput[] | undefined;
    connectOrCreate?: ProjectCreateOrConnectWithoutLeadInput[] | undefined;
    upsert?: ProjectUpsertWithWhereUniqueWithoutLeadInput[] | undefined;
    createMany?: ProjectCreateManyLeadInputEnvelope | undefined;
    set?: ProjectWhereUniqueInput[] | undefined;
    disconnect?: ProjectWhereUniqueInput[] | undefined;
    delete?: ProjectWhereUniqueInput[] | undefined;
    connect?: ProjectWhereUniqueInput[] | undefined;
    update?: ProjectUpdateWithWhereUniqueWithoutLeadInput[] | undefined;
    updateMany?: ProjectUpdateManyWithWhereWithoutLeadInput[] | undefined;
    deleteMany?: ProjectScalarWhereInput[] | undefined;
}
