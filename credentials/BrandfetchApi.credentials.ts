import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
	Icon,
} from 'n8n-workflow';

export class BrandfetchApi implements ICredentialType {
	name = 'brandfetchApi';

	displayName = 'Brandfetch API';

	icon: Icon = 'file:../icons/brandfetch.svg';

	documentationUrl = 'https://docs.brandfetch.com/reference/authentication';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			description: 'Used for the Brand resource',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.brandfetch.io/v2',
			url: '/brands/brandfetch.com',
			method: 'GET',
		},
	};
}
