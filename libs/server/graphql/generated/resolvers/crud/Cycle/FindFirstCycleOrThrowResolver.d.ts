import type { GraphQLResolveInfo } from "graphql";
import { FindFirstCycleOrThrowArgs } from "./args/FindFirstCycleOrThrowArgs";
import { Cycle } from "../../../models/Cycle";
export declare class FindFirstCycleOrThrowResolver {
    findFirstCycleOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstCycleOrThrowArgs): Promise<Cycle | null>;
}
