import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnLabelArgs } from "./args/CreateManyAndReturnLabelArgs";
import { CreateManyAndReturnLabel } from "../../outputs/CreateManyAndReturnLabel";
export declare class CreateManyAndReturnLabelResolver {
    createManyAndReturnLabel(ctx: any, info: GraphQLResolveInfo, args: CreateManyAndReturnLabelArgs): Promise<CreateManyAndReturnLabel[]>;
}
