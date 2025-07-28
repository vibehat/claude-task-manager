import type { GraphQLResolveInfo } from "graphql";
import { CreateManyCycleArgs } from "./args/CreateManyCycleArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyCycleResolver {
    createManyCycle(ctx: any, info: GraphQLResolveInfo, args: CreateManyCycleArgs): Promise<AffectedRowsOutput>;
}
