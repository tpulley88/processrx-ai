# ProcessRx.ai Business Requirements Document

## 1. Project Overview
ProcessRx.ai is a modern, outcome-driven marketing website for an AI automation service targeting small service-based businesses (therapists, dentists, vets, medspas, etc.). The brand's mission is to help clients automate workflows, reclaim time, and reduce admin burden—without replacing human jobs.

## 2. Target Audience
- Small service-based business owners and operators
- Industries: Therapy, Dentistry, Veterinary, Medspa, and similar
- Tech-comfortable but not necessarily technical

## 3. Brand & Visual Identity
- **Primary Color:** Royal Purple (#6B1E9B)
- **Accent Colors:** Teals and other clean, professional attention-grabbing colors (designer's discretion)
- **Fonts:**
  - Headers: Open-source alternative to Tan Harmoni (swap later)
  - Body: Open-source alternative to HH Grotesk Pro (swap later)
- **Logo:** Provided PNG (transparent background); used in header, footer, and favicon (favicon is icon-only)
- **Fallback Text:** "ProcessRx.ai" for logo accessibility
- **Visual Style:**
  - Minimal decoration
  - Sleek, pill-shaped buttons
  - Bold call-to-actions
  - Minimal soft shadows
  - Calm, confident hero section
- **Responsiveness:** Fully responsive, mobile-friendly

## 4. Technical Stack & Deployment
- **Framework:** React (with Vite)
- **Styling:** TailwindCSS (utility-first, responsive, hover/active/focus states)
- **Componentization:** Modular, reusable components
- **Font Loading:** Optimized for performance
- **Build Output:** `dist/` or `build/` folder
- **Build Command:** `npm run build`
- **Routing:** SPA with Netlify fallback (`netlify.toml` in root)
- **Deployment:** Manual upload to Netlify

## 5. Pages & Features
### 5.1 Home (Landing Page)
- Clear intro headline and subtext (brand purpose)
- CTA: "Book a Free Consult" (multiple logical placements)
- Use-case examples: client intake, appointment reminders, missed call follow-up
- Embedded Tally contact form (placeholder)
- Minimal scroll-based effects (only for clarity)
- Footer: contact info, legal links, optional small text ("A product of MTTM Ventures")

### 5.2 Use Cases Hub
- Linked pages: `/processes/intake`, `/processes/appointment-reminders`, `/processes/missed-calls`
- Each page: sample automation, "Before Automation" vs "After Workflow"
- Preloaded chatbot stat per use case
- Process-specific thank-you banner after form submission

### 5.3 Industry Pages
- Industries: Therapist, Dentist, Vet, Medspa, etc. (scaffolded for expansion)
- Each page: industry-specific copy, same tone/layout
- Not restrictive—meant for inspiration
- Navigation: Dropdown labeled "Industries"

### 5.4 Contact Page
- Embedded Tally form (placeholder)
- Fields: Name, Email (validated), Phone (validated), Best time to contact (freeform), Preferred method (checkbox), Industry type (freeform), Interested processes (checkbox + Other)
- Hidden honeypot for spam reduction
- After submission: redirect to relevant Use Case (based on user's interest), show thank-you banner for 60 seconds

### 5.5 Legal Pages
- Privacy Policy and Terms of Service (provided content)
- Linked in footer

## 6. Chat Agent Widget
- **Type:** Custom, powered by N8N + OpenAI
- **Placement:** Fixed bottom-right
- **Style:**
  - Slightly rounded pill-style container
  - Chat bubble icon with subtle motion/pulse when idle
  - 350px wide x 500px tall
  - Accent: Royal Purple (#6B1E9B)
  - Font: Matches site fonts
- **Behavior:**
  - Preloads stat-backed message based on page context
  - Quick replies: "Show me how it works", "Book a consult", "I have questions"
  - All messages routed to N8N for contextual reply
  - Hidden on legal/privacy pages and where appropriate

## 7. SEO, Analytics, & Legal
- **SEO:** Advanced meta tags, Open Graph, structured data
- **Analytics:** Google Analytics placeholder (to be configured post-domain)
- **Cookie Consent:** Minimal banner with accept button and privacy policy link
- **Accessibility:** Logo fallback text, semantic HTML, keyboard navigation

## 8. Asset Usage
- **Logo:** Header, footer, favicon (icon only)
- **Favicon:** Generated from logo (icon only, no text)

## 9. Footer
- Contact info, legal links, optional small text ("A product of MTTM Ventures")
- Social media links: not displayed, but code structure allows future addition

## 10. Future-Proofing
- Industry and use case pages easily expandable
- Fonts and brand assets swappable
- Social media and additional integrations can be added

---

**Document last updated:** [To be updated as requirements evolve] 