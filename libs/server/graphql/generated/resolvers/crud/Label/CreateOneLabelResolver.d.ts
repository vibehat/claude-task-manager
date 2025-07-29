import type { GraphQLResolveInfo } from "graphql";
import { CreateOneLabelArgs } from "./args/CreateOneLabelArgs";
import { Label } from "../../../models/Label";
export declare class CreateOneLabelResolver {
    createOneLabel(ctx: any, info: GraphQLResolveInfo, args: CreateOneLabelArgs): Promise<Label>;
}
