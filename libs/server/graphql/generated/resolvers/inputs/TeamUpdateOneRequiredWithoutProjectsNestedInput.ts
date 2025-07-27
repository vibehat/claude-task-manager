import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamCreateOrConnectWithoutProjectsInput } from "../inputs/TeamCreateOrConnectWithoutProjectsInput";
import { TeamCreateWithoutProjectsInput } from "../inputs/TeamCreateWithoutProjectsInput";
import { TeamUpdateToOneWithWhereWithoutProjectsInput } from "../inputs/TeamUpdateToOneWithWhereWithoutProjectsInput";
import { TeamUpsertWithoutProjectsInput } from "../inputs/TeamUpsertWithoutProjectsInput";
import { TeamWhereUniqueInput } from "../inputs/TeamWhereUniqueInput";

@TypeGraphQL.InputType("TeamUpdateOneRequiredWithoutProjectsNestedInput", {})
export class TeamUpdateOneRequiredWithoutProjectsNestedInput {
  @TypeGraphQL.Field(_type => TeamCreateWithoutProjectsInput, {
    nullable: true
  })
  create?: TeamCreateWithoutProjectsInput | undefined;

  @TypeGraphQL.Field(_type => TeamCreateOrConnectWithoutProjectsInput, {
    nullable: true
  })
  connectOrCreate?: TeamCreateOrConnectWithoutProjectsInput | undefined;

  @TypeGraphQL.Field(_type => TeamUpsertWithoutProjectsInput, {
    nullable: true
  })
  upsert?: TeamUpsertWithoutProjectsInput | undefined;

  @TypeGraphQL.Field(_type => TeamWhereUniqueInput, {
    nullable: true
  })
  connect?: TeamWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TeamUpdateToOneWithWhereWithoutProjectsInput, {
    nullable: true
  })
  update?: TeamUpdateToOneWithWhereWithoutProjectsInput | undefined;
}
