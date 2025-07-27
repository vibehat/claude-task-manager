import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamCreateOrConnectWithoutCyclesInput } from "../inputs/TeamCreateOrConnectWithoutCyclesInput";
import { TeamCreateWithoutCyclesInput } from "../inputs/TeamCreateWithoutCyclesInput";
import { TeamUpdateToOneWithWhereWithoutCyclesInput } from "../inputs/TeamUpdateToOneWithWhereWithoutCyclesInput";
import { TeamUpsertWithoutCyclesInput } from "../inputs/TeamUpsertWithoutCyclesInput";
import { TeamWhereUniqueInput } from "../inputs/TeamWhereUniqueInput";

@TypeGraphQL.InputType("TeamUpdateOneRequiredWithoutCyclesNestedInput", {})
export class TeamUpdateOneRequiredWithoutCyclesNestedInput {
  @TypeGraphQL.Field(_type => TeamCreateWithoutCyclesInput, {
    nullable: true
  })
  create?: TeamCreateWithoutCyclesInput | undefined;

  @TypeGraphQL.Field(_type => TeamCreateOrConnectWithoutCyclesInput, {
    nullable: true
  })
  connectOrCreate?: TeamCreateOrConnectWithoutCyclesInput | undefined;

  @TypeGraphQL.Field(_type => TeamUpsertWithoutCyclesInput, {
    nullable: true
  })
  upsert?: TeamUpsertWithoutCyclesInput | undefined;

  @TypeGraphQL.Field(_type => TeamWhereUniqueInput, {
    nullable: true
  })
  connect?: TeamWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TeamUpdateToOneWithWhereWithoutCyclesInput, {
    nullable: true
  })
  update?: TeamUpdateToOneWithWhereWithoutCyclesInput | undefined;
}
