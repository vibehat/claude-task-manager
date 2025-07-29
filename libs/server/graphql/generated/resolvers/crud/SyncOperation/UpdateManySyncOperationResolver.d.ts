import type { GraphQLResolveInfo } from "graphql";
import { UpdateManySyncOperationArgs } from "./args/UpdateManySyncOperationArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManySyncOperationResolver {
    updateManySyncOperation(ctx: any, info: GraphQLResolveInfo, args: UpdateManySyncOperationArgs): Promise<AffectedRowsOutput>;
}
