import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueLabelOrThrowArgs } from "./args/FindUniqueLabelOrThrowArgs";
import { Label } from "../../../models/Label";
export declare class FindUniqueLabelOrThrowResolver {
    getLabel(ctx: any, info: GraphQLResolveInfo, args: FindUniqueLabelOrThrowArgs): Promise<Label | null>;
}
