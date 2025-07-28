import { UserCreateOrConnectWithoutAssignedIssuesInput } from "../inputs/UserCreateOrConnectWithoutAssignedIssuesInput";
import { UserCreateWithoutAssignedIssuesInput } from "../inputs/UserCreateWithoutAssignedIssuesInput";
import { UserUpdateToOneWithWhereWithoutAssignedIssuesInput } from "../inputs/UserUpdateToOneWithWhereWithoutAssignedIssuesInput";
import { UserUpsertWithoutAssignedIssuesInput } from "../inputs/UserUpsertWithoutAssignedIssuesInput";
import { UserWhereInput } from "../inputs/UserWhereInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneWithoutAssignedIssuesNestedInput {
    create?: UserCreateWithoutAssignedIssuesInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutAssignedIssuesInput | undefined;
    upsert?: UserUpsertWithoutAssignedIssuesInput | undefined;
    disconnect?: UserWhereInput | undefined;
    delete?: UserWhereInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateToOneWithWhereWithoutAssignedIssuesInput | undefined;
}
