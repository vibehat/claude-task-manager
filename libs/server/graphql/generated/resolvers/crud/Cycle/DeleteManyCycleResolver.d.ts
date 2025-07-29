import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyCycleArgs } from "./args/DeleteManyCycleArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyCycleResolver {
    deleteManyCycle(ctx: any, info: GraphQLResolveInfo, args: DeleteManyCycleArgs): Promise<AffectedRowsOutput>;
}
