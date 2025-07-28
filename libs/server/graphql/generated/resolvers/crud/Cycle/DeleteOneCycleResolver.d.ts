import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneCycleArgs } from "./args/DeleteOneCycleArgs";
import { Cycle } from "../../../models/Cycle";
export declare class DeleteOneCycleResolver {
    deleteOneCycle(ctx: any, info: GraphQLResolveInfo, args: DeleteOneCycleArgs): Promise<Cycle | null>;
}
