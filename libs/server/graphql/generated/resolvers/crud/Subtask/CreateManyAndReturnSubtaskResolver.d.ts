import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnSubtaskArgs } from "./args/CreateManyAndReturnSubtaskArgs";
import { CreateManyAndReturnSubtask } from "../../outputs/CreateManyAndReturnSubtask";
export declare class CreateManyAndReturnSubtaskResolver {
    createManyAndReturnSubtask(ctx: any, info: GraphQLResolveInfo, args: CreateManyAndReturnSubtaskArgs): Promise<CreateManyAndReturnSubtask[]>;
}
