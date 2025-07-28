import type { GraphQLResolveInfo } from "graphql";
import { CreateManyIssueLabelArgs } from "./args/CreateManyIssueLabelArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyIssueLabelResolver {
    createManyIssueLabel(ctx: any, info: GraphQLResolveInfo, args: CreateManyIssueLabelArgs): Promise<AffectedRowsOutput>;
}
