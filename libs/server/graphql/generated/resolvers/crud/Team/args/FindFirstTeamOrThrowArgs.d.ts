import { TeamOrderByWithRelationInput } from "../../../inputs/TeamOrderByWithRelationInput";
import { TeamWhereInput } from "../../../inputs/TeamWhereInput";
import { TeamWhereUniqueInput } from "../../../inputs/TeamWhereUniqueInput";
export declare class FindFirstTeamOrThrowArgs {
    where?: TeamWhereInput | undefined;
    orderBy?: TeamOrderByWithRelationInput[] | undefined;
    cursor?: TeamWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "icon" | "joined" | "color" | "createdAt" | "updatedAt"> | undefined;
}
