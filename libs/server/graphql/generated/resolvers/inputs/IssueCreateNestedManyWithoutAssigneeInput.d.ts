import { IssueCreateManyAssigneeInputEnvelope } from "../inputs/IssueCreateManyAssigneeInputEnvelope";
import { IssueCreateOrConnectWithoutAssigneeInput } from "../inputs/IssueCreateOrConnectWithoutAssigneeInput";
import { IssueCreateWithoutAssigneeInput } from "../inputs/IssueCreateWithoutAssigneeInput";
import { IssueWhereUniqueInput } from "../inputs/IssueWhereUniqueInput";
export declare class IssueCreateNestedManyWithoutAssigneeInput {
    create?: IssueCreateWithoutAssigneeInput[] | undefined;
    connectOrCreate?: IssueCreateOrConnectWithoutAssigneeInput[] | undefined;
    createMany?: IssueCreateManyAssigneeInputEnvelope | undefined;
    connect?: IssueWhereUniqueInput[] | undefined;
}
