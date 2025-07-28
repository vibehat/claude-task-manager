import type { GraphQLResolveInfo } from "graphql";
import { FindFirstCycleArgs } from "./args/FindFirstCycleArgs";
import { Cycle } from "../../../models/Cycle";
export declare class FindFirstCycleResolver {
    findFirstCycle(ctx: any, info: GraphQLResolveInfo, args: FindFirstCycleArgs): Promise<Cycle | null>;
}
