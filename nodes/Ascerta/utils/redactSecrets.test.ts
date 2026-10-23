import { describe, expect, it } from 'vitest';
import { redactSecrets } from './redactSecrets';

describe('redactSecrets', () => {
	it.each(['xProxy-Api-Key', 'Authorization', 'apiKey', 'api_key', 'openai_api_key'])(
		'masks %s without changing non-secret fields',
		(key) => {
			const message = JSON.stringify({ [key]: 'example-secret', model: 'example-model' });
			expect(JSON.parse(redactSecrets(message))).toEqual({
				[key]: '***REDACTED***',
				model: 'example-model',
			});
		},
	);

	it('handles mixed case, whitespace, nested keys, and multiple credentials', () => {
		expect(
			redactSecrets('Request: {"headers":{"AUTHORIZATION" : "Bearer example"},"apiKey":"other"}'),
		).toBe('Request: {"headers":{"AUTHORIZATION" : "***REDACTED***"},"apiKey":"***REDACTED***"}');
	});

	it('masks the whole value when it contains JSON escapes', () => {
		const message = JSON.stringify({ apiKey: 'before"after\\suffix\nend' });
		expect(JSON.parse(redactSecrets(message))).toEqual({ apiKey: '***REDACTED***' });
	});

	it.each(['partial-secret', 'partial-secret\\', 'partial-secret\\"tail'])(
		'masks truncated values: %s',
		(value) => {
			expect(redactSecrets(`Result: {"apiKey":"${value}`)).toBe(
				'Result: {"apiKey":"***REDACTED***"',
			);
		},
	);

	it('handles empty values and repeated calls', () => {
		for (let i = 0; i < 2; i++) {
			expect(redactSecrets('{"apiKey":""}')).toBe('{"apiKey":"***REDACTED***"}');
		}
	});

	it('leaves ordinary messages unchanged', () => {
		expect(redactSecrets('Model configured: example')).toBe('Model configured: example');
	});
});
