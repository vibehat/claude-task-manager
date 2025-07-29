import { CycleCreateOrConnectWithoutIssuesInput } from "../inputs/CycleCreateOrConnectWithoutIssuesInput";
import { CycleCreateWithoutIssuesInput } from "../inputs/CycleCreateWithoutIssuesInput";
import { CycleWhereUniqueInput } from "../inputs/CycleWhereUniqueInput";
export declare class CycleCreateNestedOneWithoutIssuesInput {
    create?: CycleCreateWithoutIssuesInput | undefined;
    connectOrCreate?: CycleCreateOrConnectWithoutIssuesInput | undefined;
    connect?: CycleWhereUniqueInput | undefined;
}
