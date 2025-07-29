import { IssueCreateManySubtaskInputEnvelope } from "../inputs/IssueCreateManySubtaskInputEnvelope";
import { IssueCreateOrConnectWithoutSubtaskInput } from "../inputs/IssueCreateOrConnectWithoutSubtaskInput";
import { IssueCreateWithoutSubtaskInput } from "../inputs/IssueCreateWithoutSubtaskInput";
import { IssueWhereUniqueInput } from "../inputs/IssueWhereUniqueInput";
export declare class IssueCreateNestedManyWithoutSubtaskInput {
    create?: IssueCreateWithoutSubtaskInput[] | undefined;
    connectOrCreate?: IssueCreateOrConnectWithoutSubtaskInput[] | undefined;
    createMany?: IssueCreateManySubtaskInputEnvelope | undefined;
    connect?: IssueWhereUniqueInput[] | undefined;
}
