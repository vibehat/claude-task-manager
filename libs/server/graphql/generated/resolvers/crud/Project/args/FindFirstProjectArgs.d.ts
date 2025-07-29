import { ProjectOrderByWithRelationInput } from "../../../inputs/ProjectOrderByWithRelationInput";
import { ProjectWhereInput } from "../../../inputs/ProjectWhereInput";
import { ProjectWhereUniqueInput } from "../../../inputs/ProjectWhereUniqueInput";
export declare class FindFirstProjectArgs {
    where?: ProjectWhereInput | undefined;
    orderBy?: ProjectOrderByWithRelationInput[] | undefined;
    cursor?: ProjectWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "description" | "color" | "identifier" | "icon" | "percentComplete" | "startDate" | "health" | "leadId" | "createdAt" | "updatedAt"> | undefined;
}
