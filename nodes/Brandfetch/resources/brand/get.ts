import type { INodeProperties } from 'n8n-workflow';

const showOnlyForBrandGet = {
	operation: ['get'],
	resource: ['brand'],
};

export const brandGetDescription: INodeProperties[] = [
	{
		displayName: 'Domain',
		name: 'domain',
		type: 'string',
		required: true,
		default: '',
		placeholder: 'e.g. apple.com',
		displayOptions: {
			show: showOnlyForBrandGet,
		},
		description: 'The domain of the brand to retrieve (e.g. apple.com)',
	},
];
