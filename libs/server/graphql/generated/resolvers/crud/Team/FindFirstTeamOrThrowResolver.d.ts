import type { GraphQLResolveInfo } from "graphql";
import { FindFirstTeamOrThrowArgs } from "./args/FindFirstTeamOrThrowArgs";
import { Team } from "../../../models/Team";
export declare class FindFirstTeamOrThrowResolver {
    findFirstTeamOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstTeamOrThrowArgs): Promise<Team | null>;
}
