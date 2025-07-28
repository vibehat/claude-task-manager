import { TeamMemberCreateManyUserInputEnvelope } from "../inputs/TeamMemberCreateManyUserInputEnvelope";
import { TeamMemberCreateOrConnectWithoutUserInput } from "../inputs/TeamMemberCreateOrConnectWithoutUserInput";
import { TeamMemberCreateWithoutUserInput } from "../inputs/TeamMemberCreateWithoutUserInput";
import { TeamMemberWhereUniqueInput } from "../inputs/TeamMemberWhereUniqueInput";
export declare class TeamMemberCreateNestedManyWithoutUserInput {
    create?: TeamMemberCreateWithoutUserInput[] | undefined;
    connectOrCreate?: TeamMemberCreateOrConnectWithoutUserInput[] | undefined;
    createMany?: TeamMemberCreateManyUserInputEnvelope | undefined;
    connect?: TeamMemberWhereUniqueInput[] | undefined;
}
