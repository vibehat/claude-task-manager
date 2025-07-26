import { queries } from './queries';
import { mutations } from './mutations';
import { DateTime, JSON } from './shared/scalars';

// Import subscription resolvers - we need to create these next
const subscriptions = {
   // TODO: Add subscription resolvers when created
};

export const resolvers = {
   // Scalar type resolvers
   DateTime,
   JSON,

   // Operation resolvers
   Query: queries,
   Mutation: mutations,
   Subscription: subscriptions,
};
