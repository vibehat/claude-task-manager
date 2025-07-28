import { TeamProjectCreateManyProjectInputEnvelope } from "../inputs/TeamProjectCreateManyProjectInputEnvelope";
import { TeamProjectCreateOrConnectWithoutProjectInput } from "../inputs/TeamProjectCreateOrConnectWithoutProjectInput";
import { TeamProjectCreateWithoutProjectInput } from "../inputs/TeamProjectCreateWithoutProjectInput";
import { TeamProjectScalarWhereInput } from "../inputs/TeamProjectScalarWhereInput";
import { TeamProjectUpdateManyWithWhereWithoutProjectInput } from "../inputs/TeamProjectUpdateManyWithWhereWithoutProjectInput";
import { TeamProjectUpdateWithWhereUniqueWithoutProjectInput } from "../inputs/TeamProjectUpdateWithWhereUniqueWithoutProjectInput";
import { TeamProjectUpsertWithWhereUniqueWithoutProjectInput } from "../inputs/TeamProjectUpsertWithWhereUniqueWithoutProjectInput";
import { TeamProjectWhereUniqueInput } from "../inputs/TeamProjectWhereUniqueInput";
export declare class TeamProjectUpdateManyWithoutProjectNestedInput {
    create?: TeamProjectCreateWithoutProjectInput[] | undefined;
    connectOrCreate?: TeamProjectCreateOrConnectWithoutProjectInput[] | undefined;
    upsert?: TeamProjectUpsertWithWhereUniqueWithoutProjectInput[] | undefined;
    createMany?: TeamProjectCreateManyProjectInputEnvelope | undefined;
    set?: TeamProjectWhereUniqueInput[] | undefined;
    disconnect?: TeamProjectWhereUniqueInput[] | undefined;
    delete?: TeamProjectWhereUniqueInput[] | undefined;
    connect?: TeamProjectWhereUniqueInput[] | undefined;
    update?: TeamProjectUpdateWithWhereUniqueWithoutProjectInput[] | undefined;
    updateMany?: TeamProjectUpdateManyWithWhereWithoutProjectInput[] | undefined;
    deleteMany?: TeamProjectScalarWhereInput[] | undefined;
}
