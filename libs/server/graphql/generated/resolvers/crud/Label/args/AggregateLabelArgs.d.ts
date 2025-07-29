import { LabelOrderByWithRelationInput } from "../../../inputs/LabelOrderByWithRelationInput";
import { LabelWhereInput } from "../../../inputs/LabelWhereInput";
import { LabelWhereUniqueInput } from "../../../inputs/LabelWhereUniqueInput";
export declare class AggregateLabelArgs {
    where?: LabelWhereInput | undefined;
    orderBy?: LabelOrderByWithRelationInput[] | undefined;
    cursor?: LabelWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
