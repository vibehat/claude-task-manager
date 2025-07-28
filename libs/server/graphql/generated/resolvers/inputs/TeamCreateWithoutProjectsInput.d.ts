import { CycleCreateNestedManyWithoutTeamInput } from "../inputs/CycleCreateNestedManyWithoutTeamInput";
import { TeamMemberCreateNestedManyWithoutTeamInput } from "../inputs/TeamMemberCreateNestedManyWithoutTeamInput";
export declare class TeamCreateWithoutProjectsInput {
    id?: string | undefined;
    name: string;
    icon: string;
    joined?: boolean | undefined;
    color: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    members?: TeamMemberCreateNestedManyWithoutTeamInput | undefined;
    cycles?: CycleCreateNestedManyWithoutTeamInput | undefined;
}
