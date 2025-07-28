import { TeamProjectCreateManyTeamInputEnvelope } from "../inputs/TeamProjectCreateManyTeamInputEnvelope";
import { TeamProjectCreateOrConnectWithoutTeamInput } from "../inputs/TeamProjectCreateOrConnectWithoutTeamInput";
import { TeamProjectCreateWithoutTeamInput } from "../inputs/TeamProjectCreateWithoutTeamInput";
import { TeamProjectScalarWhereInput } from "../inputs/TeamProjectScalarWhereInput";
import { TeamProjectUpdateManyWithWhereWithoutTeamInput } from "../inputs/TeamProjectUpdateManyWithWhereWithoutTeamInput";
import { TeamProjectUpdateWithWhereUniqueWithoutTeamInput } from "../inputs/TeamProjectUpdateWithWhereUniqueWithoutTeamInput";
import { TeamProjectUpsertWithWhereUniqueWithoutTeamInput } from "../inputs/TeamProjectUpsertWithWhereUniqueWithoutTeamInput";
import { TeamProjectWhereUniqueInput } from "../inputs/TeamProjectWhereUniqueInput";
export declare class TeamProjectUpdateManyWithoutTeamNestedInput {
    create?: TeamProjectCreateWithoutTeamInput[] | undefined;
    connectOrCreate?: TeamProjectCreateOrConnectWithoutTeamInput[] | undefined;
    upsert?: TeamProjectUpsertWithWhereUniqueWithoutTeamInput[] | undefined;
    createMany?: TeamProjectCreateManyTeamInputEnvelope | undefined;
    set?: TeamProjectWhereUniqueInput[] | undefined;
    disconnect?: TeamProjectWhereUniqueInput[] | undefined;
    delete?: TeamProjectWhereUniqueInput[] | undefined;
    connect?: TeamProjectWhereUniqueInput[] | undefined;
    update?: TeamProjectUpdateWithWhereUniqueWithoutTeamInput[] | undefined;
    updateMany?: TeamProjectUpdateManyWithWhereWithoutTeamInput[] | undefined;
    deleteMany?: TeamProjectScalarWhereInput[] | undefined;
}
