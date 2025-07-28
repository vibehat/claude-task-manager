import { TeamMemberCreateManyTeamInputEnvelope } from "../inputs/TeamMemberCreateManyTeamInputEnvelope";
import { TeamMemberCreateOrConnectWithoutTeamInput } from "../inputs/TeamMemberCreateOrConnectWithoutTeamInput";
import { TeamMemberCreateWithoutTeamInput } from "../inputs/TeamMemberCreateWithoutTeamInput";
import { TeamMemberScalarWhereInput } from "../inputs/TeamMemberScalarWhereInput";
import { TeamMemberUpdateManyWithWhereWithoutTeamInput } from "../inputs/TeamMemberUpdateManyWithWhereWithoutTeamInput";
import { TeamMemberUpdateWithWhereUniqueWithoutTeamInput } from "../inputs/TeamMemberUpdateWithWhereUniqueWithoutTeamInput";
import { TeamMemberUpsertWithWhereUniqueWithoutTeamInput } from "../inputs/TeamMemberUpsertWithWhereUniqueWithoutTeamInput";
import { TeamMemberWhereUniqueInput } from "../inputs/TeamMemberWhereUniqueInput";
export declare class TeamMemberUpdateManyWithoutTeamNestedInput {
    create?: TeamMemberCreateWithoutTeamInput[] | undefined;
    connectOrCreate?: TeamMemberCreateOrConnectWithoutTeamInput[] | undefined;
    upsert?: TeamMemberUpsertWithWhereUniqueWithoutTeamInput[] | undefined;
    createMany?: TeamMemberCreateManyTeamInputEnvelope | undefined;
    set?: TeamMemberWhereUniqueInput[] | undefined;
    disconnect?: TeamMemberWhereUniqueInput[] | undefined;
    delete?: TeamMemberWhereUniqueInput[] | undefined;
    connect?: TeamMemberWhereUniqueInput[] | undefined;
    update?: TeamMemberUpdateWithWhereUniqueWithoutTeamInput[] | undefined;
    updateMany?: TeamMemberUpdateManyWithWhereWithoutTeamInput[] | undefined;
    deleteMany?: TeamMemberScalarWhereInput[] | undefined;
}
