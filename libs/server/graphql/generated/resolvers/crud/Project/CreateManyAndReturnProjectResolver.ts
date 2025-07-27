import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnProjectArgs } from "./args/CreateManyAndReturnProjectArgs";
import { Project } from "../../../models/Project";
import { CreateManyAndReturnProject } from "../../outputs/CreateManyAndReturnProject";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Project)
export class CreateManyAndReturnProjectResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnProject], {
    nullable: false
  })
  async createManyAndReturnProject(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnProjectArgs): Promise<CreateManyAndReturnProject[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).project.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
