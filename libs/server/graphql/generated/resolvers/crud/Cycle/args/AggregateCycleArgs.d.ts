import { CycleOrderByWithRelationInput } from "../../../inputs/CycleOrderByWithRelationInput";
import { CycleWhereInput } from "../../../inputs/CycleWhereInput";
import { CycleWhereUniqueInput } from "../../../inputs/CycleWhereUniqueInput";
export declare class AggregateCycleArgs {
    where?: CycleWhereInput | undefined;
    orderBy?: CycleOrderByWithRelationInput[] | undefined;
    cursor?: CycleWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
