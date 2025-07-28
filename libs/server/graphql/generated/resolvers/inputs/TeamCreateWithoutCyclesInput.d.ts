import { TeamMemberCreateNestedManyWithoutTeamInput } from "../inputs/TeamMemberCreateNestedManyWithoutTeamInput";
import { TeamProjectCreateNestedManyWithoutTeamInput } from "../inputs/TeamProjectCreateNestedManyWithoutTeamInput";
export declare class TeamCreateWithoutCyclesInput {
    id?: string | undefined;
    name: string;
    icon: string;
    joined?: boolean | undefined;
    color: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    members?: TeamMemberCreateNestedManyWithoutTeamInput | undefined;
    projects?: TeamProjectCreateNestedManyWithoutTeamInput | undefined;
}
