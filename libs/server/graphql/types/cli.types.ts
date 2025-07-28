/**
 * CLI-related GraphQL Types for TypeGraphQL
 */

import { ObjectType, Field, ID, InputType, ArgsType } from 'type-graphql';

@ObjectType()
export class CLICommand {
   @Field(() => String)
   name!: string;

   @Field(() => String)
   description!: string;

   @Field(() => [String])
   args!: string[];

   @Field(() => [String])
   requiredArgs!: string[];

   @Field(() => Number)
   timeout!: number;

   @Field(() => Boolean)
   parseOutput!: boolean;

   @Field(() => String)
   category!: string;

   @Field(() => [String], { nullable: true })
   examples?: string[];
}

@ObjectType()
export class CLIProcess {
   @Field(() => ID)
   id!: string;

   @Field(() => String)
   status!: string;

   @Field(() => String)
   startTime!: string;
}

@ObjectType()
export class CLIExecutionStats {
   @Field(() => Number)
   totalExecutions!: number;

   @Field(() => Number)
   successfulExecutions!: number;

   @Field(() => Number)
   failedExecutions!: number;

   @Field(() => Number)
   successRate!: number;

   @Field(() => Number)
   averageExecutionTime!: number;

   @Field(() => String)
   commandFrequency!: string; // JSON string for now
}

@ObjectType()
export class CLIHistoryItem {
   @Field(() => ID)
   id!: string;

   @Field(() => String)
   command!: string;

   @Field(() => String)
   args!: string;

   @Field(() => Boolean)
   success!: boolean;

   @Field(() => String)
   output!: string;

   @Field(() => String, { nullable: true })
   error?: string;

   @Field(() => Number)
   executionTime!: number;

   @Field(() => Date)
   timestamp!: Date;
}

@ObjectType()
export class CLISystemInfo {
   @Field(() => String)
   nodeVersion!: string;

   @Field(() => String)
   platform!: string;

   @Field(() => String)
   architecture!: string;

   @Field(() => String)
   memoryUsage!: string; // JSON string for now

   @Field(() => Number)
   uptime!: number;

   @Field(() => String)
   cwd!: string;

   @Field(() => Number)
   pid!: number;
}

@ObjectType()
export class CLIStatus {
   @Field(() => Boolean)
   isHealthy!: boolean;

   @Field(() => Number)
   activeProcessCount!: number;

   @Field(() => [CLIProcess])
   activeProcesses!: CLIProcess[];

   @Field(() => CLIExecutionStats)
   executionStats!: CLIExecutionStats;

   @Field(() => [CLIHistoryItem])
   recentCommands!: CLIHistoryItem[];

   @Field(() => CLISystemInfo)
   systemInfo!: CLISystemInfo;

   @Field(() => Date)
   timestamp!: Date;

   @Field(() => String, { nullable: true })
   error?: string;
}

@InputType()
export class CLIHistoryFilter {
   @Field(() => String, { nullable: true })
   command?: string;

   @Field(() => Boolean, { nullable: true })
   success?: boolean;

   @Field(() => Date, { nullable: true })
   startDate?: Date;

   @Field(() => Date, { nullable: true })
   endDate?: Date;
}

@ArgsType()
export class CLIHistoryArgs {
   @Field(() => Number, { nullable: true, defaultValue: 50 })
   limit?: number;

   @Field(() => CLIHistoryFilter, { nullable: true })
   filter?: CLIHistoryFilter;
}

@ArgsType()
export class CLICommandArgs {
   @Field(() => String)
   name!: string;
}
