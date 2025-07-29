import { TeamProjectCreateManyProjectInputEnvelope } from "../inputs/TeamProjectCreateManyProjectInputEnvelope";
import { TeamProjectCreateOrConnectWithoutProjectInput } from "../inputs/TeamProjectCreateOrConnectWithoutProjectInput";
import { TeamProjectCreateWithoutProjectInput } from "../inputs/TeamProjectCreateWithoutProjectInput";
import { TeamProjectWhereUniqueInput } from "../inputs/TeamProjectWhereUniqueInput";
export declare class TeamProjectCreateNestedManyWithoutProjectInput {
    create?: TeamProjectCreateWithoutProjectInput[] | undefined;
    connectOrCreate?: TeamProjectCreateOrConnectWithoutProjectInput[] | undefined;
    createMany?: TeamProjectCreateManyProjectInputEnvelope | undefined;
    connect?: TeamProjectWhereUniqueInput[] | undefined;
}
