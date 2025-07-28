import { TeamProjectCreateManyTeamInputEnvelope } from "../inputs/TeamProjectCreateManyTeamInputEnvelope";
import { TeamProjectCreateOrConnectWithoutTeamInput } from "../inputs/TeamProjectCreateOrConnectWithoutTeamInput";
import { TeamProjectCreateWithoutTeamInput } from "../inputs/TeamProjectCreateWithoutTeamInput";
import { TeamProjectWhereUniqueInput } from "../inputs/TeamProjectWhereUniqueInput";
export declare class TeamProjectCreateNestedManyWithoutTeamInput {
    create?: TeamProjectCreateWithoutTeamInput[] | undefined;
    connectOrCreate?: TeamProjectCreateOrConnectWithoutTeamInput[] | undefined;
    createMany?: TeamProjectCreateManyTeamInputEnvelope | undefined;
    connect?: TeamProjectWhereUniqueInput[] | undefined;
}
