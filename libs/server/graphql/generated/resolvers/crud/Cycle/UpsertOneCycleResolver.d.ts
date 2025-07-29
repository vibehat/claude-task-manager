import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneCycleArgs } from "./args/UpsertOneCycleArgs";
import { Cycle } from "../../../models/Cycle";
export declare class UpsertOneCycleResolver {
    upsertOneCycle(ctx: any, info: GraphQLResolveInfo, args: UpsertOneCycleArgs): Promise<Cycle>;
}
