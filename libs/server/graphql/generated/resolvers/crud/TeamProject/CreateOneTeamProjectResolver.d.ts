import type { GraphQLResolveInfo } from "graphql";
import { CreateOneTeamProjectArgs } from "./args/CreateOneTeamProjectArgs";
import { TeamProject } from "../../../models/TeamProject";
export declare class CreateOneTeamProjectResolver {
    createOneTeamProject(ctx: any, info: GraphQLResolveInfo, args: CreateOneTeamProjectArgs): Promise<TeamProject>;
}
