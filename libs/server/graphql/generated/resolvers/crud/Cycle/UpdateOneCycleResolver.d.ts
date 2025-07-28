import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneCycleArgs } from "./args/UpdateOneCycleArgs";
import { Cycle } from "../../../models/Cycle";
export declare class UpdateOneCycleResolver {
    updateOneCycle(ctx: any, info: GraphQLResolveInfo, args: UpdateOneCycleArgs): Promise<Cycle | null>;
}
