# Walk Tech Website - Phase 1: Decisions

## Stack Decision: Keep Existing Stack
**Decision**: Keep Next.js 14 + Tailwind CSS + React 18 + Supabase

**Reasoning**:
- The existing project is already built on this stack with TypeScript passing
- All content, branding, and structure must be preserved
- Changing stacks would risk losing the significant work already done
## Import Alias Structure
**Decision**: Standardize on two path aliases:
- `@/components/*` → `src/components/*`
- `@/app/*` → `app/*` (for App Router pages)

**Migration**: All `@/src/components/...` → `@/components/...`
All `@/src/libsupabase` → `@/libsupabase`
- Next.js 14 App Router is modern and well-suited for this use case
- Tailwind CSS custom tokens are already defined and working
- Supabase provides authentication and backend without managing servers
## Design Token System
**Decision**: Extract and formalize design tokens from src/styles/globals.css:

**Color Palette** (from existing CSS variables):
- --walktech-navy: #1a2332 (primary background)
- --walktech-navy-light: #2d3a4b (card backgrounds)
- --walktech-accent: #00d4aa (primary accent, teal-green)
- --walktech-accent-hover: #00f5c4 (accent hover)
- --walktech-white: #ffffff`n- --walktech-gray-50: #f8f9fa`n- --walktech-gray-100: #e9ecef`n- --walktech-gray-600: #6c757d`n- --walktech-gray-700: #495057`n- --walktech-gray-800: #343a40`n- --walktech-gray-900: #212529`n
**Typography**:
- Base font:  Inter, system-ui, sans-serif
- Scale: h1: 2.5rem, h2: 2rem, h3: 1.5rem, lead: 1.1rem

**Spacing**:
- Section padding: 4rem top/bottom
- Component gaps: consistent 4-6rem grid gaps

**Component Classes**:
- .bg-navy, .bg-navy-light - navy backgrounds
- .text-accent - accent color
- .bg-accent, .bg-accent-hover - accent background states
- .hover-lift - lift on hover effect
- .section-padding - consistent section spacing
