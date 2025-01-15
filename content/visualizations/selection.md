# Chart Selection

<!-- card-grid -->
<!-- card {"variant": "navy", "type": "composition", "tags": [{"link": "[Part to Whole](#static-composition)", "question": "What's in each piece?"}, {"label": "Hierarchical", "link": "[Hierarchical](#hierarchical)", "question": "What pieces make this up?"}, {"label": "Time-Based", "link": "[Time-Based](#time-based)", "question": "How do its parts change over time?"}]} -->
#### Composition
**How parts make up the whole**  
Shows how different pieces contribute to totals through static breakdowns, changing proportions, or nested hierarchies.
<!-- end-card -->

<!-- card {"variant": "blue", "type": "comparison", "tags": [{"label": "Between Items", "link": "[Between Items](#between-items)", "question": "How do things differ?"}, {"label": "Over Time", "link": "[Over Time](#over-time)", "question": "How has it changed?"}, {"label": "Against Reference", "link": "[Against Reference](#against-reference)", "question": "How does it compare to baseline?"}]} -->
#### Comparison
**How items or values differ when measured against each other**  
Shows differences between items, changes across time periods, or variance from reference points.
<!-- end-card -->

<!-- card {"variant": "green", "type": "correlation", "tags": [{"label": "Numeric Relationships", "link": "[Numeric Relationships](#numeric-relationships)", "question": "How do these measures relate?"}, {"label": "Categorical Variables", "link": "[Categorical Variables](#categorical-variables)", "question": "What is the pattern between categories?"}, {"label": "Time Correlation", "link": "[Time Correlation](#time-correlation)", "question": "How do these measures move together?"}]} -->
#### Relationships
**How things connect or influence each other**  
Shows correlations between numeric values, associations between categories, or how multiple measures move together over time.
<!-- end-card -->
<!-- end-card-grid -->

---
[chart-adventure]

---

# Composition

### Static Composition
<!-- card-grid -->
<!-- card {"variant": "navy", "type": "composition"} -->
#### Donut Chart
Simple proportions for immediate understanding.

**Perfect when:**  
You need instant visual impact for key metrics  
Your audience needs quick, familiar visualization  
You're showing 1-2 dominant proportions that matter

**Skip it when:**  
You have more than 6 segments  
Small differences matter
<!-- end-card -->

<!-- card {"variant": "navy", "type": "comparison"} -->
#### Stacked Bar Chart
Absolute values that build to meaningful totals.

**Perfect when:**  
Total size matters as much as the components  
You're tracking absolute values across categories  
Bottom component trends are key to the story

**Skip it when:**  
You have more than 5 components to stack  
Middle segments contain crucial patterns  
Pattern detection matters more than values
<!-- end-card -->

<!-- card {"variant": "navy", "type": "correlation"} -->
#### Treemap
Hierarchical data where size tells the story.

**Perfect when:**  
You're showing nested categories with varying importance  
Space efficiency matters for many categories  
Size comparisons need to be immediately visible

**Skip it when:**  
Your audience needs quick comparisons  
Exact values are crucial  
You don't have a clear hierarchy
<!-- end-card -->

<!-- card {"variant": "navy", "type": "comparison"} -->
#### 100% Stacked Bar Chart
Compositional changes across categories.

**Perfect when:**  
Proportion changes are the key insight  
You're comparing makeup across different groups  
Relative changes matter more than absolute values

**Skip it when:**  
Actual values matter to your audience  
You need precise comparisons  
You have more than 6 components
<!-- end-card -->
<!-- end-card-grid -->

### Composition Over Time

<!-- card-grid -->
<!-- card {"variant": "navy", "type": "temporal"} -->
#### Stacked Bar Chart
Absolute values and totals evolving over time.

**Perfect when:**  
Individual component values matter as much as the trend  
You need precise readings at specific time points  
Bottom component is the foundation of your story

**Skip it when:**  
You have more than 5-6 components  
Subtle patterns matter in middle layers  
You need to see overall shape of change
<!-- end-card -->

<!-- card {"variant": "navy", "type": "temporal"} -->
#### Stacked Area Chart
Flowing totals with component contributions.

**Perfect when:**  
Overall trend is as important as the parts  
You want to emphasize continuous change  
Data has natural ordering (like age groups)

**Skip it when:**  
Exact values need to be read  
Middle areas contain key patterns  
Components cross over each other frequently  
<!-- end-card -->

<!-- card {"variant": "navy", "type": "temporal"} -->
#### 100% Stacked Bar Chart
Discrete compositional shifts over time.

**Perfect when:**  
Changes in makeup are more important than size  
You need precise readings at specific points  
Comparing composition between exact dates

**Skip it when:**  
Absolute values are part of the story  
You have more than 6 components  
Small changes need to be visible
<!-- end-card -->

<!-- card {"variant": "navy", "type": "temporal"} -->
#### 100% Stacked Area Chart
Continuous compositional flow over time.

**Perfect when:**  
Long-term composition trends matter most  
Data is naturally ordered/hierarchical  
Smooth transitions tell the story better than steps

**Skip it when:**  
Precise proportions need to be read  
Components don't have natural order  
Small changes in middle areas are crucial
<!-- end-card -->
<!-- end-card-grid -->

# Comparisons

### Between Items

<!-- card-grid -->
<!-- card {"variant": "blue", "type": "comparison"} -->
#### Horizontal Bar
Clean comparison of single values across categories.

**Perfect when:**  
You have many categories to compare (10+)  
Category names are long  
Precise value comparison matters  

**Skip it when:**  
Categories have multiple components to compare  
Space is limited horizontally  
Time series or patterns matter  
<!-- end-card -->

<!-- card {"variant": "blue", "type": "comparison"} -->
#### Column
Vertical value comparisons with compact categories.

**Perfect when:**  
You have fewer categories (<10)  
Category names are short  
Values differ significantly  

**Skip it when:**  
Category labels are long  
You have many categories  
Multiple components need comparison  
<!-- end-card -->

<!-- card {"variant": "blue", "type": "comparison"} -->
#### Grouped Bar/Column
Direct comparison of components across categories.

**Perfect when:**  
Components need direct comparison (2-4 groups max)  
Individual values matter more than totals  
Categories are limited (5-7 max)  

**Skip it when:**  
You have many categories or components  
Total values across groups matter  
Space is limited for many groups  
<!-- end-card -->

<!-- card {"variant": "blue", "type": "comparison"} -->
#### Heatmap
Pattern recognition across multiple categories.

**Perfect when:**  
You're showing relationships between two categories  
Intensity or magnitude matters more than exact values  
You need to spot patterns in dense data  

**Skip it when:**  
Precise values need to be read  
You have very few categories  
Subtle differences matter more than general patterns  
<!-- end-card -->
<!-- end-card-grid -->

### Over Time

<!-- card-grid -->
<!-- card {"variant": "blue", "type": "temporal"} -->
#### Line Chart
Clear tracking of value changes over time.

**Perfect when:**  
You need to show precise trend evolution  
Multiple series need comparison (up to 5-6)  
Small changes matter  

**Skip it when:**  
You need to show volume/magnitude  
Many series overlap significantly  
Data is very sparse or irregular  
<!-- end-card -->

<!-- card {"variant": "blue", "type": "temporal"} -->
#### Area Chart
Magnitude changes with emphasis on volume.

**Perfect when:**  
Size/volume over time matters  
You're showing a few series (2-3 max)  
Total area has meaning (like market size)  

**Skip it when:**  
Precise values need to be read  
Multiple series need comparison  
Series overlap significantly  
<!-- end-card -->

<!-- card {"variant": "blue", "type": "temporal"} -->
#### Column Chart (Time)
Discrete comparisons at regular intervals.

**Perfect when:**  
Specific period comparisons matter  
You need precise value readings  
Comparing a few time periods side by side  

**Skip it when:**  
Many time periods need to be shown  
Continuous trends matter more than points  
Space is limited for many periods  
<!-- end-card -->

<!-- card {"variant": "blue", "type": "temporal"} -->
#### Ribbon/Range Chart
Bounded ranges or uncertainty over time.

**Perfect when:**  
You're showing confidence intervals  
Min/max ranges matter  
Uncertainty or variability is key  

**Skip it when:**  
Exact values are more important than ranges  
Multiple series need comparison  
Data doesn't have natural bounds/ranges  
<!-- end-card -->
<!-- end-card-grid -->

# Relationships

### Static Relationships

<!-- card-grid -->
<!-- card {"variant": "green", "type": "comparison"} -->
#### Scatterplot/Bubble Chart
Direct relationships between two measures.

**Perfect when:**  
You want to show how two measures relate  
Individual points/cases matter  
Adding size (bubble) adds meaningful third dimension  

**Skip it when:**  
You have too many points (becomes a blob)  
One measure is categorical  
Relationships are complex or nested  
<!-- end-card -->
<!-- card {"variant": "green", "type": "comparison"} -->
#### Heatmap
Pattern intensity between categories.

**Perfect when:**  
Showing strength of relationships between groups  
You have many categories to compare  
General patterns matter more than exact values  

**Skip it when:**  
Precise values need to be read  
You have very few categories  
Subtle differences are crucial  
<!-- end-card -->
<!-- card {"variant": "green", "type": "comparison"} -->
#### Association Matrix
Interconnections between categories.

**Perfect when:**  
Showing how categories relate to each other  
Network-like relationships matter  
You need symmetrical comparison  

**Skip it when:**  
Relationships are one-directional  
You have too many categories  
Exact values matter more than connections  
<!-- end-card -->
<!-- card {"variant": "green", "type": "comparison"} -->
#### Correlation Matrix
Strength of relationships between measures.

**Perfect when:**  
Comparing many measures at once  
Overall patterns of relationship matter  
You need a compact view of relationships  

**Skip it when:**  
Detailed exploration is needed  
Cause-effect needs to be clear  
Non-linear relationships exist  
<!-- end-card -->
<!-- end-card-grid -->

### Over Time
<!-- card-grid -->
<!-- card {"variant": "green", "type": "temporal"} -->
#### Multi-Series Line
Relationship patterns between trends.

**Perfect when:**  
You need to compare how measures move together  
Time patterns matter more than exact correlation  
Watching 2-5 related metrics evolve  

**Skip it when:**  
More than 5-6 series needed  
Exact relationship strength matters  
Lines overlap too much  
<!-- end-card -->
<!-- card {"variant": "green", "type": "temporal"} -->
#### Connected Scatter
Evolution of relationships over time.

**Perfect when:**  
Showing how two measures change together  
Direction of time movement matters  
You want to see clustering over periods  

**Skip it when:**  
More than 2-3 time periods need labeling  
Too many points make path unclear  
Time sequence isn't important  
<!-- end-card -->
<!-- card {"variant": "green", "type": "temporal"} -->
#### Combo Chart (Line + Column)
Related metrics with different scales.

**Perfect when:**  
Comparing leading/lagging indicators  
Measures have very different scales  
One measure is cumulative/flowing  

**Skip it when:**  
Measures should be directly compared  
More than 2-3 metrics needed  
Scales are too different to be meaningful  
<!-- end-card -->
<!-- card {"variant": "green", "type": "temporal"} -->
#### Small Multiples (of any of the other types)
Relationship patterns across categories over time.

**Perfect when:**  
Same relationship needs comparison across groups  
Space allows for multiple small charts  
Pattern comparison matters more than detail  

**Skip it when:**  
Exact values need to be read  
Too many categories to split  
Space is limited  
<!-- end-card -->
<!-- end-card-grid -->