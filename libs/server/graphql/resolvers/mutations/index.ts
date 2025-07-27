import { taskMutations } from './task-mutations';
import { cliMutations } from './cli-mutations';
import { syncMutations } from './sync-mutations';
import { issueMutations } from './issue-mutations';

export const mutations = {
   ...taskMutations,
   ...cliMutations,
   ...syncMutations,
   ...issueMutations,
};
