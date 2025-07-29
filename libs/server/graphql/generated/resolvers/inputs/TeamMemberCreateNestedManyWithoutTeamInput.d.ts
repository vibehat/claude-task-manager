import { TeamMemberCreateManyTeamInputEnvelope } from "../inputs/TeamMemberCreateManyTeamInputEnvelope";
import { TeamMemberCreateOrConnectWithoutTeamInput } from "../inputs/TeamMemberCreateOrConnectWithoutTeamInput";
import { TeamMemberCreateWithoutTeamInput } from "../inputs/TeamMemberCreateWithoutTeamInput";
import { TeamMemberWhereUniqueInput } from "../inputs/TeamMemberWhereUniqueInput";
export declare class TeamMemberCreateNestedManyWithoutTeamInput {
    create?: TeamMemberCreateWithoutTeamInput[] | undefined;
    connectOrCreate?: TeamMemberCreateOrConnectWithoutTeamInput[] | undefined;
    createMany?: TeamMemberCreateManyTeamInputEnvelope | undefined;
    connect?: TeamMemberWhereUniqueInput[] | undefined;
}
