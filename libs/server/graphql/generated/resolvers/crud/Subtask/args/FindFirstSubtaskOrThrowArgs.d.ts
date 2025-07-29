import { SubtaskOrderByWithRelationInput } from "../../../inputs/SubtaskOrderByWithRelationInput";
import { SubtaskWhereInput } from "../../../inputs/SubtaskWhereInput";
import { SubtaskWhereUniqueInput } from "../../../inputs/SubtaskWhereUniqueInput";
export declare class FindFirstSubtaskOrThrowArgs {
    where?: SubtaskWhereInput | undefined;
    orderBy?: SubtaskOrderByWithRelationInput[] | undefined;
    cursor?: SubtaskWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "title" | "description" | "details" | "testStrategy" | "status" | "parentId" | "dependencies" | "createdAt" | "updatedAt"> | undefined;
}
