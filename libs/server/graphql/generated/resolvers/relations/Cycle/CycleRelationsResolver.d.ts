import type { GraphQLResolveInfo } from "graphql";
import { Cycle } from "../../../models/Cycle";
import { Issue } from "../../../models/Issue";
import { Team } from "../../../models/Team";
import { CycleIssuesArgs } from "./args/CycleIssuesArgs";
export declare class CycleRelationsResolver {
    team(cycle: Cycle, ctx: any, info: GraphQLResolveInfo): Promise<Team>;
    issues(cycle: Cycle, ctx: any, info: GraphQLResolveInfo, args: CycleIssuesArgs): Promise<Issue[]>;
}
