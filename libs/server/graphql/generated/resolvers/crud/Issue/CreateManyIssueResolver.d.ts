import type { GraphQLResolveInfo } from "graphql";
import { CreateManyIssueArgs } from "./args/CreateManyIssueArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyIssueResolver {
    createManyIssue(ctx: any, info: GraphQLResolveInfo, args: CreateManyIssueArgs): Promise<AffectedRowsOutput>;
}
