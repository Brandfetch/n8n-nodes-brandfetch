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
				name: 'Get by Domain',
				value: 'getByDomain',
				action: 'Get brand data by domain',
				description: 'Fetch logos, colors, and company data by domain (e.g. apple.com)',
				routing: {
					request: {
						method: 'GET',
						url: '=/brands/domain/{{$parameter["domain"]}}',
					},
				},
			},
			{
				name: 'Get by Ticker',
				value: 'getByTicker',
				action: 'Get brand data by stock or ETF ticker',
				description:
					'Fetch logos, colors, and company data by stock or ETF ticker symbol (e.g. AAPL)',
				routing: {
					request: {
						method: 'GET',
						url: '=/brands/ticker/{{$parameter["ticker"]}}',
					},
				},
			},
			{
				name: 'Get by ISIN',
				value: 'getByIsin',
				action: 'Get brand data by ISIN',
				description: 'Fetch logos, colors, and company data by ISIN (e.g. US0378331005)',
				routing: {
					request: {
						method: 'GET',
						url: '=/brands/isin/{{$parameter["isin"]}}',
					},
				},
			},
			{
				name: 'Get by Crypto',
				value: 'getByCrypto',
				action: 'Get brand data by crypto symbol',
				description: 'Fetch logos, colors, and company data by crypto symbol (e.g. BTC)',
				routing: {
					request: {
						method: 'GET',
						url: '=/brands/crypto/{{$parameter["symbol"]}}',
					},
				},
			},
		],
		default: 'getByDomain',
	},
	...brandGetDescription,
];
