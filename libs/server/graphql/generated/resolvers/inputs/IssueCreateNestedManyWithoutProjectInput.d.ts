import { IssueCreateManyProjectInputEnvelope } from "../inputs/IssueCreateManyProjectInputEnvelope";
import { IssueCreateOrConnectWithoutProjectInput } from "../inputs/IssueCreateOrConnectWithoutProjectInput";
import { IssueCreateWithoutProjectInput } from "../inputs/IssueCreateWithoutProjectInput";
import { IssueWhereUniqueInput } from "../inputs/IssueWhereUniqueInput";
export declare class IssueCreateNestedManyWithoutProjectInput {
    create?: IssueCreateWithoutProjectInput[] | undefined;
    connectOrCreate?: IssueCreateOrConnectWithoutProjectInput[] | undefined;
    createMany?: IssueCreateManyProjectInputEnvelope | undefined;
    connect?: IssueWhereUniqueInput[] | undefined;
}
