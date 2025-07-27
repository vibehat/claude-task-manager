import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CreateManyAndReturnProjectLeadArgs } from "./args/CreateManyAndReturnProjectLeadArgs";
import { User } from "../../models/User";

@TypeGraphQL.ObjectType("CreateManyAndReturnProject", {})
export class CreateManyAndReturnProject {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  color!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  identifier!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  icon!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  percentComplete!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  startDate!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  health!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  leadId!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  lead!: User | null;

  @TypeGraphQL.Field(_type => User, {
    name: "lead",
    nullable: true
  })
  getLead(@TypeGraphQL.Root() root: CreateManyAndReturnProject, @TypeGraphQL.Args() args: CreateManyAndReturnProjectLeadArgs): User | null {
    return root.lead;
  }
}
