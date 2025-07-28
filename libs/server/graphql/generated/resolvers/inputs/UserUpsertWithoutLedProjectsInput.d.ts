import { UserCreateWithoutLedProjectsInput } from "../inputs/UserCreateWithoutLedProjectsInput";
import { UserUpdateWithoutLedProjectsInput } from "../inputs/UserUpdateWithoutLedProjectsInput";
import { UserWhereInput } from "../inputs/UserWhereInput";
export declare class UserUpsertWithoutLedProjectsInput {
    update: UserUpdateWithoutLedProjectsInput;
    create: UserCreateWithoutLedProjectsInput;
    where?: UserWhereInput | undefined;
}
