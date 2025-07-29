import { TeamProjectOrderByWithRelationInput } from "../../../inputs/TeamProjectOrderByWithRelationInput";
import { TeamProjectWhereInput } from "../../../inputs/TeamProjectWhereInput";
import { TeamProjectWhereUniqueInput } from "../../../inputs/TeamProjectWhereUniqueInput";
export declare class ProjectTeamsArgs {
    where?: TeamProjectWhereInput | undefined;
    orderBy?: TeamProjectOrderByWithRelationInput[] | undefined;
    cursor?: TeamProjectWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "teamId" | "projectId"> | undefined;
}
