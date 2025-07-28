import type { GraphQLResolveInfo } from "graphql";
import { CreateManyProjectArgs } from "./args/CreateManyProjectArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyProjectResolver {
    createManyProject(ctx: any, info: GraphQLResolveInfo, args: CreateManyProjectArgs): Promise<AffectedRowsOutput>;
}
