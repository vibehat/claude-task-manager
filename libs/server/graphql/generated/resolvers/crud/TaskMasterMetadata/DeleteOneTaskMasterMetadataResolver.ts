import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneTaskMasterMetadataArgs } from "./args/DeleteOneTaskMasterMetadataArgs";
import { TaskMasterMetadata } from "../../../models/TaskMasterMetadata";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TaskMasterMetadata)
export class DeleteOneTaskMasterMetadataResolver {
  @TypeGraphQL.Mutation(_returns => TaskMasterMetadata, {
    nullable: true
  })
  async deleteOneTaskMasterMetadata(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneTaskMasterMetadataArgs): Promise<TaskMasterMetadata | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).taskMasterMetadata.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
