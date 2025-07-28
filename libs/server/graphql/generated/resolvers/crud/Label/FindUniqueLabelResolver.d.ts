import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueLabelArgs } from "./args/FindUniqueLabelArgs";
import { Label } from "../../../models/Label";
export declare class FindUniqueLabelResolver {
    label(ctx: any, info: GraphQLResolveInfo, args: FindUniqueLabelArgs): Promise<Label | null>;
}
