import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnTeamArgs } from "./args/CreateManyAndReturnTeamArgs";
import { CreateManyAndReturnTeam } from "../../outputs/CreateManyAndReturnTeam";
export declare class CreateManyAndReturnTeamResolver {
    createManyAndReturnTeam(ctx: any, info: GraphQLResolveInfo, args: CreateManyAndReturnTeamArgs): Promise<CreateManyAndReturnTeam[]>;
}
