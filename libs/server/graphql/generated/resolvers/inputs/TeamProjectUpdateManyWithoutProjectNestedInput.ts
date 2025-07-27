import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamProjectCreateManyProjectInputEnvelope } from "../inputs/TeamProjectCreateManyProjectInputEnvelope";
import { TeamProjectCreateOrConnectWithoutProjectInput } from "../inputs/TeamProjectCreateOrConnectWithoutProjectInput";
import { TeamProjectCreateWithoutProjectInput } from "../inputs/TeamProjectCreateWithoutProjectInput";
import { TeamProjectScalarWhereInput } from "../inputs/TeamProjectScalarWhereInput";
import { TeamProjectUpdateManyWithWhereWithoutProjectInput } from "../inputs/TeamProjectUpdateManyWithWhereWithoutProjectInput";
import { TeamProjectUpdateWithWhereUniqueWithoutProjectInput } from "../inputs/TeamProjectUpdateWithWhereUniqueWithoutProjectInput";
import { TeamProjectUpsertWithWhereUniqueWithoutProjectInput } from "../inputs/TeamProjectUpsertWithWhereUniqueWithoutProjectInput";
import { TeamProjectWhereUniqueInput } from "../inputs/TeamProjectWhereUniqueInput";

@TypeGraphQL.InputType("TeamProjectUpdateManyWithoutProjectNestedInput", {})
export class TeamProjectUpdateManyWithoutProjectNestedInput {
  @TypeGraphQL.Field(_type => [TeamProjectCreateWithoutProjectInput], {
    nullable: true
  })
  create?: TeamProjectCreateWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeamProjectCreateOrConnectWithoutProjectInput], {
    nullable: true
  })
  connectOrCreate?: TeamProjectCreateOrConnectWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeamProjectUpsertWithWhereUniqueWithoutProjectInput], {
    nullable: true
  })
  upsert?: TeamProjectUpsertWithWhereUniqueWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => TeamProjectCreateManyProjectInputEnvelope, {
    nullable: true
  })
  createMany?: TeamProjectCreateManyProjectInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TeamProjectWhereUniqueInput], {
    nullable: true
  })
  set?: TeamProjectWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeamProjectWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TeamProjectWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeamProjectWhereUniqueInput], {
    nullable: true
  })
  delete?: TeamProjectWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeamProjectWhereUniqueInput], {
    nullable: true
  })
  connect?: TeamProjectWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeamProjectUpdateWithWhereUniqueWithoutProjectInput], {
    nullable: true
  })
  update?: TeamProjectUpdateWithWhereUniqueWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeamProjectUpdateManyWithWhereWithoutProjectInput], {
    nullable: true
  })
  updateMany?: TeamProjectUpdateManyWithWhereWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeamProjectScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TeamProjectScalarWhereInput[] | undefined;
}
