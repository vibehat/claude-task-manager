import { IssueCreateManyTaskInputEnvelope } from "../inputs/IssueCreateManyTaskInputEnvelope";
import { IssueCreateOrConnectWithoutTaskInput } from "../inputs/IssueCreateOrConnectWithoutTaskInput";
import { IssueCreateWithoutTaskInput } from "../inputs/IssueCreateWithoutTaskInput";
import { IssueWhereUniqueInput } from "../inputs/IssueWhereUniqueInput";
export declare class IssueCreateNestedManyWithoutTaskInput {
    create?: IssueCreateWithoutTaskInput[] | undefined;
    connectOrCreate?: IssueCreateOrConnectWithoutTaskInput[] | undefined;
    createMany?: IssueCreateManyTaskInputEnvelope | undefined;
    connect?: IssueWhereUniqueInput[] | undefined;
}
