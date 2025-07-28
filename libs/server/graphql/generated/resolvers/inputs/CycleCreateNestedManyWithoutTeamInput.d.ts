import { CycleCreateManyTeamInputEnvelope } from "../inputs/CycleCreateManyTeamInputEnvelope";
import { CycleCreateOrConnectWithoutTeamInput } from "../inputs/CycleCreateOrConnectWithoutTeamInput";
import { CycleCreateWithoutTeamInput } from "../inputs/CycleCreateWithoutTeamInput";
import { CycleWhereUniqueInput } from "../inputs/CycleWhereUniqueInput";
export declare class CycleCreateNestedManyWithoutTeamInput {
    create?: CycleCreateWithoutTeamInput[] | undefined;
    connectOrCreate?: CycleCreateOrConnectWithoutTeamInput[] | undefined;
    createMany?: CycleCreateManyTeamInputEnvelope | undefined;
    connect?: CycleWhereUniqueInput[] | undefined;
}
