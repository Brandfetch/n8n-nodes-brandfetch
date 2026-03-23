import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { brandDescription } from './resources/brand';
import { searchDescription } from './resources/search';

export class Brandfetch implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Brandfetch',
		name: 'brandfetch',
		icon: 'file:../../icons/brandfetch.svg',
		group: ['input'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Fetch brand assets and data using the Brandfetch API',
		defaults: {
			name: 'Brandfetch',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'brandfetchApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://api.brandfetch.io/v2',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Brand',
						value: 'brand',
					},
					{
						name: 'Search',
						value: 'search',
					},
				],
				default: 'brand',
			},
			...brandDescription,
			...searchDescription,
		],
	};
}
