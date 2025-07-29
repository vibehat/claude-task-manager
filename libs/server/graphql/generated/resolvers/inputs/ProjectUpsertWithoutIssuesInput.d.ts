import { ProjectCreateWithoutIssuesInput } from "../inputs/ProjectCreateWithoutIssuesInput";
import { ProjectUpdateWithoutIssuesInput } from "../inputs/ProjectUpdateWithoutIssuesInput";
import { ProjectWhereInput } from "../inputs/ProjectWhereInput";
export declare class ProjectUpsertWithoutIssuesInput {
    update: ProjectUpdateWithoutIssuesInput;
    create: ProjectCreateWithoutIssuesInput;
    where?: ProjectWhereInput | undefined;
}
