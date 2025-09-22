# Complete Markdown Primer for Thread Docs

*Your guide to writing beautiful content for your cross-stitch website*

## What is Markdown?

Markdown is a simple way to format text using plain characters. Instead of clicking formatting buttons, you type special symbols that tell the computer how to display your text.

**Think of it like shorthand for formatting:**
- `**bold**` instead of clicking a Bold button
- `# Heading` instead of selecting "Heading 1" from a menu

---

## Headers & Titles

Use `#` symbols to create headings. More `#` = smaller heading.

```markdown
# Main Title (Biggest)
## Section Heading  
### Subsection
#### Small Heading
##### Smaller Heading
###### Smallest Heading
```

**For your cross-stitch site:**
```markdown
# Wedding Sampler for Sarah & Mike
## Project Details
### Stitching Techniques Used
#### French Knots
```

---

## Text Formatting

### Basic Emphasis
```markdown
*italic text* or _italic text_
**bold text** or __bold text__
***bold and italic*** or ___bold and italic___
~~strikethrough text~~
```

**Results:**
- *italic text*
- **bold text** 
- ***bold and italic***
- ~~strikethrough text~~

### Perfect for Cross-Stitch Content
```markdown
I'm working on a **gorgeous wedding sampler** with *delicate roses* and ***absolutely stunning*** gold metallic threads.

~~I thought this would take 2 weeks~~ This actually took 6 weeks, but it was worth every stitch!
```

---

## Lists

### Bullet Points
```markdown
- First item
- Second item
- Third item
  - Nested item (2 spaces indent)
  - Another nested item
- Back to main level
```

### Numbered Lists
```markdown
1. First step
2. Second step
3. Third step
   1. Sub-step (3 spaces indent)
   2. Another sub-step
4. Fourth step
```

### Cross-Stitch Example
```markdown
## Supplies Needed
- 14-count Aida cloth (cream)
- DMC floss colors:
  - 310 (Black)
  - 3706 (Medium Melon)
  - 3708 (Light Melon)
- Size 24 tapestry needle
- 6-inch embroidery hoop

## Process Steps
1. Prepare your fabric
2. Find the center point
3. Start with the darkest colors
4. Work outward from center
5. Add details and highlights last
```

---

## Links

### Basic Links
```markdown
[Link text](URL)
[Cross Stitch Guild](https://example.com)
```

### Links to Other Pages on Your Site
```markdown
Check out my [completed projects](projects.qmd) for inspiration!
See my [photo gallery](gallery.qmd) for detailed shots.
```

### Email Links
```markdown
[Contact me](mailto:your.email@example.com)
```

### Links That Open in New Tabs
```markdown
[DMC Thread Chart](https://dmc.com/us/thread-chart){target="_blank"}
```

---

## Images

### Basic Image
```markdown
![Alt text](path/to/image.jpg)
![Wedding sampler progress](images/wedding-sampler-wip.jpg)
```

### Image with Caption
```markdown
![Wedding sampler detail](images/detail-shot.jpg)
*Close-up showing the French knot roses*
```

### Sized Images
```markdown
![Small preview](images/preview.jpg){width=300}
![Large showcase](images/finished-piece.jpg){width=100%}
```

### Image with Link
```markdown
[![Click to enlarge](images/thumbnail.jpg)](images/full-size.jpg)
```

---

## Adding Emojis 🧵

### Method 1: Copy and Paste
Just copy emojis from anywhere and paste them directly:

```markdown
# My Cross-Stitch Adventures 🧵✨
Working on a beautiful rose sampler today! 🌹
```

### Method 2: Emoji Shortcuts (VSCode)
Type `:emoji_name:` and VSCode will suggest options:

```markdown
:thread: → 🧵
:scissors: → ✂️
:heart: → ❤️
:star: → ⭐
```

### Method 3: System Emoji Picker
- **Windows:** `Win + .` or `Win + ;`
- **Mac:** `Cmd + Ctrl + Space`

### Cross-Stitch Relevant Emojis
```markdown
🧵 Thread/yarn           🌸 Flowers
✂️ Scissors             🌿 Leaves  
🪡 Sewing needle        🦋 Butterfly
📐 Ruler                🏠 House
🎨 Art palette          ❤️ Heart
🔍 Magnifying glass     ✨ Sparkles
🌈 Rainbow              📸 Camera
🖼️ Framed picture       👰 Wedding
🍼 Baby                 🎄 Christmas
🌹 Rose                 💐 Bouquet
```

---

## Tables

Perfect for project specifications:

```markdown
| Project | Fabric | Threads | Status |
|---------|--------|---------|--------|
| Wedding Sampler | 18-count Aida | DMC Cotton | In Progress |
| Baby Birth Announce | 14-count Linen | Silk Floss | Completed |
| Kitchen Herbs | 16-count Aida | Cotton | Planning |
```

**Advanced table with alignment:**
```markdown
| Pattern | Difficulty | Time Estimate |
|:--------|:----------:|--------------:|
| Simple Bookmark | Easy | 3 hours |
| Rose Sampler | Medium | 2 weeks |
| Wedding Heirloom | Advanced | 3 months |
```

- `:--------` = Left aligned
- `:-------:` = Centered  
- `--------:` = Right aligned

---

## Blockquotes

Great for sharing inspiration or testimonials:

```markdown
> "Cross-stitch is like meditation with a beautiful end result."
> — Unknown

> The bride's mother said: "This is the most beautiful wedding gift we've ever received. Sarah cried when she saw it!"
```

**Results:**
> "Cross-stitch is like meditation with a beautiful end result."  
> — Unknown

---

## Code and Technical Text

### Inline Code
Use backticks for technical terms or pattern references:

```markdown
Use `DMC 817` for the rose centers and `DMC 3689` for highlights.
The pattern calls for a `French knot` in each flower center.
```

### Code Blocks
For longer technical content:

```markdown
```
Pattern Instructions:
1. Start 2 inches from top edge
2. Count 47 stitches from left edge  
3. Begin with symbol ★ in center
```
```

---

## Horizontal Lines

Create visual breaks in your content:

```markdown
---
```

**Perfect for separating project sections:**
```markdown
## Current Projects
Working on three pieces this month...

---

## Recently Completed  
Just finished these beautiful pieces...

---

## Planning Phase
Excited to start these patterns next...
```

---

## Quarto-Specific Features

### Callout Boxes
Create eye-catching information boxes:

```markdown
::: {.callout-note}
## Pro Tip
Always start stitching from the center of your fabric to ensure proper placement!
:::

::: {.callout-warning}
## Pattern Copyright
Remember to respect pattern copyrights when sharing photos online.
:::

::: {.callout-tip}
## Time-Saving Trick
Pre-cut all your floss lengths before starting a new color section.
:::
```

### Tabbed Content
Perfect for showing multiple views of the same project:

```markdown
::: {.panel-tabset}

## Work in Progress
![Current state](images/wip-current.jpg)
About 60% complete now...

## Starting Photo  
![Day one](images/wip-start.jpg)
How it looked when I began...

## Pattern Reference
![Original pattern](images/pattern-scan.jpg)
The inspiration piece...

:::
```

---

## Markdown for Different Content Types

### Project Documentation
```markdown
# Rose Garden Wedding Sampler

![Completed sampler](images/rose-wedding-final.jpg)

## Project Overview
**Recipients:** Sarah & Michael Thompson  
**Occasion:** Wedding gift  
**Started:** January 15, 2024  
**Completed:** March 20, 2024  
**Fabric:** 18-count ivory Aida  
**Finished size:** 12" x 16"  

## Design Elements
The sampler features:
- **Central motif:** Intertwined wedding rings
- **Border pattern:** Climbing roses with thorns
- **Personalization:** Names and wedding date
- **Color palette:** Soft pinks, sage greens, and gold metallic

::: {.callout-note}
## Special Technique
I used a combination of cross-stitch and backstitch for the rose petals, with French knots for dimensional centers.
:::

## Challenges & Solutions
The trickiest part was getting the metallic thread to lie flat. I discovered that using shorter lengths (about 12 inches) and gentle tension made all the difference.

**Time breakdown:**
- Design planning: 5 hours
- Stitching: 85 hours  
- Finishing: 8 hours
- **Total:** 98 hours of love ❤️

---

*This piece now hangs in Sarah and Michael's dining room, and they say it's their most treasured wedding gift! 🥰*
```

### Blog Post Style
```markdown
# Mastering French Knots: My Journey from Frustration to Love

*Posted: March 15, 2024* 📅

For the longest time, French knots were my nemesis. They'd either be too loose, too tight, or mysteriously disappear into the fabric. But after working on my latest rose sampler, I finally cracked the code! 🎉

## The Breakthrough Moment ✨

It happened while working on the centers of tiny roses for a wedding gift. I was getting frustrated with my usual approach when I tried something different...

### What I Used to Do ❌
- Wrap the thread 3-4 times around the needle
- Pull tight immediately  
- Wonder why it looked messy

### What Works Better ✅
- **Two wraps only** - more wraps = bigger knots, not better knots
- **Gentle tension** - snug but not strangling the thread
- **Needle angle** - keep it close to perpendicular to fabric
- **Confidence** - pull through decisively, don't hesitate

::: {.callout-tip}
## My Secret Weapon
I use a slightly larger needle (size 22 instead of 24) for French knots. The larger eye makes it easier to pull the wrapped thread through cleanly.
:::

## Practice Makes Perfect 🎯

I spent an evening just practicing French knots on scrap Aida:
- Started with **heavy thread** (easier to see what's happening)
- Used **high contrast** colors (dark thread on light fabric)
- Made **rows of knots** to get into a rhythm

## The Results Speak for Themselves 📸

![Before and after French knots comparison](images/french-knots-comparison.jpg)
*Left: My old struggling attempts. Right: New technique results!*

Now I actually **look forward** to patterns with French knots. Who would have thought? 😄

What techniques have you struggled with that suddenly "clicked"? I'd love to hear your breakthrough stories! 💬

---

**Tags:** #techniques #french-knots #learning #breakthrough 🏷️
```

---

## Pro Tips for Thread Docs

### 1. Use Descriptive Alt Text
```markdown
![Wedding sampler showing intertwined rings surrounded by pink roses](images/wedding-rings-sampler.jpg)
```
This helps with accessibility and SEO.

### 2. Consistent Image Naming
```markdown
images/
├── project-wedding-sampler-final.jpg
├── project-wedding-sampler-wip1.jpg
├── project-wedding-sampler-detail.jpg
└── technique-french-knots-demo.jpg
```

### 3. Mix Text and Visuals
Don't just show photos - tell the story:
```markdown
![Close-up of rose detail](images/rose-closeup.jpg)

Each rose took about 45 minutes to complete. The petals are worked in long-and-short stitch using three shades of pink (**DMC 3706**, **3708**, and **3716**), while the centers feature dimensional French knots in golden yellow (**DMC 744**).
```

### 4. Use Markdown Comments
Add notes that won't show up on the website:
```markdown
<!-- TODO: Add more photos of the framing process -->
<!-- Remember to update this when the piece is gifted -->
```

### 5. Link Between Related Content
```markdown
This technique builds on the [basic cross-stitch foundation](basics.qmd#foundation-stitches) covered earlier.

For more examples of wedding samplers, check out my [project gallery](gallery.qmd#weddings).
```

---

## Quick Reference Cheat Sheet

| Want This | Type This | Example |
|-----------|-----------|---------|
| **Bold** | `**text**` | `**important**` |
| *Italic* | `*text*` | `*emphasis*` |
| Link | `[text](url)` | `[DMC](https://dmc.com)` |
| Image | `![alt](path)` | `![Progress](images/wip.jpg)` |
| List item | `- item` | `- Cut threads to 18 inches` |
| Numbered | `1. item` | `1. Find center of fabric` |
| Header | `# title` | `# Rose Sampler Project` |
| Line break | `---` | Creates horizontal line |
| Code | `` `code` `` | `` `DMC 817` `` |
| Emoji | `:name:` or copy/paste | `:heart:` or ❤️ |

---

## Remember

- **Save often** (`Ctrl+S` or `Cmd+S`)
- **Preview locally** with `quarto preview` before publishing
- **Commit changes** with descriptive messages
- **Have fun!** Markdown should make writing easier, not harder

**Your Thread Docs site is going to be amazing!** 🧵✨📝