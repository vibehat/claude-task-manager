import { UserCreateWithoutTeamsInput } from "../inputs/UserCreateWithoutTeamsInput";
import { UserUpdateWithoutTeamsInput } from "../inputs/UserUpdateWithoutTeamsInput";
import { UserWhereInput } from "../inputs/UserWhereInput";
export declare class UserUpsertWithoutTeamsInput {
    update: UserUpdateWithoutTeamsInput;
    create: UserCreateWithoutTeamsInput;
    where?: UserWhereInput | undefined;
}
