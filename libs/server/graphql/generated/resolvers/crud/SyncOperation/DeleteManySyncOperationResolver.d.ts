import type { GraphQLResolveInfo } from "graphql";
import { DeleteManySyncOperationArgs } from "./args/DeleteManySyncOperationArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManySyncOperationResolver {
    deleteManySyncOperation(ctx: any, info: GraphQLResolveInfo, args: DeleteManySyncOperationArgs): Promise<AffectedRowsOutput>;
}
