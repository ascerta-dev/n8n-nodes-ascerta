import {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
	Icon,
} from 'n8n-workflow';

export class AscertaDatabricksApi implements ICredentialType {
	name = 'ascertaDatabricksApi';

	displayName = 'Ascerta Databricks API';

	icon: Icon = 'file:ascerta_logo.svg';

	documentationUrl = 'https://docs.databricks.com/en/dev-tools/auth/pat.html';

	properties: INodeProperties[] = [
		{
			displayName: 'Personal Access Token',
			name: 'accessToken',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'Databricks Personal Access Token (PAT)',
		},
		{
			displayName: 'Workspace URL',
			name: 'workspaceUrl',
			type: 'string',
			default: '',
			required: true,
			placeholder: 'e.g. https://1234567890.cloud.databricks.com',
			description: 'The URL of your Databricks workspace',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials.accessToken}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials.workspaceUrl}}',
			url: '/api/2.0/serving-endpoints',
			method: 'GET',
			headers: {
				Authorization: '=Bearer {{$credentials.accessToken}}',
			},
		},
	};
}
