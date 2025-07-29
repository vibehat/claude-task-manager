import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnIssueLabelArgs } from "./args/CreateManyAndReturnIssueLabelArgs";
import { CreateManyAndReturnIssueLabel } from "../../outputs/CreateManyAndReturnIssueLabel";
export declare class CreateManyAndReturnIssueLabelResolver {
    createManyAndReturnIssueLabel(ctx: any, info: GraphQLResolveInfo, args: CreateManyAndReturnIssueLabelArgs): Promise<CreateManyAndReturnIssueLabel[]>;
}
