import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnTaskMasterMetadataArgs } from "./args/CreateManyAndReturnTaskMasterMetadataArgs";
import { TaskMasterMetadata } from "../../../models/TaskMasterMetadata";
import { CreateManyAndReturnTaskMasterMetadata } from "../../outputs/CreateManyAndReturnTaskMasterMetadata";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TaskMasterMetadata)
export class CreateManyAndReturnTaskMasterMetadataResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnTaskMasterMetadata], {
    nullable: false
  })
  async createManyAndReturnTaskMasterMetadata(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnTaskMasterMetadataArgs): Promise<CreateManyAndReturnTaskMasterMetadata[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).taskMasterMetadata.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
