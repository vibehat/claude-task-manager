import { TeamCreateOrConnectWithoutProjectsInput } from "../inputs/TeamCreateOrConnectWithoutProjectsInput";
import { TeamCreateWithoutProjectsInput } from "../inputs/TeamCreateWithoutProjectsInput";
import { TeamWhereUniqueInput } from "../inputs/TeamWhereUniqueInput";
export declare class TeamCreateNestedOneWithoutProjectsInput {
    create?: TeamCreateWithoutProjectsInput | undefined;
    connectOrCreate?: TeamCreateOrConnectWithoutProjectsInput | undefined;
    connect?: TeamWhereUniqueInput | undefined;
}
