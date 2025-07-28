import type { GraphQLResolveInfo } from "graphql";
import { FindFirstLabelArgs } from "./args/FindFirstLabelArgs";
import { Label } from "../../../models/Label";
export declare class FindFirstLabelResolver {
    findFirstLabel(ctx: any, info: GraphQLResolveInfo, args: FindFirstLabelArgs): Promise<Label | null>;
}
