import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnLabelArgs } from "./args/CreateManyAndReturnLabelArgs";
import { Label } from "../../../models/Label";
import { CreateManyAndReturnLabel } from "../../outputs/CreateManyAndReturnLabel";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Label)
export class CreateManyAndReturnLabelResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnLabel], {
    nullable: false
  })
  async createManyAndReturnLabel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnLabelArgs): Promise<CreateManyAndReturnLabel[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).label.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
