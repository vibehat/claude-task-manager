import { UserCreateOrConnectWithoutTeamsInput } from "../inputs/UserCreateOrConnectWithoutTeamsInput";
import { UserCreateWithoutTeamsInput } from "../inputs/UserCreateWithoutTeamsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutTeamsInput {
    create?: UserCreateWithoutTeamsInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutTeamsInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
