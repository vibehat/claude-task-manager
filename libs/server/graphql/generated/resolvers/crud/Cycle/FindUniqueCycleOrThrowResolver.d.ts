import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueCycleOrThrowArgs } from "./args/FindUniqueCycleOrThrowArgs";
import { Cycle } from "../../../models/Cycle";
export declare class FindUniqueCycleOrThrowResolver {
    getCycle(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCycleOrThrowArgs): Promise<Cycle | null>;
}
