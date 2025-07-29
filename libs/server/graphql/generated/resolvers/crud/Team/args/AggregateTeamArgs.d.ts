import { TeamOrderByWithRelationInput } from "../../../inputs/TeamOrderByWithRelationInput";
import { TeamWhereInput } from "../../../inputs/TeamWhereInput";
import { TeamWhereUniqueInput } from "../../../inputs/TeamWhereUniqueInput";
export declare class AggregateTeamArgs {
    where?: TeamWhereInput | undefined;
    orderBy?: TeamOrderByWithRelationInput[] | undefined;
    cursor?: TeamWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
