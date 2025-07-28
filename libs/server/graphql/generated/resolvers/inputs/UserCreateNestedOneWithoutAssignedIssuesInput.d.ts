import { UserCreateOrConnectWithoutAssignedIssuesInput } from "../inputs/UserCreateOrConnectWithoutAssignedIssuesInput";
import { UserCreateWithoutAssignedIssuesInput } from "../inputs/UserCreateWithoutAssignedIssuesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutAssignedIssuesInput {
    create?: UserCreateWithoutAssignedIssuesInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutAssignedIssuesInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
