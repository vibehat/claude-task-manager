import type { GraphQLResolveInfo } from "graphql";
import { CreateManyLabelArgs } from "./args/CreateManyLabelArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyLabelResolver {
    createManyLabel(ctx: any, info: GraphQLResolveInfo, args: CreateManyLabelArgs): Promise<AffectedRowsOutput>;
}
