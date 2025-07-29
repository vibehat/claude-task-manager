import type { GraphQLResolveInfo } from "graphql";
import { FindFirstTeamProjectOrThrowArgs } from "./args/FindFirstTeamProjectOrThrowArgs";
import { TeamProject } from "../../../models/TeamProject";
export declare class FindFirstTeamProjectOrThrowResolver {
    findFirstTeamProjectOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstTeamProjectOrThrowArgs): Promise<TeamProject | null>;
}
