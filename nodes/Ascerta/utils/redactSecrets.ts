// Match JSON string values, including escaped quotes and truncated log messages.
// Keep the pattern literal so no input can alter its structure.
const SECRET_PATTERN =
	/("(?:xProxy-Api-Key|Authorization|apiKey|api_key|openai_api_key)"\s*:\s*")(?:\\[\s\S]|[^"\\])*(?:"|\\?$)/gi;

export function redactSecrets(message: string): string {
	return message.replace(SECRET_PATTERN, (_match, prefix: string) => `${prefix}***REDACTED***"`);
}
