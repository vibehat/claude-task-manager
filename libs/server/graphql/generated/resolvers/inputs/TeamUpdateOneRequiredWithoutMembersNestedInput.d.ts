import { TeamCreateOrConnectWithoutMembersInput } from "../inputs/TeamCreateOrConnectWithoutMembersInput";
import { TeamCreateWithoutMembersInput } from "../inputs/TeamCreateWithoutMembersInput";
import { TeamUpdateToOneWithWhereWithoutMembersInput } from "../inputs/TeamUpdateToOneWithWhereWithoutMembersInput";
import { TeamUpsertWithoutMembersInput } from "../inputs/TeamUpsertWithoutMembersInput";
import { TeamWhereUniqueInput } from "../inputs/TeamWhereUniqueInput";
export declare class TeamUpdateOneRequiredWithoutMembersNestedInput {
    create?: TeamCreateWithoutMembersInput | undefined;
    connectOrCreate?: TeamCreateOrConnectWithoutMembersInput | undefined;
    upsert?: TeamUpsertWithoutMembersInput | undefined;
    connect?: TeamWhereUniqueInput | undefined;
    update?: TeamUpdateToOneWithWhereWithoutMembersInput | undefined;
}
