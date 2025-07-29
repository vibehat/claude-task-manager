import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnTaskArgs } from "./args/CreateManyAndReturnTaskArgs";
import { CreateManyAndReturnTask } from "../../outputs/CreateManyAndReturnTask";
export declare class CreateManyAndReturnTaskResolver {
    createManyAndReturnTask(ctx: any, info: GraphQLResolveInfo, args: CreateManyAndReturnTaskArgs): Promise<CreateManyAndReturnTask[]>;
}
