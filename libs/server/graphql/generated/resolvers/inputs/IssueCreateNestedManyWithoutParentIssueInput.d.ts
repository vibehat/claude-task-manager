import { IssueCreateManyParentIssueInputEnvelope } from "../inputs/IssueCreateManyParentIssueInputEnvelope";
import { IssueCreateOrConnectWithoutParentIssueInput } from "../inputs/IssueCreateOrConnectWithoutParentIssueInput";
import { IssueCreateWithoutParentIssueInput } from "../inputs/IssueCreateWithoutParentIssueInput";
import { IssueWhereUniqueInput } from "../inputs/IssueWhereUniqueInput";
export declare class IssueCreateNestedManyWithoutParentIssueInput {
    create?: IssueCreateWithoutParentIssueInput[] | undefined;
    connectOrCreate?: IssueCreateOrConnectWithoutParentIssueInput[] | undefined;
    createMany?: IssueCreateManyParentIssueInputEnvelope | undefined;
    connect?: IssueWhereUniqueInput[] | undefined;
}
