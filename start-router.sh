#!/bin/bash

# Start Claude Code Router
# This script starts the claude-code-router with the local configuration

echo "Starting Claude Code Router..."
echo "Configuration: ./claude-code-router.config.json"
echo ""
echo "Available routes (all via OpenRouter):"
echo "  - default: GPT-5"
echo "  - webSearch: Gemini 2.5 Flash Lite"
echo "  - background: GPT OSS 20B"
echo "  - longContext: Gemini 2.5 Pro (threshold: 100k tokens)"
echo "  - think: Claude Opus 4.1"
echo ""
echo "Use /model <route> in Claude Code to switch models"
echo ""

# Export the config path
export CLAUDE_CODE_ROUTER_CONFIG="./claude-code-router.config.json"

# Start the router
claude-code-router start --config ./claude-code-router.config.json