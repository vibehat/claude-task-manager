/**
 * Issue Resolver - Minimal Implementation
 */

import { Resolver, Query } from 'type-graphql';
import { BaseResolver } from './base.resolver';

@Resolver()
export class IssueResolver extends BaseResolver {
   @Query(() => String)
   async issueHealthCheck(): Promise<string> {
      return 'Issue resolver is working';
   }
}
