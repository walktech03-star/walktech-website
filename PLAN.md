# Walk Tech Website - Phase 2: Plan

## Target Stack
**Keep**: Next.js 14 + Tailwind CSS + React 18 + Supabase

**Justification**:
- Existing project built on this stack with TypeScript passing (0 errors)
- All content, branding, and structure must be preserved
- Changing stacks risks losing significant existing work
- Next.js 14 App Router is modern and well-suited
- Tailwind CSS custom tokens already defined and working
- Supabase provides auth and backend without server management
## Folder Structure
- pp/ - Next.js App Router pages
- pp/admin/ - Admin panel with authentication
- src/components/ - Reusable components (navbar, footer, cards, lists)
- src/components/pages/ - Page-level components (hero, services-overview)
- src/components/admin/ - Admin panel components
- src/lib/ - Supabase and utility functions
- src/styles/ - Design tokens and globals
- public/ - Static assets (images, favicon, etc.)
