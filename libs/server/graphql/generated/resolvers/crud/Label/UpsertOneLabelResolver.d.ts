import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneLabelArgs } from "./args/UpsertOneLabelArgs";
import { Label } from "../../../models/Label";
export declare class UpsertOneLabelResolver {
    upsertOneLabel(ctx: any, info: GraphQLResolveInfo, args: UpsertOneLabelArgs): Promise<Label>;
}
