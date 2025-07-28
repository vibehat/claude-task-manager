import { TeamCreateOrConnectWithoutProjectsInput } from "../inputs/TeamCreateOrConnectWithoutProjectsInput";
import { TeamCreateWithoutProjectsInput } from "../inputs/TeamCreateWithoutProjectsInput";
import { TeamUpdateToOneWithWhereWithoutProjectsInput } from "../inputs/TeamUpdateToOneWithWhereWithoutProjectsInput";
import { TeamUpsertWithoutProjectsInput } from "../inputs/TeamUpsertWithoutProjectsInput";
import { TeamWhereUniqueInput } from "../inputs/TeamWhereUniqueInput";
export declare class TeamUpdateOneRequiredWithoutProjectsNestedInput {
    create?: TeamCreateWithoutProjectsInput | undefined;
    connectOrCreate?: TeamCreateOrConnectWithoutProjectsInput | undefined;
    upsert?: TeamUpsertWithoutProjectsInput | undefined;
    connect?: TeamWhereUniqueInput | undefined;
    update?: TeamUpdateToOneWithWhereWithoutProjectsInput | undefined;
}
