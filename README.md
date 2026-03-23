# @brandfetch/n8n-nodes-brandfetch

This is an n8n community node. It lets you use the [Brandfetch API](https://brandfetch.com/developers) in your n8n workflows to retrieve brand assets such as logos, colors, and fonts, and to search for brands by name.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/sustainable-use-license/) workflow automation platform.

[Installation](#installation)
[Operations](#operations)
[Credentials](#credentials)
[Compatibility](#compatibility)
[Resources](#resources)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

- **Brand**
  - **Get** — Fetch logos, colors, and company data by domain, stock/ETF ticker, ISIN or crypto.
- **Search**
  - **Search** — Autocomplete brand names or domains

## Credentials

This node uses two credentials depending on the resource:

- **API Key** — used for the **Brand** resource. Sent as `Authorization: Bearer <key>`.
- **Client ID** — used for the **Search** resource. Sent as the `c` query parameter.

Both can be found in your [Brandfetch developer dashboard](https://developers.brandfetch.com/dashboard/keys). Add them to the Brandfetch credential in n8n.

Refer to the [Brandfetch authentication docs](https://docs.brandfetch.com/reference/authentication) for more information.

## Compatibility

Compatible with n8n@1.60.0 or later.

## Resources

- [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
- [Brandfetch API documentation](https://docs.brandfetch.com)
