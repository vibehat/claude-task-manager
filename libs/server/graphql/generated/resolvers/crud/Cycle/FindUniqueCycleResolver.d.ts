import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueCycleArgs } from "./args/FindUniqueCycleArgs";
import { Cycle } from "../../../models/Cycle";
export declare class FindUniqueCycleResolver {
    cycle(ctx: any, info: GraphQLResolveInfo, args: FindUniqueCycleArgs): Promise<Cycle | null>;
}
