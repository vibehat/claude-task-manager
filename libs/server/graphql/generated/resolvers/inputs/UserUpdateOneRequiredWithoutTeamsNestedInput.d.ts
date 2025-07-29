import { UserCreateOrConnectWithoutTeamsInput } from "../inputs/UserCreateOrConnectWithoutTeamsInput";
import { UserCreateWithoutTeamsInput } from "../inputs/UserCreateWithoutTeamsInput";
import { UserUpdateToOneWithWhereWithoutTeamsInput } from "../inputs/UserUpdateToOneWithWhereWithoutTeamsInput";
import { UserUpsertWithoutTeamsInput } from "../inputs/UserUpsertWithoutTeamsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutTeamsNestedInput {
    create?: UserCreateWithoutTeamsInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutTeamsInput | undefined;
    upsert?: UserUpsertWithoutTeamsInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateToOneWithWhereWithoutTeamsInput | undefined;
}
