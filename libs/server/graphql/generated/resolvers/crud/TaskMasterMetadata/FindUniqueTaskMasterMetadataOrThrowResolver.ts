import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueTaskMasterMetadataOrThrowArgs } from "./args/FindUniqueTaskMasterMetadataOrThrowArgs";
import { TaskMasterMetadata } from "../../../models/TaskMasterMetadata";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TaskMasterMetadata)
export class FindUniqueTaskMasterMetadataOrThrowResolver {
  @TypeGraphQL.Query(_returns => TaskMasterMetadata, {
    nullable: true
  })
  async findUniqueTaskMasterMetadataOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueTaskMasterMetadataOrThrowArgs): Promise<TaskMasterMetadata | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).taskMasterMetadata.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
