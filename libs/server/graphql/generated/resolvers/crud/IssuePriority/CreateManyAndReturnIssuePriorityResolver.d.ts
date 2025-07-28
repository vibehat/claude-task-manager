import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnIssuePriorityArgs } from "./args/CreateManyAndReturnIssuePriorityArgs";
import { CreateManyAndReturnIssuePriority } from "../../outputs/CreateManyAndReturnIssuePriority";
export declare class CreateManyAndReturnIssuePriorityResolver {
    createManyAndReturnIssuePriority(ctx: any, info: GraphQLResolveInfo, args: CreateManyAndReturnIssuePriorityArgs): Promise<CreateManyAndReturnIssuePriority[]>;
}
