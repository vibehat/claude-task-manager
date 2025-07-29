import type { GraphQLResolveInfo } from "graphql";
import { CreateManyIssueStatusArgs } from "./args/CreateManyIssueStatusArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyIssueStatusResolver {
    createManyIssueStatus(ctx: any, info: GraphQLResolveInfo, args: CreateManyIssueStatusArgs): Promise<AffectedRowsOutput>;
}
