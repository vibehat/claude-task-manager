import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnIssueStatusArgs } from "./args/CreateManyAndReturnIssueStatusArgs";
import { CreateManyAndReturnIssueStatus } from "../../outputs/CreateManyAndReturnIssueStatus";
export declare class CreateManyAndReturnIssueStatusResolver {
    createManyAndReturnIssueStatus(ctx: any, info: GraphQLResolveInfo, args: CreateManyAndReturnIssueStatusArgs): Promise<CreateManyAndReturnIssueStatus[]>;
}
