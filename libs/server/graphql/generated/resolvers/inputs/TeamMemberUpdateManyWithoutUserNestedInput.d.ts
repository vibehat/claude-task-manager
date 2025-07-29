import { TeamMemberCreateManyUserInputEnvelope } from "../inputs/TeamMemberCreateManyUserInputEnvelope";
import { TeamMemberCreateOrConnectWithoutUserInput } from "../inputs/TeamMemberCreateOrConnectWithoutUserInput";
import { TeamMemberCreateWithoutUserInput } from "../inputs/TeamMemberCreateWithoutUserInput";
import { TeamMemberScalarWhereInput } from "../inputs/TeamMemberScalarWhereInput";
import { TeamMemberUpdateManyWithWhereWithoutUserInput } from "../inputs/TeamMemberUpdateManyWithWhereWithoutUserInput";
import { TeamMemberUpdateWithWhereUniqueWithoutUserInput } from "../inputs/TeamMemberUpdateWithWhereUniqueWithoutUserInput";
import { TeamMemberUpsertWithWhereUniqueWithoutUserInput } from "../inputs/TeamMemberUpsertWithWhereUniqueWithoutUserInput";
import { TeamMemberWhereUniqueInput } from "../inputs/TeamMemberWhereUniqueInput";
export declare class TeamMemberUpdateManyWithoutUserNestedInput {
    create?: TeamMemberCreateWithoutUserInput[] | undefined;
    connectOrCreate?: TeamMemberCreateOrConnectWithoutUserInput[] | undefined;
    upsert?: TeamMemberUpsertWithWhereUniqueWithoutUserInput[] | undefined;
    createMany?: TeamMemberCreateManyUserInputEnvelope | undefined;
    set?: TeamMemberWhereUniqueInput[] | undefined;
    disconnect?: TeamMemberWhereUniqueInput[] | undefined;
    delete?: TeamMemberWhereUniqueInput[] | undefined;
    connect?: TeamMemberWhereUniqueInput[] | undefined;
    update?: TeamMemberUpdateWithWhereUniqueWithoutUserInput[] | undefined;
    updateMany?: TeamMemberUpdateManyWithWhereWithoutUserInput[] | undefined;
    deleteMany?: TeamMemberScalarWhereInput[] | undefined;
}
