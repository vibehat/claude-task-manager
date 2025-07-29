import type { GraphQLResolveInfo } from "graphql";
import { FindFirstLabelOrThrowArgs } from "./args/FindFirstLabelOrThrowArgs";
import { Label } from "../../../models/Label";
export declare class FindFirstLabelOrThrowResolver {
    findFirstLabelOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstLabelOrThrowArgs): Promise<Label | null>;
}
