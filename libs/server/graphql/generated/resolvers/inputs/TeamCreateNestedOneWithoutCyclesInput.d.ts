import { TeamCreateOrConnectWithoutCyclesInput } from "../inputs/TeamCreateOrConnectWithoutCyclesInput";
import { TeamCreateWithoutCyclesInput } from "../inputs/TeamCreateWithoutCyclesInput";
import { TeamWhereUniqueInput } from "../inputs/TeamWhereUniqueInput";
export declare class TeamCreateNestedOneWithoutCyclesInput {
    create?: TeamCreateWithoutCyclesInput | undefined;
    connectOrCreate?: TeamCreateOrConnectWithoutCyclesInput | undefined;
    connect?: TeamWhereUniqueInput | undefined;
}
