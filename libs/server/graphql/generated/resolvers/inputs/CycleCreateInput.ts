import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueCreateNestedManyWithoutCycleInput } from "../inputs/IssueCreateNestedManyWithoutCycleInput";
import { TeamCreateNestedOneWithoutCyclesInput } from "../inputs/TeamCreateNestedOneWithoutCyclesInput";

@TypeGraphQL.InputType("CycleCreateInput", {})
export class CycleCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  number!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  startDate!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  endDate!: Date;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  progress?: number | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => TeamCreateNestedOneWithoutCyclesInput, {
    nullable: false
  })
  team!: TeamCreateNestedOneWithoutCyclesInput;

  @TypeGraphQL.Field(_type => IssueCreateNestedManyWithoutCycleInput, {
    nullable: true
  })
  issues?: IssueCreateNestedManyWithoutCycleInput | undefined;
}
