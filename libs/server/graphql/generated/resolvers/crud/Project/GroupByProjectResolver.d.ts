import type { GraphQLResolveInfo } from "graphql";
import { GroupByProjectArgs } from "./args/GroupByProjectArgs";
import { ProjectGroupBy } from "../../outputs/ProjectGroupBy";
export declare class GroupByProjectResolver {
    groupByProject(ctx: any, info: GraphQLResolveInfo, args: GroupByProjectArgs): Promise<ProjectGroupBy[]>;
}
