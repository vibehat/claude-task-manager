import { ProjectOrderByWithAggregationInput } from "../../../inputs/ProjectOrderByWithAggregationInput";
import { ProjectScalarWhereWithAggregatesInput } from "../../../inputs/ProjectScalarWhereWithAggregatesInput";
import { ProjectWhereInput } from "../../../inputs/ProjectWhereInput";
export declare class GroupByProjectArgs {
    where?: ProjectWhereInput | undefined;
    orderBy?: ProjectOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "description" | "color" | "identifier" | "icon" | "percentComplete" | "startDate" | "health" | "leadId" | "createdAt" | "updatedAt">;
    having?: ProjectScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
