import { IssueCreateManyTaskInputEnvelope } from "../inputs/IssueCreateManyTaskInputEnvelope";
import { IssueCreateOrConnectWithoutTaskInput } from "../inputs/IssueCreateOrConnectWithoutTaskInput";
import { IssueCreateWithoutTaskInput } from "../inputs/IssueCreateWithoutTaskInput";
import { IssueScalarWhereInput } from "../inputs/IssueScalarWhereInput";
import { IssueUpdateManyWithWhereWithoutTaskInput } from "../inputs/IssueUpdateManyWithWhereWithoutTaskInput";
import { IssueUpdateWithWhereUniqueWithoutTaskInput } from "../inputs/IssueUpdateWithWhereUniqueWithoutTaskInput";
import { IssueUpsertWithWhereUniqueWithoutTaskInput } from "../inputs/IssueUpsertWithWhereUniqueWithoutTaskInput";
import { IssueWhereUniqueInput } from "../inputs/IssueWhereUniqueInput";
export declare class IssueUpdateManyWithoutTaskNestedInput {
    create?: IssueCreateWithoutTaskInput[] | undefined;
    connectOrCreate?: IssueCreateOrConnectWithoutTaskInput[] | undefined;
    upsert?: IssueUpsertWithWhereUniqueWithoutTaskInput[] | undefined;
    createMany?: IssueCreateManyTaskInputEnvelope | undefined;
    set?: IssueWhereUniqueInput[] | undefined;
    disconnect?: IssueWhereUniqueInput[] | undefined;
    delete?: IssueWhereUniqueInput[] | undefined;
    connect?: IssueWhereUniqueInput[] | undefined;
    update?: IssueUpdateWithWhereUniqueWithoutTaskInput[] | undefined;
    updateMany?: IssueUpdateManyWithWhereWithoutTaskInput[] | undefined;
    deleteMany?: IssueScalarWhereInput[] | undefined;
}
