import type { GraphQLResolveInfo } from "graphql";
import { CreateManyTaskArgs } from "./args/CreateManyTaskArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyTaskResolver {
    createManyTask(ctx: any, info: GraphQLResolveInfo, args: CreateManyTaskArgs): Promise<AffectedRowsOutput>;
}
