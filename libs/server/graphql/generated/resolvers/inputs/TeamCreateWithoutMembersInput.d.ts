import { CycleCreateNestedManyWithoutTeamInput } from "../inputs/CycleCreateNestedManyWithoutTeamInput";
import { TeamProjectCreateNestedManyWithoutTeamInput } from "../inputs/TeamProjectCreateNestedManyWithoutTeamInput";
export declare class TeamCreateWithoutMembersInput {
    id?: string | undefined;
    name: string;
    icon: string;
    joined?: boolean | undefined;
    color: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    projects?: TeamProjectCreateNestedManyWithoutTeamInput | undefined;
    cycles?: CycleCreateNestedManyWithoutTeamInput | undefined;
}
