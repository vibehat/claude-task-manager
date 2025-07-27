import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamCreateOrConnectWithoutMembersInput } from "../inputs/TeamCreateOrConnectWithoutMembersInput";
import { TeamCreateWithoutMembersInput } from "../inputs/TeamCreateWithoutMembersInput";
import { TeamWhereUniqueInput } from "../inputs/TeamWhereUniqueInput";

@TypeGraphQL.InputType("TeamCreateNestedOneWithoutMembersInput", {})
export class TeamCreateNestedOneWithoutMembersInput {
  @TypeGraphQL.Field(_type => TeamCreateWithoutMembersInput, {
    nullable: true
  })
  create?: TeamCreateWithoutMembersInput | undefined;

  @TypeGraphQL.Field(_type => TeamCreateOrConnectWithoutMembersInput, {
    nullable: true
  })
  connectOrCreate?: TeamCreateOrConnectWithoutMembersInput | undefined;

  @TypeGraphQL.Field(_type => TeamWhereUniqueInput, {
    nullable: true
  })
  connect?: TeamWhereUniqueInput | undefined;
}
