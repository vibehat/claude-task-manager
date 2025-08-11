# Claude Code Router Configuration

## Installation Complete ✅

Claude Code Router has been installed and configured for your project.

## Configuration

The router is configured with multiple AI models via OpenRouter for different tasks:

- **default**: GPT-5 (standard requests)
- **webSearch**: Gemini 2.5 Flash Lite (web searches)
- **background**: GPT OSS 20B (background tasks)
- **longContext**: Gemini 2.5 Pro (documents > 100k tokens)
- **think**: Claude Opus 4.1 (complex reasoning)

### Long Context Threshold

Automatically switches to `longContext` model when input exceeds 100,000 tokens.

## Setup API Key

To use the router, add your OpenRouter API key to `.env`:

```bash
OPENROUTER_API_KEY="your-openrouter-api-key"
```

Get your API key at: https://openrouter.ai/keys

## Usage

1. **Start the router:**

   ```bash
   ./start-router.sh
   ```

2. **In Claude Code, switch models dynamically:**
   ```
   /model webSearch   # Switch to Gemini 2.5 Flash Lite
   /model think       # Switch to Claude Opus 4.1
   /model background  # Switch to GPT OSS 20B
   /model longContext # Switch to Gemini 2.5 Pro
   /model default     # Back to GPT-5
   ```

## Files Created

- `claude-code-router.config.json` - Router configuration
- `start-router.sh` - Startup script
- `.env` - API keys (add your keys)

## Next Steps

1. Add your OpenRouter API key to `.env`
2. Run `./start-router.sh` to start the router
3. Use `/model <route>` in Claude Code to switch models

## Troubleshooting

- Ensure OPENROUTER_API_KEY is set in `.env`
- Check router is running: `ps aux | grep claude-code-router`
- View logs for debugging if needed
