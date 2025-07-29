import type { GraphQLResolveInfo } from "graphql";
import { CreateManySyncOperationArgs } from "./args/CreateManySyncOperationArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManySyncOperationResolver {
    createManySyncOperation(ctx: any, info: GraphQLResolveInfo, args: CreateManySyncOperationArgs): Promise<AffectedRowsOutput>;
}
