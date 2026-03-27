# @brandfetch/n8n-nodes-brandfetch

This is an n8n community node. It lets you use the [Brandfetch API](https://brandfetch.com/developers) in your n8n workflows to retrieve brand assets such as logos, colors, company data.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/sustainable-use-license/) workflow automation platform.

[Installation](#installation)
[Operations](#operations)
[Credentials](#credentials)
[Compatibility](#compatibility)
[Resources](#resources)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

- **Get Brand** — Fetch logos, colors, and company data by domain, stock/ETF ticker, ISIN or crypto.

## Credentials

This node uses two credentials depending on the resource:

- **API Key** — used for the **Brand** resource. Sent as `Authorization: Bearer <key>`.

Both can be found in your [Brandfetch developer dashboard](https://developers.brandfetch.com). Add them to the Brandfetch credential in n8n.

## Compatibility

Compatible with n8n@1.60.0 or later.

## Resources

- [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
- [Brandfetch API documentation](https://docs.brandfetch.com)
