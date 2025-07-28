import { UserCreateOrConnectWithoutLedProjectsInput } from "../inputs/UserCreateOrConnectWithoutLedProjectsInput";
import { UserCreateWithoutLedProjectsInput } from "../inputs/UserCreateWithoutLedProjectsInput";
import { UserUpdateToOneWithWhereWithoutLedProjectsInput } from "../inputs/UserUpdateToOneWithWhereWithoutLedProjectsInput";
import { UserUpsertWithoutLedProjectsInput } from "../inputs/UserUpsertWithoutLedProjectsInput";
import { UserWhereInput } from "../inputs/UserWhereInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneWithoutLedProjectsNestedInput {
    create?: UserCreateWithoutLedProjectsInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutLedProjectsInput | undefined;
    upsert?: UserUpsertWithoutLedProjectsInput | undefined;
    disconnect?: UserWhereInput | undefined;
    delete?: UserWhereInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateToOneWithWhereWithoutLedProjectsInput | undefined;
}
