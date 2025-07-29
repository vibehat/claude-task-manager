import { TeamCreateWithoutMembersInput } from "../inputs/TeamCreateWithoutMembersInput";
import { TeamUpdateWithoutMembersInput } from "../inputs/TeamUpdateWithoutMembersInput";
import { TeamWhereInput } from "../inputs/TeamWhereInput";
export declare class TeamUpsertWithoutMembersInput {
    update: TeamUpdateWithoutMembersInput;
    create: TeamCreateWithoutMembersInput;
    where?: TeamWhereInput | undefined;
}
