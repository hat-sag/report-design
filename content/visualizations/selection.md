<!-- tabs:start -->

#### **Overview**

# Chart Selection Guide

> Choose the right visualization for your data story

## Chart Types At a Glance
<!-- card-grid -->

<!-- card {"variant": "navy", "type": "composition"} -->
#### Composition Charts
**Show how parts make up the whole**  

Key Questions:
- What's in each piece?
- What pieces make this up?
- How do parts change over time?

?> **Perfect For**: Breaking down totals, showing proportions, or displaying hierarchies
<!-- end-card -->

<!-- card {"variant": "blue", "type": "comparison"} -->
#### Comparison Charts
**Show differences between items or time periods**  

Key Questions:
- How do items differ?
- How has it changed over time?
- How does it compare to a reference/baseline?

?> **Perfect For**: Contrasting values, tracking changes, measuring against targets
<!-- end-card -->

<!-- card {"variant": "green", "type": "correlation"} -->
#### Relationship Charts
**Show connections or correlations among variables**  

Key Questions:
- How do numeric measures relate?
- What patterns exist between categories?
- How do multiple measures move together over time?

?> **Perfect For**: Correlations, patterns, and multi-variable analysis
<!-- end-card -->

<!-- end-card-grid -->

---

#### **Composition Charts**

## Composition

### Static Composition
<!-- card-grid -->

<!-- card {"variant": "navy", "type": "composition"} -->
#### Donut Chart
Simple proportions for immediate understanding.

**Perfect when:**  
- You need instant visual impact for key metrics  
- Your audience needs quick, familiar visualization  
- You’re showing 1–2 dominant proportions that matter  

**Skip it when:**  
- You have more than 6 segments  
- Small differences matter  
- Precise comparisons are crucial  

?> **Pro Tip**: Great for highlighting the “big slice vs. others” at a glance.
<!-- end-card -->

<!-- card {"variant": "navy", "type": "comparison"} -->
#### Stacked Bar Chart
Absolute values that build to meaningful totals.

**Perfect when:**  
- Total size matters as much as the components  
- You’re tracking absolute values across categories  
- The bottom segment/trend is key to the story  

**Skip it when:**  
- You have more than 5 components to stack  
- Crucial patterns lie in the middle segments  
- Pattern detection matters more than values  

?> **Pro Tip**: Ensure labels or legends are clear; too many segments can clutter.
<!-- end-card -->

<!-- card {"variant": "navy", "type": "correlation"} -->
#### Treemap
Hierarchical data where size tells the story.

**Perfect when:**  
- You’re showing nested categories with varying importance  
- Space efficiency matters for many categories  
- Size comparisons need to be immediately visible  

**Skip it when:**  
- Your audience needs quick, side-by-side comparisons  
- Exact values are crucial  
- You don’t have a clear hierarchy  

?> **Pro Tip**: Limit hierarchical levels to maintain clarity.
<!-- end-card -->

<!-- card {"variant": "navy", "type": "comparison"} -->
#### 100% Stacked Bar Chart
Compositional changes across categories (as proportions).

**Perfect when:**  
- Proportion changes are the key insight  
- You’re comparing makeup across different groups  
- Relative changes matter more than absolute values  

**Skip it when:**  
- Actual values matter to your audience  
- You need precise comparisons  
- You have more than 6 components  

?> **Pro Tip**: Great for emphasizing how each segment contributes percentage-wise.
<!-- end-card -->

<!-- end-card-grid -->

### Composition Over Time
<!-- card-grid -->

<!-- card {"variant": "navy", "type": "temporal"} -->
#### Stacked Bar Chart (Time)
Absolute values and totals evolving over time.

**Perfect when:**  
- Individual component values matter as much as the trend  
- You need precise readings at specific time points  
- The bottom component is the foundation of your story  

**Skip it when:**  
- You have more than 5–6 components  
- Subtle patterns matter in the middle layers  
- You need to see the overall shape of change (trend)  

?> **Pro Tip**: Use consistent time intervals for clarity.
<!-- end-card -->

<!-- card {"variant": "navy", "type": "temporal"} -->
#### Stacked Area Chart
Flowing totals with component contributions.

**Perfect when:**  
- Overall trend is as important as the parts  
- You want to emphasize continuous change  
- Data has a natural ordering (like age groups or time)  

**Skip it when:**  
- Exact values need to be read frequently  
- Middle areas contain key patterns  
- Components cross each other frequently  

?> **Pro Tip**: Limit to 4–5 series to keep the chart readable.
<!-- end-card -->

<!-- card {"variant": "navy", "type": "temporal"} -->
#### 100% Stacked Bar Chart (Time)
Discrete compositional shifts over time.

**Perfect when:**  
- Changes in makeup are more important than size  
- You need precise readings at specific points  
- Comparing composition between exact dates  

**Skip it when:**  
- Absolute values are part of the story  
- You have more than 6 components  
- Small changes need to be visible  

?> **Pro Tip**: Good for side-by-side comparison of group proportions over time.
<!-- end-card -->

<!-- card {"variant": "navy", "type": "temporal"} -->
#### 100% Stacked Area Chart
Continuous compositional flow over time.

**Perfect when:**  
- Long-term composition trends matter most  
- Data is naturally ordered or hierarchical  
- Smooth transitions tell the story better than discrete steps  

**Skip it when:**  
- Precise proportions need to be read  
- Components don’t have a natural order  
- Small changes in middle areas are crucial  

?> **Pro Tip**: Use clear color distinctions to highlight each area.
<!-- end-card -->

<!-- end-card-grid -->

---

#### **Comparison Charts**

## Comparisons

### Between Items
<!-- card-grid -->

<!-- card {"variant": "blue", "type": "comparison"} -->
#### Horizontal Bar
Clean comparison of single values across categories.

**Perfect when:**  
- You have many categories to compare (10+)  
- Category names are long  
- Precise value comparison matters  

**Skip it when:**  
- Categories have multiple components to compare  
- Horizontal space is limited  
- Time series or patterns are your focus  

?> **Pro Tip**: Sorting the bars helps reveal patterns quickly.
<!-- end-card -->

<!-- card {"variant": "blue", "type": "comparison"} -->
#### Column
Vertical value comparisons with compact categories.

**Perfect when:**  
- You have fewer categories (<10)  
- Category names are short  
- Values differ significantly  

**Skip it when:**  
- Category labels are long  
- You have many categories  
- You need multiple components in each category  

?> **Pro Tip**: Keep spacing consistent between columns for clarity.
<!-- end-card -->

<!-- card {"variant": "blue", "type": "comparison"} -->
#### Grouped Bar/Column
Direct comparison of components across categories.

**Perfect when:**  
- Components need direct comparison (2–4 groups max)  
- Individual values matter more than totals  
- Categories are limited (5–7 max)  

**Skip it when:**  
- You have many categories or components  
- Total values across groups matter most  
- Space is limited for many groups  

?> **Pro Tip**: Use color or pattern to distinguish groups clearly.
<!-- end-card -->

<!-- card {"variant": "blue", "type": "comparison"} -->
#### Heatmap (Comparison)
Pattern recognition across multiple categories.

**Perfect when:**  
- You’re showing relationships between two categorical variables  
- Intensity or magnitude matters more than exact values  
- You need to spot patterns in dense data  

**Skip it when:**  
- Precise values need to be read often  
- You have very few categories  
- Subtle differences matter more than overall patterns  

?> **Pro Tip**: Choose an intuitive color scale to highlight differences.
<!-- end-card -->

<!-- end-card-grid -->

### Over Time
<!-- card-grid -->

<!-- card {"variant": "blue", "type": "temporal"} -->
#### Line Chart
Clear tracking of value changes over time.

**Perfect when:**  
- You need to show precise trend evolution  
- Multiple series need comparison (up to 5–6)  
- Small changes matter  

**Skip it when:**  
- You need to show volume/magnitude visually  
- Many series overlap significantly  
- Data is very sparse or irregular  

?> **Pro Tip**: Limit to about 5 lines to avoid clutter.
<!-- end-card -->

<!-- card {"variant": "blue", "type": "temporal"} -->
#### Area Chart
Magnitude changes with emphasis on volume.

**Perfect when:**  
- Size/volume over time matters  
- You’re showing a few series (2–3 max)  
- Total area has meaning (like market size)  

**Skip it when:**  
- Precise values need to be read  
- Multiple series need comparison  
- Series overlap significantly  

?> **Pro Tip**: A stacked area can show composition + volume, but avoid over-crowding.
<!-- end-card -->

<!-- card {"variant": "blue", "type": "temporal"} -->
#### Column Chart (Time)
Discrete comparisons at regular intervals.

**Perfect when:**  
- Specific period comparisons matter  
- You need precise value readings  
- You’re comparing a few time periods side by side  

**Skip it when:**  
- Many time periods need to be shown  
- Continuous trends matter more than discrete points  
- Space is limited for many periods  

?> **Pro Tip**: Keep intervals consistent (monthly, quarterly, annually, etc.).
<!-- end-card -->

<!-- card {"variant": "blue", "type": "temporal"} -->
#### Ribbon/Range Chart
Bounded ranges or uncertainty over time.

**Perfect when:**  
- You’re showing confidence intervals  
- Min/max ranges matter  
- Uncertainty or variability is key  

**Skip it when:**  
- Exact values are more important than ranges  
- Multiple series need comparison  
- Data doesn’t have natural bounds or intervals  

?> **Pro Tip**: Use shading or alpha to highlight the range without obscuring the main trend.
<!-- end-card -->

<!-- end-card-grid -->

---

#### **Relationship Charts**

## Relationships

### Static Relationships
<!-- card-grid -->

<!-- card {"variant": "green", "type": "comparison"} -->
#### Scatterplot/Bubble Chart
Direct relationships between two measures.

**Perfect when:**  
- You want to show how two measures relate  
- Individual points/cases matter  
- Adding size (bubble) adds a meaningful third dimension  

**Skip it when:**  
- You have too many points (becomes a blob)  
- One measure is strictly categorical  
- Relationships are very complex or nested  

?> **Pro Tip**: Adding a trend line can clarify correlation patterns.
<!-- end-card -->

<!-- card {"variant": "green", "type": "comparison"} -->
#### Heatmap (Relationships)
Pattern intensity between categories.

**Perfect when:**  
- Showing strength of relationships between groups  
- You have many categories to compare  
- General patterns matter more than exact values  

**Skip it when:**  
- Precise values need to be read  
- You have very few categories  
- Subtle differences are crucial  

?> **Pro Tip**: Use diverging color scales for positive/negative relationships.
<!-- end-card -->

<!-- card {"variant": "green", "type": "comparison"} -->
#### Association Matrix
Interconnections between categories.

**Perfect when:**  
- Showing how categories relate to each other  
- Network-like relationships matter  
- You need symmetrical (category vs. category) comparison  

**Skip it when:**  
- Relationships are clearly one-directional  
- You have too many categories (chart becomes huge)  
- Exact numeric values matter more than patterns  

?> **Pro Tip**: Often used in social network analysis; keep labeling simple.
<!-- end-card -->

<!-- card {"variant": "green", "type": "comparison"} -->
#### Correlation Matrix
Strength of relationships between measures.

**Perfect when:**  
- Comparing many measures at once  
- Overall patterns of relationship matter  
- You need a compact view of correlations  

**Skip it when:**  
- Detailed exploration is needed  
- You need clear cause–effect  
- Non-linear relationships exist  

?> **Pro Tip**: Look for patterns above and below the diagonal; can highlight clusters.
<!-- end-card -->

<!-- end-card-grid -->

### Over Time
<!-- card-grid -->

<!-- card {"variant": "green", "type": "temporal"} -->
#### Multi-Series Line
Relationship patterns between trends.

**Perfect when:**  
- You need to compare how measures move together  
- Time patterns matter more than exact correlation  
- You’re watching 2–5 related metrics evolve  

**Skip it when:**  
- More than 5–6 series are needed  
- Exact relationship strength is crucial  
- Lines overlap too much, hiding patterns  

?> **Pro Tip**: Overlay correlation coefficients if needed for deeper insight.
<!-- end-card -->

<!-- card {"variant": "green", "type": "temporal"} -->
#### Connected Scatter
Evolution of relationships over time.

**Perfect when:**  
- Showing how two measures change together  
- Direction of time movement matters  
- You want to see clustering or looping over periods  

**Skip it when:**  
- More than 2–3 time periods need labeling  
- Too many points make the path unclear  
- Time sequence isn’t important  

?> **Pro Tip**: Use arrows or annotations to guide readers through the sequence.
<!-- end-card -->

<!-- card {"variant": "green", "type": "temporal"} -->
#### Combo Chart (Line + Column)
Related metrics with different scales.

**Perfect when:**  
- Comparing leading/lagging indicators  
- Measures have very different scales  
- One measure is cumulative or flowing, while the other is discrete  

**Skip it when:**  
- Measures should be directly compared on the same scale  
- More than 2–3 metrics are involved  
- Scales differ so much that the comparison becomes meaningless  

?> **Pro Tip**: Use a secondary axis sparingly; too many axes can be confusing.
<!-- end-card -->

<!-- card {"variant": "green", "type": "temporal"} -->
#### Small Multiples (of any chart type)
Relationship patterns across categories over time.

**Perfect when:**  
- The same relationship or trend needs comparison across multiple groups  
- You have enough space for multiple small charts  
- Pattern comparison matters more than reading exact values  

**Skip it when:**  
- Exact values need to be read frequently  
- There are too many categories to split effectively  
- Screen/print space is too limited  

?> **Pro Tip**: Maintain uniform scales across panels for easy comparisons.
<!-- end-card -->

<!-- end-card-grid -->

---

#### **Quick Decision Guide**

## Quick Decision Guide

1. **Need to show parts of a whole?**  
   - **Static**: Use Donut Chart, Stacked Bar Chart, 100% Stacked Bar Chart, or Treemap  
   - **Over time**: Use Stacked Bar Chart (Time), Stacked Area Chart, 100% Stacked Bar Chart (Time), or 100% Stacked Area Chart  

2. **Need to compare values?**  
   - **Between items**: Use Horizontal Bar, Column, Grouped Bar, or Heatmap (Comparison)  
   - **Over time**: Use Line Chart, Area Chart, Column Chart (Time), or Ribbon/Range Chart  
   - **Against reference**: Use Combo Chart if comparing to baseline/target on separate scales  

3. **Need to show relationships?**  
   - **Between measures**: Use Scatterplot/Bubble Chart, Correlation Matrix  
   - **Between categories**: Use Heatmap (Relationships), Association Matrix  
   - **Over time**: Use Multi-Series Line, Connected Scatter, Combo Chart, or Small Multiples  

?> **Remember**: The best chart is one that **makes your data story immediately clear** to your audience.

<!-- tabs:end -->
