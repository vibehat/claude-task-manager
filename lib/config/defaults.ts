// Default configuration for personal mode
export const DEFAULT_CONFIG = {
   // Default organization ID for personal mode
   DEFAULT_ORG_ID: 'lndev-ui',

   // Default team ID for personal mode
   DEFAULT_TEAM_ID: 'CORE',

   // Default view for issues
   DEFAULT_VIEW: 'all',
} as const;

export type DefaultConfig = typeof DEFAULT_CONFIG;

// Helper function to get default route
export function getDefaultRoute(): string {
   return `/${DEFAULT_CONFIG.DEFAULT_ORG_ID}/team/${DEFAULT_CONFIG.DEFAULT_TEAM_ID}/${DEFAULT_CONFIG.DEFAULT_VIEW}`;
}

// Helper function to get org route with default team
export function getDefaultOrgRoute(orgId: string): string {
   return `/${orgId}/team/${DEFAULT_CONFIG.DEFAULT_TEAM_ID}/${DEFAULT_CONFIG.DEFAULT_VIEW}`;
}

// Helper function to get team route
export function getTeamRoute(orgId: string, teamId: string): string {
   return `/${orgId}/team/${teamId}/${DEFAULT_CONFIG.DEFAULT_VIEW}`;
}
