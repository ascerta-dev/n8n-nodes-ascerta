# Software Bill of Materials

## Direct Dependencies

This package has zero runtime dependencies. All dependencies are dev-only (build tooling).

## Dev Dependencies

| Package | Version | License | Purpose |
|---------|---------|---------|---------|
| @types/node | ^22 | MIT | Node.js type definitions |
| eslint | ^10 | MIT | Linting |
| typescript-eslint | ^8 | MIT | TypeScript parser and rules for eslint |
| prettier | ~3.3 | MIT | Code formatting |
| typescript | ~5.5 | Apache-2.0 | TypeScript compiler |
| vitest | ^4 | MIT | Test runner |

## Peer Dependencies

| Package | Version | License | Purpose |
|---------|---------|---------|---------|
| n8n-workflow | * | SEE LICENSE | n8n workflow engine (also listed as devDependency for local builds) |

## Runtime Services

| Service | Provider | Purpose |
|---------|----------|---------|
| Ascerta API | Ascerta | Proxy endpoint for cost tracking and budget enforcement |
| OpenAI API | OpenAI | LLM provider (via Ascerta proxy) |
| Anthropic API | Anthropic | LLM provider (via Ascerta proxy) |
| Azure OpenAI | Microsoft | LLM provider (via Ascerta proxy) |
| AWS Bedrock | Amazon | LLM provider (via Ascerta proxy) |
| Databricks | Databricks | LLM provider (via Ascerta proxy) |

## Companion Toolkit

| Package | Repository | Purpose |
|---------|-----------|---------|
| ascerta-n8n-toolkit | [ascerta-dev/utilities](https://github.com/ascerta-dev/utilities) | Migration and audit scripts for n8n workflows |

Last updated: 2026-06-05
