import { TeamCreateOrConnectWithoutMembersInput } from "../inputs/TeamCreateOrConnectWithoutMembersInput";
import { TeamCreateWithoutMembersInput } from "../inputs/TeamCreateWithoutMembersInput";
import { TeamWhereUniqueInput } from "../inputs/TeamWhereUniqueInput";
export declare class TeamCreateNestedOneWithoutMembersInput {
    create?: TeamCreateWithoutMembersInput | undefined;
    connectOrCreate?: TeamCreateOrConnectWithoutMembersInput | undefined;
    connect?: TeamWhereUniqueInput | undefined;
}
