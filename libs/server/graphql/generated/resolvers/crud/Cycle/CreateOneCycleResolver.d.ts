import type { GraphQLResolveInfo } from "graphql";
import { CreateOneCycleArgs } from "./args/CreateOneCycleArgs";
import { Cycle } from "../../../models/Cycle";
export declare class CreateOneCycleResolver {
    createOneCycle(ctx: any, info: GraphQLResolveInfo, args: CreateOneCycleArgs): Promise<Cycle>;
}
