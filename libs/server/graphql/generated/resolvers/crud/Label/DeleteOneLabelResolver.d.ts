import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneLabelArgs } from "./args/DeleteOneLabelArgs";
import { Label } from "../../../models/Label";
export declare class DeleteOneLabelResolver {
    deleteOneLabel(ctx: any, info: GraphQLResolveInfo, args: DeleteOneLabelArgs): Promise<Label | null>;
}
