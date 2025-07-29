import { CycleCreateNestedManyWithoutTeamInput } from "../inputs/CycleCreateNestedManyWithoutTeamInput";
import { TeamMemberCreateNestedManyWithoutTeamInput } from "../inputs/TeamMemberCreateNestedManyWithoutTeamInput";
import { TeamProjectCreateNestedManyWithoutTeamInput } from "../inputs/TeamProjectCreateNestedManyWithoutTeamInput";
export declare class TeamCreateInput {
    id?: string | undefined;
    name: string;
    icon: string;
    joined?: boolean | undefined;
    color: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    members?: TeamMemberCreateNestedManyWithoutTeamInput | undefined;
    projects?: TeamProjectCreateNestedManyWithoutTeamInput | undefined;
    cycles?: CycleCreateNestedManyWithoutTeamInput | undefined;
}
