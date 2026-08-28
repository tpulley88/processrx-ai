# ProcessRx.ai

A responsive React and TypeScript marketing prototype for a workflow-automation consultancy serving appointment-based businesses.

> Portfolio note: this is a product and interaction-design prototype. It is not a deployed service and should not be read as making current operational or performance claims.

## Portfolio highlights

- Multi-page React application with reusable layouts and components
- Responsive Tailwind CSS design
- Industry and use-case landing pages
- Contact-form validation and consent-oriented messaging
- Dynamic page metadata
- Cookie-based demo usage limits
- Deterministic guided chat that works without external services

## Technology

- React 19
- TypeScript
- Vite
- React Router
- Tailwind CSS

## Run locally

```text
npm install
npm run dev
```

To produce a static build:

```text
npm run build
```

## Security decision

An earlier prototype called an AI API directly from browser code. That design was removed because browser-delivered credentials cannot remain secret. The portfolio version makes no external AI requests and uses local, deterministic responses.

A production implementation should place provider credentials in a server-side environment, authenticate and validate requests, enforce server-side rate limits, minimize submitted data, and publish clear retention and deletion policies.

No `.env` file, API credential, submitted lead data, or deployment secret is included in this repository.

The public repository starts with this sanitized portfolio edition; earlier experimental history was intentionally not imported.

## Project context

Built by Terin Pulley as a business and product-design prototype. Statistics and marketing claims in this historical prototype should be independently sourced before any production use.
