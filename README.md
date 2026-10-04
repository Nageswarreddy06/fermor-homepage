# Fermor — Make room for your future

An original, responsive homepage concept for the Fermor frontend assignment. Built with React, TypeScript, the Next.js App Router conventions, and custom CSS. This submission is a standard Next.js project suitable for Vercel. The separate preview deployment uses the same homepage source with a compatible Vite runtime.

## Run locally

Requirements: Node.js 22.13+ and npm.

```sh
npm install
npm run dev
```

Open the address printed by the development server.

```sh
npm run build
npm run lint
npm run typecheck
```

## Product and design decisions

- The page is for people in India who want to understand their finances and start planning without financial jargon.
- The narrative moves from understanding the present to planning the future. The main call to action opens a working calculator instead of a disconnected signup flow.
- Navy gives the interface a calm, credible foundation. Lime highlights progress, and an italic serif contrasts with the utilitarian dashboard typography.
- The preview offers three views: overview, spending, and goals. All figures and the decorative chart in that preview are illustrative sample data, not live financial data.
- The savings planner is a real client-side SIP calculation. It updates investment, growth, and the projected total as the user changes monthly contributions, duration, and assumed return.
- Calculation: with monthly contribution P, monthly rate r, and n months, future value is P × (((1+r)^n−1)/r) × (1+r). At zero return, it is P × n. This assumes contributions at the beginning of each month and excludes taxes, fees, and inflation.
- Inputs stay in browser memory; there is no bank integration, account creation, backend, or stored personal data.
- Responsive CSS stacks the page on small screens, with an expandable navigation menu. Semantic elements, labelled range inputs, tab and accordion states, visible keyboard focus, a skip link, and reduced-motion support are included.
- No fake testimonials, download links, customer counts, or promises of guaranteed returns.

## Structure

- `app/page.tsx` — homepage and client-side interactions
- `app/globals.css` — visual system and responsive styles
- `app/layout.tsx` — document metadata
- `public/favicon.svg` — brand favicon

## Reference and authorship

Product positioning was informed by https://fermor.in. Layout, writing, visual system, and implementation are an independent assignment interpretation. AI tools assisted the implementation; review and adapt the work before presenting it as your submission.

## Deploy on Vercel

Push this folder to a GitHub repository, import that repository into Vercel, and select the Next.js framework preset. No environment variables are needed. Use the default build command (`npm run build`).
