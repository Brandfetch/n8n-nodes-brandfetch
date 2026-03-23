import type { INodeProperties } from 'n8n-workflow';

const showOnlyForSearch = {
	operation: ['search'],
	resource: ['search'],
};

export const searchSearchDescription: INodeProperties[] = [
	{
		displayName: 'Query',
		name: 'query',
		type: 'string',
		required: true,
		default: '',
		placeholder: 'e.g. Apple',
		displayOptions: {
			show: showOnlyForSearch,
		},
		description: 'The name or keyword to search for brands',
		routing: {
			send: {
				type: 'query',
				property: 'query',
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: {
			minValue: 1,
			maxValue: 100,
		},
		default: 50,
		displayOptions: {
			show: showOnlyForSearch,
		},
		description: 'Max number of results to return',  
		routing: {
			send: {
				type: 'query',
				property: 'limit',
			},
		},
	},
];
