import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamCreateOrConnectWithoutMembersInput } from "../inputs/TeamCreateOrConnectWithoutMembersInput";
import { TeamCreateWithoutMembersInput } from "../inputs/TeamCreateWithoutMembersInput";
import { TeamUpdateToOneWithWhereWithoutMembersInput } from "../inputs/TeamUpdateToOneWithWhereWithoutMembersInput";
import { TeamUpsertWithoutMembersInput } from "../inputs/TeamUpsertWithoutMembersInput";
import { TeamWhereUniqueInput } from "../inputs/TeamWhereUniqueInput";

@TypeGraphQL.InputType("TeamUpdateOneRequiredWithoutMembersNestedInput", {})
export class TeamUpdateOneRequiredWithoutMembersNestedInput {
  @TypeGraphQL.Field(_type => TeamCreateWithoutMembersInput, {
    nullable: true
  })
  create?: TeamCreateWithoutMembersInput | undefined;

  @TypeGraphQL.Field(_type => TeamCreateOrConnectWithoutMembersInput, {
    nullable: true
  })
  connectOrCreate?: TeamCreateOrConnectWithoutMembersInput | undefined;

  @TypeGraphQL.Field(_type => TeamUpsertWithoutMembersInput, {
    nullable: true
  })
  upsert?: TeamUpsertWithoutMembersInput | undefined;

  @TypeGraphQL.Field(_type => TeamWhereUniqueInput, {
    nullable: true
  })
  connect?: TeamWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TeamUpdateToOneWithWhereWithoutMembersInput, {
    nullable: true
  })
  update?: TeamUpdateToOneWithWhereWithoutMembersInput | undefined;
}
