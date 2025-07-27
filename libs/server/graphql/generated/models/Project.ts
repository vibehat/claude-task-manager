import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Issue } from "../models/Issue";
import { TeamProject } from "../models/TeamProject";
import { User } from "../models/User";
import { ProjectCount } from "../resolvers/outputs/ProjectCount";

@TypeGraphQL.ObjectType("Project", {})
export class Project {
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
  description?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  color?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  identifier?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  icon?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  percentComplete!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  startDate?: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  health!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  leadId?: string | null;

  issues?: Issue[];

  lead?: User | null;

  teams?: TeamProject[];

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => ProjectCount, {
    nullable: true
  })
  _count?: ProjectCount | null;
}
