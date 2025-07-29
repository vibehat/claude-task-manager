import type { GraphQLResolveInfo } from "graphql";
import { CreateOneIssueStatusArgs } from "./args/CreateOneIssueStatusArgs";
import { IssueStatus } from "../../../models/IssueStatus";
export declare class CreateOneIssueStatusResolver {
    createOneIssueStatus(ctx: any, info: GraphQLResolveInfo, args: CreateOneIssueStatusArgs): Promise<IssueStatus>;
}
