import { IssueLabelOrderByWithRelationInput } from "../../../inputs/IssueLabelOrderByWithRelationInput";
import { IssueLabelWhereInput } from "../../../inputs/IssueLabelWhereInput";
import { IssueLabelWhereUniqueInput } from "../../../inputs/IssueLabelWhereUniqueInput";
export declare class FindManyIssueLabelArgs {
    where?: IssueLabelWhereInput | undefined;
    orderBy?: IssueLabelOrderByWithRelationInput[] | undefined;
    cursor?: IssueLabelWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "issueId" | "labelId"> | undefined;
}
