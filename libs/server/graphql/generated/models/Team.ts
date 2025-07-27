import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Cycle } from "../models/Cycle";
import { TeamMember } from "../models/TeamMember";
import { TeamProject } from "../models/TeamProject";
import { TeamCount } from "../resolvers/outputs/TeamCount";

@TypeGraphQL.ObjectType("Team", {})
export class Team {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  icon!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  joined!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  color!: string;

  members?: TeamMember[];

  projects?: TeamProject[];

  cycles?: Cycle[];

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => TeamCount, {
    nullable: true
  })
  _count?: TeamCount | null;
}
