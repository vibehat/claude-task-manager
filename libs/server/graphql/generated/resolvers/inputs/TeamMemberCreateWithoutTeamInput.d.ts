import { UserCreateNestedOneWithoutTeamsInput } from "../inputs/UserCreateNestedOneWithoutTeamsInput";
export declare class TeamMemberCreateWithoutTeamInput {
    id?: string | undefined;
    user: UserCreateNestedOneWithoutTeamsInput;
}
