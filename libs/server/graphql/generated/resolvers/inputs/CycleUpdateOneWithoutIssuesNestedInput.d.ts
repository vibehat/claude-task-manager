import { CycleCreateOrConnectWithoutIssuesInput } from "../inputs/CycleCreateOrConnectWithoutIssuesInput";
import { CycleCreateWithoutIssuesInput } from "../inputs/CycleCreateWithoutIssuesInput";
import { CycleUpdateToOneWithWhereWithoutIssuesInput } from "../inputs/CycleUpdateToOneWithWhereWithoutIssuesInput";
import { CycleUpsertWithoutIssuesInput } from "../inputs/CycleUpsertWithoutIssuesInput";
import { CycleWhereInput } from "../inputs/CycleWhereInput";
import { CycleWhereUniqueInput } from "../inputs/CycleWhereUniqueInput";
export declare class CycleUpdateOneWithoutIssuesNestedInput {
    create?: CycleCreateWithoutIssuesInput | undefined;
    connectOrCreate?: CycleCreateOrConnectWithoutIssuesInput | undefined;
    upsert?: CycleUpsertWithoutIssuesInput | undefined;
    disconnect?: CycleWhereInput | undefined;
    delete?: CycleWhereInput | undefined;
    connect?: CycleWhereUniqueInput | undefined;
    update?: CycleUpdateToOneWithWhereWithoutIssuesInput | undefined;
}
