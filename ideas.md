# Socialmoon Portfolio — Design Direction

## Three directions considered

### 1. Orbital Field Notes

**Theme Name:** Orbital Field Notes

**Very Brief Intro:** An editorial founder portfolio presented as a living observation log: precise, tactile, and composed around the idea that good systems create momentum. It makes technical work feel like authored, human-led inquiry rather than a feed of generic “AI” claims.

**Probability:** 0.07

### 2. Operating Room

**Theme Name:** Operating Room

**Very Brief Intro:** A light, clinical information environment where projects appear as decision records, capability maps, and proof points. The tone is exceptionally clear and analytical, with an understated institutional confidence.

**Probability:** 0.03

### 3. Night Shift Broadcast

**Theme Name:** Night Shift Broadcast

**Very Brief Intro:** An energetic media-console world built around late-night building sessions, transmissions, and real-time releases. This direction prioritizes personality and movement, but risks competing with the authority needed for client and partner conversations.

**Probability:** 0.09

## Chosen direction: Orbital Field Notes

### Design Movement

**Orbital Field Notes** combines **Swiss editorial systems**, **Japanese industrial minimalism**, and **contemporary exhibition-catalogue art direction**. The site feels like an evolving field log of companies, systems, and experiments—not a template portfolio, a startup landing page, or a pretend operating system.

### Core Principles

1. **Show the work as momentum.** Companies, experiments, and capabilities are connected by a clear trajectory rather than separated into a card cemetery.
2. **Make technical depth legible.** Structured labels, evidence strings, and concise project metadata communicate credibility without dumping logos or skill chips.
3. **Use visual tension with restraint.** Strong black/ivory contrast, hard lines, off-axis compositions, and a single signal color create memorability without neon or decorative noise.
4. **Convert through clarity.** The next action—explore Socialmoon, review selected work, or start a conversation—must remain unmistakable at each level of scroll.

### Color Philosophy

The palette is a **printed technical journal at midnight**. Ink charcoal carries seriousness and provides contrast; bone-white gives the work editorial warmth rather than sterile black-and-white minimalism; **Socialmoon Cobalt** provides a precise, ownable energy associated with forward motion; a controlled vermilion signal dot calls attention to activity, without becoming a decorative trend. Color will define hierarchy and status, never merely fill surfaces.

### Layout Paradigm

The page is a **vertical trajectory with off-axis stations** rather than a centered stack of equal blocks. A fixed rail at wider widths shows position in the founder journey. The hero is a two-part composition: a text-led declaration is counterbalanced by an abstract orbit object. The companies section reads as a sequence of operating stations with widened and inset panels; selected projects appear as field reports; the final contact section closes as a direct transmission.

### Signature Elements

1. **Orbit line:** A thin cobalt line and small signal dot recur as a navigation and status language, suggesting a system in motion.
2. **Field labels:** Condensed uppercase metadata such as `01 / ACTIVE COMPANY` and `FIELD NOTE / 2026` ground the page in evidence and craft.
3. **Editorial frames:** Images live in clipped, squared-off frames with a subtle paper grain and occasional technical crop marks; corners are nearly square.

### Interaction Philosophy

Interactions should make the visitor feel that the work has depth, not that the interface needs attention. Project rows lift by a few pixels, metadata slides into view, and destination links reveal a directional mark. The rail indicates location progressively, while navigation scrolls to meaningful editorial chapters. All essential content and links remain accessible without hover or motion.

### Animation

The orbit line draws in once on entry, and the signal dot makes a slow, controlled pass along it only when motion is allowed. Content enters in short editorial stagger sequences of 40–60ms, using opacity and `translateY` only. Card hovers use a 180ms transform and a subtle image scale; buttons compress to `scale(0.97)` on press. Motion is removed or reduced when `prefers-reduced-motion` is enabled. No parallax, endless marquee, cursor trail, loading theatrics, or scroll-jacking.

### Typography System

**Space Grotesk** drives the strong, technical display hierarchy: headline weights are 600–700, often with tight tracking, never all-caps for long reading. **DM Mono** handles field labels, timelines, tags, and numerical metadata, giving the site a maker’s-notebook precision. **Manrope** supports body copy at a generous line height for direct, calm readability. Type size should change meaningfully between chapter headlines and metadata instead of relying on repeated card styles.

### Brand Essence

**Socialmoon is Vaibhav Saini’s public field guide to turning ambitious business problems into AI-enabled systems, products, and companies.**

**Personality:** exacting, curious, grounded.

### Brand Voice

Headlines are declarative, active, and specific. CTAs invite a serious next step instead of using generic conversion language. Microcopy should make the operating context visible without hype.

> “Ideas are cheap. Systems are how they stay alive.”

> “Building a high-leverage workflow? Let’s map the next move.”

### Wordmark & Logo

The header uses a simple custom **Socialmoon orbit mark**: a crescent-like negative space nested inside a speech contour and cut by a single orbital line. The mark is paired with a carefully set `SOCIALMOON / FIELD NOTES` wordmark in the interface, not a default-font logo treatment. It remains clearly visible in the header and appears as the favicon.

### Signature Brand Color

**Socialmoon Cobalt — `#285DFF`**. This is used sparingly for trajectory lines, selected states, and the brand mark so it carries a deliberate meaning every time it appears.

## Implementation guardrail

Every component must reinforce the field-note metaphor and Vaibhav’s founder/operator authority. If a design choice feels like a generic SaaS landing page, a neon cyberpunk demo, a grid of identical cards, or a decorative AI visual, it is out of scope.

## Style Decisions

- The orbit system is a single, continuous field-log apparatus: its cobalt spine, station codes, signal dots, and field labels denote position, trajectory, or status—not decorative flourish.
- The field-report chapter follows exhibition-catalogue hierarchy: one major operating report, clearly subordinate evidence reports, and a quiet structured index as proof.
- The Socialmoon mark and `SOCIALMOON / FIELD NOTES` wordmark are prominent identity assets in the header; cobalt is reserved for brand, motion, status, and deliberate transmission moments.
