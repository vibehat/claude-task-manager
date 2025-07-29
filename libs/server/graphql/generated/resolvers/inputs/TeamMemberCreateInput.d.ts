import { TeamCreateNestedOneWithoutMembersInput } from "../inputs/TeamCreateNestedOneWithoutMembersInput";
import { UserCreateNestedOneWithoutTeamsInput } from "../inputs/UserCreateNestedOneWithoutTeamsInput";
export declare class TeamMemberCreateInput {
    id?: string | undefined;
    team: TeamCreateNestedOneWithoutMembersInput;
    user: UserCreateNestedOneWithoutTeamsInput;
}
