# @brandfetch/n8n-nodes-brandfetch

[Brandfetch](https://brandfetch.com) is the brand data infrastructure that gives you instant access to logos, colors, and company information for millions of brands — all from a single API.

This community node brings the [Brandfetch API](https://brandfetch.com/developers) into your [n8n](https://n8n.io/) workflows, so you can enrich data, automate brand asset retrieval, and build pipelines around brand identity without leaving your automation stack.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/sustainable-use-license/) workflow automation platform.

[Installation](#installation)
[Operations](#operations)
[Credentials](#credentials)
[Compatibility](#compatibility)
[Resources](#resources)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

- **Get Brand** — Get logos, colors, and company data by domain, stock/ETF ticker, ISIN or crypto.

## Credentials

This node uses two credentials depending on the resource:

- **API Key** — used for the **Brand** resource. Sent as `Authorization: Bearer <secretKey>`.

Both can be found in your [Brandfetch developer dashboard](https://developers.brandfetch.com). Add them to the Brandfetch credential in n8n.

## Compatibility

Compatible with n8n@1.60.0 or later.

## Resources

- [Brandfetch developers dashboard](https://developers.brandfetch.com)
- [Brandfetch API documentation](https://docs.brandfetch.com)
- [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
