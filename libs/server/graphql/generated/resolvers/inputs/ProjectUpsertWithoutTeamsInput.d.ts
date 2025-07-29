import { ProjectCreateWithoutTeamsInput } from "../inputs/ProjectCreateWithoutTeamsInput";
import { ProjectUpdateWithoutTeamsInput } from "../inputs/ProjectUpdateWithoutTeamsInput";
import { ProjectWhereInput } from "../inputs/ProjectWhereInput";
export declare class ProjectUpsertWithoutTeamsInput {
    update: ProjectUpdateWithoutTeamsInput;
    create: ProjectCreateWithoutTeamsInput;
    where?: ProjectWhereInput | undefined;
}
