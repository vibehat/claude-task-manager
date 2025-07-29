import { ProjectAvgAggregate } from "../outputs/ProjectAvgAggregate";
import { ProjectCountAggregate } from "../outputs/ProjectCountAggregate";
import { ProjectMaxAggregate } from "../outputs/ProjectMaxAggregate";
import { ProjectMinAggregate } from "../outputs/ProjectMinAggregate";
import { ProjectSumAggregate } from "../outputs/ProjectSumAggregate";
export declare class ProjectGroupBy {
    id: string;
    name: string;
    description: string | null;
    color: string | null;
    identifier: string | null;
    icon: string | null;
    percentComplete: number;
    startDate: Date | null;
    health: string;
    leadId: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: ProjectCountAggregate | null;
    _avg: ProjectAvgAggregate | null;
    _sum: ProjectSumAggregate | null;
    _min: ProjectMinAggregate | null;
    _max: ProjectMaxAggregate | null;
}
