import type { GraphQLResolveInfo } from "graphql";
import { FindManyCycleArgs } from "./args/FindManyCycleArgs";
import { Cycle } from "../../../models/Cycle";
export declare class FindManyCycleResolver {
    cycles(ctx: any, info: GraphQLResolveInfo, args: FindManyCycleArgs): Promise<Cycle[]>;
}
