import { TeamMemberOrderByWithRelationInput } from "../../../inputs/TeamMemberOrderByWithRelationInput";
import { TeamMemberWhereInput } from "../../../inputs/TeamMemberWhereInput";
import { TeamMemberWhereUniqueInput } from "../../../inputs/TeamMemberWhereUniqueInput";
export declare class FindFirstTeamMemberOrThrowArgs {
    where?: TeamMemberWhereInput | undefined;
    orderBy?: TeamMemberOrderByWithRelationInput[] | undefined;
    cursor?: TeamMemberWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "teamId" | "userId"> | undefined;
}
