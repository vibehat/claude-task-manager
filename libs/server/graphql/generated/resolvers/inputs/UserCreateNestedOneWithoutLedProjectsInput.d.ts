import { UserCreateOrConnectWithoutLedProjectsInput } from "../inputs/UserCreateOrConnectWithoutLedProjectsInput";
import { UserCreateWithoutLedProjectsInput } from "../inputs/UserCreateWithoutLedProjectsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutLedProjectsInput {
    create?: UserCreateWithoutLedProjectsInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutLedProjectsInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
