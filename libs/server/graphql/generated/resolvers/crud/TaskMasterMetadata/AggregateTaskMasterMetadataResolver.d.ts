import type { GraphQLResolveInfo } from "graphql";
import { AggregateTaskMasterMetadataArgs } from "./args/AggregateTaskMasterMetadataArgs";
import { AggregateTaskMasterMetadata } from "../../outputs/AggregateTaskMasterMetadata";
export declare class AggregateTaskMasterMetadataResolver {
    aggregateTaskMasterMetadata(ctx: any, info: GraphQLResolveInfo, args: AggregateTaskMasterMetadataArgs): Promise<AggregateTaskMasterMetadata>;
}
