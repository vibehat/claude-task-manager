import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnTeamMemberArgs } from "./args/CreateManyAndReturnTeamMemberArgs";
import { CreateManyAndReturnTeamMember } from "../../outputs/CreateManyAndReturnTeamMember";
export declare class CreateManyAndReturnTeamMemberResolver {
    createManyAndReturnTeamMember(ctx: any, info: GraphQLResolveInfo, args: CreateManyAndReturnTeamMemberArgs): Promise<CreateManyAndReturnTeamMember[]>;
}
