import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneLabelArgs } from "./args/UpdateOneLabelArgs";
import { Label } from "../../../models/Label";
export declare class UpdateOneLabelResolver {
    updateOneLabel(ctx: any, info: GraphQLResolveInfo, args: UpdateOneLabelArgs): Promise<Label | null>;
}
