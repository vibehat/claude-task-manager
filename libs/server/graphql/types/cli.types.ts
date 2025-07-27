/**
 * CLI-related GraphQL Types for TypeGraphQL
 */

import { ObjectType, Field, ID, InputType, ArgsType } from 'type-graphql';

@ObjectType()
export class CLICommand {
   @Field()
   name!: string;

   @Field()
   description!: string;

   @Field(() => [String])
   args!: string[];

   @Field(() => [String])
   requiredArgs!: string[];

   @Field()
   timeout!: number;

   @Field()
   parseOutput!: boolean;

   @Field()
   category!: string;

   @Field(() => [String], { nullable: true })
   examples?: string[];
}

@ObjectType()
export class CLIProcess {
   @Field(() => ID)
   id!: string;

   @Field()
   status!: string;

   @Field()
   startTime!: string;
}

@ObjectType()
export class CLIExecutionStats {
   @Field()
   totalExecutions!: number;

   @Field()
   successfulExecutions!: number;

   @Field()
   failedExecutions!: number;

   @Field()
   successRate!: number;

   @Field()
   averageExecutionTime!: number;

   @Field()
   commandFrequency!: string; // JSON string for now
}

@ObjectType()
export class CLIHistoryItem {
   @Field(() => ID)
   id!: string;

   @Field()
   command!: string;

   @Field()
   args!: string;

   @Field()
   success!: boolean;

   @Field()
   output!: string;

   @Field({ nullable: true })
   error?: string;

   @Field()
   executionTime!: number;

   @Field()
   timestamp!: Date;
}

@ObjectType()
export class CLISystemInfo {
   @Field()
   nodeVersion!: string;

   @Field()
   platform!: string;

   @Field()
   architecture!: string;

   @Field()
   memoryUsage!: string; // JSON string for now

   @Field()
   uptime!: number;

   @Field()
   cwd!: string;

   @Field()
   pid!: number;
}

@ObjectType()
export class CLIStatus {
   @Field()
   isHealthy!: boolean;

   @Field()
   activeProcessCount!: number;

   @Field(() => [CLIProcess])
   activeProcesses!: CLIProcess[];

   @Field(() => CLIExecutionStats)
   executionStats!: CLIExecutionStats;

   @Field(() => [CLIHistoryItem])
   recentCommands!: CLIHistoryItem[];

   @Field(() => CLISystemInfo)
   systemInfo!: CLISystemInfo;

   @Field()
   timestamp!: Date;

   @Field({ nullable: true })
   error?: string;
}

@InputType()
export class CLIHistoryFilter {
   @Field({ nullable: true })
   command?: string;

   @Field({ nullable: true })
   success?: boolean;

   @Field({ nullable: true })
   startDate?: Date;

   @Field({ nullable: true })
   endDate?: Date;
}

@ArgsType()
export class CLIHistoryArgs {
   @Field({ nullable: true, defaultValue: 50 })
   limit?: number;

   @Field({ nullable: true })
   filter?: CLIHistoryFilter;
}

@ArgsType()
export class CLICommandArgs {
   @Field()
   name!: string;
}
