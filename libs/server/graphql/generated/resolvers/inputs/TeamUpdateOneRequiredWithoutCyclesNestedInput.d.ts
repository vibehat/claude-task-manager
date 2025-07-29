import { TeamCreateOrConnectWithoutCyclesInput } from "../inputs/TeamCreateOrConnectWithoutCyclesInput";
import { TeamCreateWithoutCyclesInput } from "../inputs/TeamCreateWithoutCyclesInput";
import { TeamUpdateToOneWithWhereWithoutCyclesInput } from "../inputs/TeamUpdateToOneWithWhereWithoutCyclesInput";
import { TeamUpsertWithoutCyclesInput } from "../inputs/TeamUpsertWithoutCyclesInput";
import { TeamWhereUniqueInput } from "../inputs/TeamWhereUniqueInput";
export declare class TeamUpdateOneRequiredWithoutCyclesNestedInput {
    create?: TeamCreateWithoutCyclesInput | undefined;
    connectOrCreate?: TeamCreateOrConnectWithoutCyclesInput | undefined;
    upsert?: TeamUpsertWithoutCyclesInput | undefined;
    connect?: TeamWhereUniqueInput | undefined;
    update?: TeamUpdateToOneWithWhereWithoutCyclesInput | undefined;
}
