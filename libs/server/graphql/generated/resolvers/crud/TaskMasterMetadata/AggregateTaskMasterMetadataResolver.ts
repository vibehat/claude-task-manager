import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateTaskMasterMetadataArgs } from "./args/AggregateTaskMasterMetadataArgs";
import { TaskMasterMetadata } from "../../../models/TaskMasterMetadata";
import { AggregateTaskMasterMetadata } from "../../outputs/AggregateTaskMasterMetadata";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TaskMasterMetadata)
export class AggregateTaskMasterMetadataResolver {
  @TypeGraphQL.Query(_returns => AggregateTaskMasterMetadata, {
    nullable: false
  })
  async aggregateTaskMasterMetadata(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTaskMasterMetadataArgs): Promise<AggregateTaskMasterMetadata> {
    return getPrismaFromContext(ctx).taskMasterMetadata.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
