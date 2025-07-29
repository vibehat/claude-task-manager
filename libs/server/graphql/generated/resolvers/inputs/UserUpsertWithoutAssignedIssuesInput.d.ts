import { UserCreateWithoutAssignedIssuesInput } from "../inputs/UserCreateWithoutAssignedIssuesInput";
import { UserUpdateWithoutAssignedIssuesInput } from "../inputs/UserUpdateWithoutAssignedIssuesInput";
import { UserWhereInput } from "../inputs/UserWhereInput";
export declare class UserUpsertWithoutAssignedIssuesInput {
    update: UserUpdateWithoutAssignedIssuesInput;
    create: UserCreateWithoutAssignedIssuesInput;
    where?: UserWhereInput | undefined;
}
