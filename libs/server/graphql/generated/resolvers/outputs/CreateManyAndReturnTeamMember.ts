import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Team } from "../../models/Team";
import { User } from "../../models/User";

@TypeGraphQL.ObjectType("CreateManyAndReturnTeamMember", {})
export class CreateManyAndReturnTeamMember {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  teamId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => Team, {
    nullable: false
  })
  team!: Team;

  @TypeGraphQL.Field(_type => User, {
    nullable: false
  })
  user!: User;
}
