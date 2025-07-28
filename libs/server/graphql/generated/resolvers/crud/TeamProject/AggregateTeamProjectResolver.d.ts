import type { GraphQLResolveInfo } from "graphql";
import { AggregateTeamProjectArgs } from "./args/AggregateTeamProjectArgs";
import { AggregateTeamProject } from "../../outputs/AggregateTeamProject";
export declare class AggregateTeamProjectResolver {
    aggregateTeamProject(ctx: any, info: GraphQLResolveInfo, args: AggregateTeamProjectArgs): Promise<AggregateTeamProject>;
}
