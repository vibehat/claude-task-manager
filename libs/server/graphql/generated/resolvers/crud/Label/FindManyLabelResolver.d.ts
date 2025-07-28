import type { GraphQLResolveInfo } from "graphql";
import { FindManyLabelArgs } from "./args/FindManyLabelArgs";
import { Label } from "../../../models/Label";
export declare class FindManyLabelResolver {
    labels(ctx: any, info: GraphQLResolveInfo, args: FindManyLabelArgs): Promise<Label[]>;
}
