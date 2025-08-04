# Health Check API

The health check API provides endpoints for monitoring service health and status.

## Endpoints

### GET /api/health

Health check endpoint with multiple response formats.

#### Query Parameters

- `format` - Response format (default: `basic`)
  - `basic` - Simple health status
  - `detailed` - Detailed system information
  - `readiness` - Kubernetes readiness probe format
  - `liveness` - Kubernetes liveness probe format

#### Examples

**Basic Health Check:**

```bash
curl http://localhost:3000/api/health
```

```json
{
  "status": "healthy",
  "timestamp": 1703123456789,
  "uptime": 3600.123
}
```

**Detailed Health Check:**

```bash
curl http://localhost:3000/api/health?format=detailed
```

```json
{
  "status": "healthy",
  "timestamp": 1703123456789,
  "uptime": 3600.123,
  "memory": {
    "rss": 123456789,
    "heapTotal": 67108864,
    "heapUsed": 45678901,
    "external": 2345678
  },
  "version": "v18.17.0",
  "platform": "darwin",
  "arch": "arm64",
  "env": "development",
  "pid": 12345
}
```

**Readiness Probe:**

```bash
curl http://localhost:3000/api/health?format=readiness
```

```json
{
  "status": "ready",
  "timestamp": 1703123456789,
  "checks": {
    "database": "ok",
    "filesystem": "ok",
    "memory": "ok"
  }
}
```

**Liveness Probe:**

```bash
curl http://localhost:3000/api/health?format=liveness
```

```json
{
  "status": "alive",
  "timestamp": 1703123456789,
  "uptime": 3600.123
}
```

### HEAD /api/health

Lightweight health check that returns only HTTP status codes:

- `200` - Service is healthy
- `503` - Service is unavailable

```bash
curl -I http://localhost:3000/api/health
```

### POST /api/health

Custom health check with specific test requests.

#### Request Body

```json
{
  "checks": ["memory", "uptime", "version"]
}
```

#### Response

```json
{
  "status": "healthy",
  "timestamp": 1703123456789,
  "requestedChecks": ["memory", "uptime", "version"],
  "results": {
    "memory": {
      "status": "ok",
      "heapUsed": 45678901,
      "heapTotal": 67108864,
      "rss": 123456789
    },
    "uptime": {
      "status": "ok",
      "seconds": 3600.123,
      "formatted": "1h 0m 0s"
    },
    "version": {
      "status": "ok",
      "node": "v18.17.0",
      "platform": "darwin",
      "arch": "arm64"
    }
  }
}
```

## Kubernetes Integration

### Liveness Probe

```yaml
livenessProbe:
  httpGet:
    path: /api/health?format=liveness
    port: 3000
  initialDelaySeconds: 30
  periodSeconds: 10
  timeoutSeconds: 5
  failureThreshold: 3
```

### Readiness Probe

```yaml
readinessProbe:
  httpGet:
    path: /api/health?format=readiness
    port: 3000
  initialDelaySeconds: 5
  periodSeconds: 5
  timeoutSeconds: 3
  successThreshold: 1
  failureThreshold: 3
```

### Startup Probe

```yaml
startupProbe:
  httpGet:
    path: /api/health
    port: 3000
  initialDelaySeconds: 10
  periodSeconds: 5
  timeoutSeconds: 3
  failureThreshold: 10
```

## Docker Healthcheck

```dockerfile
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/api/health || exit 1
```

## Load Balancer Health Check

Most load balancers can use the HEAD endpoint for lightweight health checks:

```bash
curl -I http://localhost:3000/api/health
```

## Available Checks

| Check     | Description                      |
| --------- | -------------------------------- |
| `memory`  | Memory usage and thresholds      |
| `uptime`  | Service uptime information       |
| `version` | Node.js and platform information |

## Response Status Codes

| Code  | Meaning                            |
| ----- | ---------------------------------- |
| `200` | Service is healthy                 |
| `400` | Bad request (invalid parameters)   |
| `500` | Service is unhealthy               |
| `503` | Service is unavailable (HEAD only) |

## Migration from Performance Endpoint

The previous `/api/performance` endpoint has been replaced with `/api/health`.

**Old endpoint:**

```bash
curl http://localhost:3000/api/performance?endpoint=health
```

**New endpoint:**

```bash
curl http://localhost:3000/api/health?format=detailed
```
