import { CycleCreateManyTeamInputEnvelope } from "../inputs/CycleCreateManyTeamInputEnvelope";
import { CycleCreateOrConnectWithoutTeamInput } from "../inputs/CycleCreateOrConnectWithoutTeamInput";
import { CycleCreateWithoutTeamInput } from "../inputs/CycleCreateWithoutTeamInput";
import { CycleScalarWhereInput } from "../inputs/CycleScalarWhereInput";
import { CycleUpdateManyWithWhereWithoutTeamInput } from "../inputs/CycleUpdateManyWithWhereWithoutTeamInput";
import { CycleUpdateWithWhereUniqueWithoutTeamInput } from "../inputs/CycleUpdateWithWhereUniqueWithoutTeamInput";
import { CycleUpsertWithWhereUniqueWithoutTeamInput } from "../inputs/CycleUpsertWithWhereUniqueWithoutTeamInput";
import { CycleWhereUniqueInput } from "../inputs/CycleWhereUniqueInput";
export declare class CycleUpdateManyWithoutTeamNestedInput {
    create?: CycleCreateWithoutTeamInput[] | undefined;
    connectOrCreate?: CycleCreateOrConnectWithoutTeamInput[] | undefined;
    upsert?: CycleUpsertWithWhereUniqueWithoutTeamInput[] | undefined;
    createMany?: CycleCreateManyTeamInputEnvelope | undefined;
    set?: CycleWhereUniqueInput[] | undefined;
    disconnect?: CycleWhereUniqueInput[] | undefined;
    delete?: CycleWhereUniqueInput[] | undefined;
    connect?: CycleWhereUniqueInput[] | undefined;
    update?: CycleUpdateWithWhereUniqueWithoutTeamInput[] | undefined;
    updateMany?: CycleUpdateManyWithWhereWithoutTeamInput[] | undefined;
    deleteMany?: CycleScalarWhereInput[] | undefined;
}
