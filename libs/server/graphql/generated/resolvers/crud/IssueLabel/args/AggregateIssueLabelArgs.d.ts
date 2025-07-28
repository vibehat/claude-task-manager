import { IssueLabelOrderByWithRelationInput } from "../../../inputs/IssueLabelOrderByWithRelationInput";
import { IssueLabelWhereInput } from "../../../inputs/IssueLabelWhereInput";
import { IssueLabelWhereUniqueInput } from "../../../inputs/IssueLabelWhereUniqueInput";
export declare class AggregateIssueLabelArgs {
    where?: IssueLabelWhereInput | undefined;
    orderBy?: IssueLabelOrderByWithRelationInput[] | undefined;
    cursor?: IssueLabelWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
