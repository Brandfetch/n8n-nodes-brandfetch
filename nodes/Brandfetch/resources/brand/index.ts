import type { INodeProperties } from 'n8n-workflow';
import { brandGetDescription } from './get';

const showOnlyForBrand = {
	resource: ['brand'],
};

export const brandDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForBrand,
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				action: 'Get brand data',
				description:
					'Fetch logos, colors, and company data by domain, stock/ETF ticker, ISIN or crypto',
				routing: {
					request: {
						method: 'GET',
						url: '=/brands/{{$parameter["domain"]}}',
					},
				},
			},
		],
		default: 'get',
	},
	...brandGetDescription,
];
