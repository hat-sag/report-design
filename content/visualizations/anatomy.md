# Chart Anatomy Guide

> A comprehensive guide to creating clear and effective data visualizations

<!-- tabs:start -->

#### **Core Elements**

## Fundamental Components
<!-- card-grid -->

<!-- card {"variant": "navy", "type": "temporal"} -->
#### Data Labels

**When to use**  
Almost always. Opt for data labels over measure axis labels wherever and whenever possible. Data labels make values easy to read.

**When not to use**  
If the labels take up about as much space as the data itself, cannot be quickly assessed, or are too cramped into a small space, avoid them.

?> **Best Practice Example**  
![Data Labels Example](/_images/data-labels-example.png)
<!-- end-card -->

<!-- card {"variant": "navy", "type": "temporal"} -->
#### Axes Scale

**Starting at Zero**  
- Mandatory for part-to-whole and comparison charts (bar, area)
- Prevents visual distortion in relative size comparisons
- Essential for maintaining data integrity

**Non-Zero Starts**  
- Appropriate for line charts and scatter plots
- Better for showing trends and patterns
- Helps identify subtle changes in data

!> **Important Note**  
Bar charts must always start at zero to prevent visual distortion.
<!-- end-card -->

<!-- end-card-grid -->

#### **Annotations**

## Visual Helpers
<!-- card-grid -->

<!-- card {"variant": "navy", "type": "temporal"} -->
#### Legends

**Quantitative Encoding Rules**
- Never use for same-metric color encoding
- Required for separate measures
- Always include clear titles

**Placement Guidelines**
- Donut charts: Right side (or bottom if space limited)
- Other charts: Top or left position
- Ensure proximity to related data

**Anti-Patterns**
- Avoid categorical legends when possible
- Prevent context separation
- Minimize cognitive load
<!-- end-card -->

<!-- card {"variant": "navy", "type": "temporal"} -->
#### Reference Lines

**Implementation Guidelines**
- Use dotted or dashed styles
- Ensure high color contrast
- Keep distinct from data lines

**When to Use**
- Highlighting thresholds
- Showing averages
- Marking significant values

?> **Visual Example**  
![Reference Lines Example](/_images/reference-lines.png)
<!-- end-card -->

<!-- end-card-grid -->

#### **Best Practices**

## Optimization Guidelines
<!-- card-grid -->

<!-- card {"variant": "navy", "type": "temporal"} -->
#### Grid Lines

**Usage Principles**
- Default to no gridlines
- Add only when necessary
- Keep subtle (light gray)

**When to Use**
- Precise value reading needed
- Cross-category comparisons
- Complex data relationships

**When to Avoid**
- Simple visualizations
- Pattern-focused analysis
- Dense data displays
<!-- end-card -->

<!-- card {"variant": "navy", "type": "temporal"} -->
#### Tooltips

**Context Enhancement**
- Show hierarchy drill-downs
- Display percentage breakdowns
- Reveal detailed data points

**Design Guidelines**
- Limit to 2-3 metrics
- Keep charts simple
- Avoid visual competition

**Implementation Tips**
- Clear formatting
- Consistent positioning
- Intuitive triggers
<!-- end-card -->

<!-- end-card-grid -->

## Advanced Topics
<!-- card-grid -->

<!-- card {"variant": "navy", "type": "temporal"} -->
#### Axis Annotation

**Label Best Practices**
- Use when value labels are cluttered
- Maintain horizontal orientation
- Prioritize readability

**Title Guidelines**
- Include for non-obvious measures
- Use human-readable text
- Clarify units of measurement
<!-- end-card -->

<!-- card {"variant": "navy", "type": "temporal"} -->
#### Visual Hierarchy

**Core Principles**
- Emphasize important data
- Create clear relationships
- Guide viewer attention

**Implementation**
- Consistent spacing
- Thoughtful color use
- Strategic element placement
<!-- end-card -->

<!-- end-card-grid -->

<!-- tabs:end -->

## Quick Reference

> Key points to remember when creating charts

1. Start axes at zero for comparison charts
2. Use data labels whenever space permits
3. Avoid categorical legends when possible
4. Keep tooltips simple and focused
5. Add grid lines only when necessary

?> **Pro Tip**: Always test your visualization with sample data to ensure readability and effectiveness.