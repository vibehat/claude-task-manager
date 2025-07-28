import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnCycleArgs } from "./args/CreateManyAndReturnCycleArgs";
import { CreateManyAndReturnCycle } from "../../outputs/CreateManyAndReturnCycle";
export declare class CreateManyAndReturnCycleResolver {
    createManyAndReturnCycle(ctx: any, info: GraphQLResolveInfo, args: CreateManyAndReturnCycleArgs): Promise<CreateManyAndReturnCycle[]>;
}
