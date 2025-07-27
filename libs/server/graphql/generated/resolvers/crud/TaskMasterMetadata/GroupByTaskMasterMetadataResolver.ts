import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByTaskMasterMetadataArgs } from "./args/GroupByTaskMasterMetadataArgs";
import { TaskMasterMetadata } from "../../../models/TaskMasterMetadata";
import { TaskMasterMetadataGroupBy } from "../../outputs/TaskMasterMetadataGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TaskMasterMetadata)
export class GroupByTaskMasterMetadataResolver {
  @TypeGraphQL.Query(_returns => [TaskMasterMetadataGroupBy], {
    nullable: false
  })
  async groupByTaskMasterMetadata(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByTaskMasterMetadataArgs): Promise<TaskMasterMetadataGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).taskMasterMetadata.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
