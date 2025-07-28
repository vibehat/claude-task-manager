import { CreateManyAndReturnProjectLeadArgs } from "./args/CreateManyAndReturnProjectLeadArgs";
import { User } from "../../models/User";
export declare class CreateManyAndReturnProject {
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
    lead: User | null;
    getLead(root: CreateManyAndReturnProject, args: CreateManyAndReturnProjectLeadArgs): User | null;
}
