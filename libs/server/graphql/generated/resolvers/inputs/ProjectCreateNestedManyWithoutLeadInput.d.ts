import { ProjectCreateManyLeadInputEnvelope } from "../inputs/ProjectCreateManyLeadInputEnvelope";
import { ProjectCreateOrConnectWithoutLeadInput } from "../inputs/ProjectCreateOrConnectWithoutLeadInput";
import { ProjectCreateWithoutLeadInput } from "../inputs/ProjectCreateWithoutLeadInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";
export declare class ProjectCreateNestedManyWithoutLeadInput {
    create?: ProjectCreateWithoutLeadInput[] | undefined;
    connectOrCreate?: ProjectCreateOrConnectWithoutLeadInput[] | undefined;
    createMany?: ProjectCreateManyLeadInputEnvelope | undefined;
    connect?: ProjectWhereUniqueInput[] | undefined;
}
