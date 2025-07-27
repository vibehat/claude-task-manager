import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectCreateManyInput } from "../../../inputs/ProjectCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyProjectArgs {
  @TypeGraphQL.Field(_type => [ProjectCreateManyInput], {
    nullable: false
  })
  data!: ProjectCreateManyInput[];
}
