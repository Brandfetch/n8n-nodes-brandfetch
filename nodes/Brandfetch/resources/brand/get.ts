import type { INodeProperties } from 'n8n-workflow';

export const brandGetDescription: INodeProperties[] = [
	{
		displayName: 'Domain',
		name: 'domain',
		type: 'string',
		required: true,
		default: '',
		placeholder: 'e.g. apple.com',
		displayOptions: {
			show: {
				operation: ['getByDomain'],
				resource: ['brand'],
			},
		},
		description: 'The domain of the brand to retrieve (e.g. apple.com)',
	},
	{
		displayName: 'Ticker',
		name: 'ticker',
		type: 'string',
		required: true,
		default: '',
		placeholder: 'e.g. AAPL',
		displayOptions: {
			show: {
				operation: ['getByTicker'],
				resource: ['brand'],
			},
		},
		description: 'The stock or ETF ticker symbol of the brand to retrieve (e.g. AAPL)',
	},
	{
		displayName: 'ISIN',
		name: 'isin',
		type: 'string',
		required: true,
		default: '',
		placeholder: 'e.g. US0378331005',
		displayOptions: {
			show: {
				operation: ['getByIsin'],
				resource: ['brand'],
			},
		},
		description: 'The ISIN of the brand to retrieve (e.g. US0378331005)',
	},
	{
		displayName: 'Symbol',
		name: 'symbol',
		type: 'string',
		required: true,
		default: '',
		placeholder: 'e.g. BTC',
		displayOptions: {
			show: {
				operation: ['getByCrypto'],
				resource: ['brand'],
			},
		},
		description: 'The crypto symbol of the brand to retrieve (e.g. BTC)',
	},
];
