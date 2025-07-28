import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnIssueArgs } from "./args/CreateManyAndReturnIssueArgs";
import { CreateManyAndReturnIssue } from "../../outputs/CreateManyAndReturnIssue";
export declare class CreateManyAndReturnIssueResolver {
    createManyAndReturnIssue(ctx: any, info: GraphQLResolveInfo, args: CreateManyAndReturnIssueArgs): Promise<CreateManyAndReturnIssue[]>;
}
