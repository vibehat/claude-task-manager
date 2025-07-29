import { IssueCreateManyIssueStatusInputEnvelope } from "../inputs/IssueCreateManyIssueStatusInputEnvelope";
import { IssueCreateOrConnectWithoutIssueStatusInput } from "../inputs/IssueCreateOrConnectWithoutIssueStatusInput";
import { IssueCreateWithoutIssueStatusInput } from "../inputs/IssueCreateWithoutIssueStatusInput";
import { IssueWhereUniqueInput } from "../inputs/IssueWhereUniqueInput";
export declare class IssueCreateNestedManyWithoutIssueStatusInput {
    create?: IssueCreateWithoutIssueStatusInput[] | undefined;
    connectOrCreate?: IssueCreateOrConnectWithoutIssueStatusInput[] | undefined;
    createMany?: IssueCreateManyIssueStatusInputEnvelope | undefined;
    connect?: IssueWhereUniqueInput[] | undefined;
}
