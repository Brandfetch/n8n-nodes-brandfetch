import type { INodeProperties } from 'n8n-workflow';
import { searchSearchDescription } from './search';

const showOnlyForSearch = {
	resource: ['search'],
};

export const searchDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForSearch,
		},
		options: [
			{
				name: 'Search',
				value: 'search',
				action: 'Search for brands',
				description: 'Autocomplete brand names or domains',
				routing: {
					request: {
						method: 'GET',
						url: '/search',
						qs: {
							c: '={{$credentials.clientId}}',
						},
					},
				},
			},
		],
		default: 'search',
	},
	...searchSearchDescription,
];
