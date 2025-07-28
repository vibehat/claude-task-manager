import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnTeamProjectArgs } from "./args/CreateManyAndReturnTeamProjectArgs";
import { CreateManyAndReturnTeamProject } from "../../outputs/CreateManyAndReturnTeamProject";
export declare class CreateManyAndReturnTeamProjectResolver {
    createManyAndReturnTeamProject(ctx: any, info: GraphQLResolveInfo, args: CreateManyAndReturnTeamProjectArgs): Promise<CreateManyAndReturnTeamProject[]>;
}
