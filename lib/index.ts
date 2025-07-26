// Backward compatibility exports
// This file provides compatibility for existing imports from @/lib/*
// New code should import directly from @/libs/client/* or @/libs/server/*

// Re-export everything from server libs for Node.js/API usage
export * from '../libs/server';

// Note: Client-side code should import from @/libs/client directly
// This file should not be used in browser/React code
