import { TeamProjectOrderByWithRelationInput } from "../../../inputs/TeamProjectOrderByWithRelationInput";
import { TeamProjectWhereInput } from "../../../inputs/TeamProjectWhereInput";
import { TeamProjectWhereUniqueInput } from "../../../inputs/TeamProjectWhereUniqueInput";
export declare class AggregateTeamProjectArgs {
    where?: TeamProjectWhereInput | undefined;
    orderBy?: TeamProjectOrderByWithRelationInput[] | undefined;
    cursor?: TeamProjectWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
