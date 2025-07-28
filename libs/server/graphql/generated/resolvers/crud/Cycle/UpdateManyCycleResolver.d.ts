import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyCycleArgs } from "./args/UpdateManyCycleArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyCycleResolver {
    updateManyCycle(ctx: any, info: GraphQLResolveInfo, args: UpdateManyCycleArgs): Promise<AffectedRowsOutput>;
}
