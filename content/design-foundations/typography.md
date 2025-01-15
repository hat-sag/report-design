# Chart Selection

Choose the right visualization based on what you need to show.

<!-- card-grid -->
<!-- card {"variant": "navy", "type": "composition", "tags": [{"label": "Part to Whole (Static)", "href": "#static", "question": "What's in each piece?"}, {"label": "Hierarchical", "href": "#hierarchical", "question": "What pieces make this up?"}, {"label": "Time-Based / Sequence", "href": "#sequence", "question": "How do its parts change over time?"}]} -->
#### Composition
**How parts make up the whole**  
Shows how different pieces contribute to totals through static breakdowns, changing proportions, or nested hierarchies.
<!-- end-card -->

<!-- card {"variant": "blue", "type": "comparison", "tags": [{"label": "Between Items", "href": "#between", "question": "How do things differ?"}, {"label": "Over Time", "href": "#time", "question": "How has it changed?"}, {"label": "Against Reference", "href": "#reference", "question": "How does it compare to baseline?"}]} -->
#### Comparison
**How items or values differ when measured against each other**  
Shows differences between items, changes across time periods, or variance from reference points.
<!-- end-card -->

<!-- card {"variant": "green", "type": "correlation", "tags": [{"label": "Numeric Relationships", "href": "#numeric", "question": "How do these measures relate?"}, {"label": "Categorical Variables", "href": "#categorical", "question": "What is the pattern between categories?"}, {"label": "Time Correlation", "href": "#time-correlation", "question": "How do these measures move together?"}]} -->
#### Relationships
**How things connect or influence each other**  
Shows correlations between numeric values, associations between categories, or how multiple measures move together over time.
<!-- end-card -->
<!-- end-card-grid -->

## Composition

### Static
- Basic breakdown: Pie chart (if few categories)
- Many categories: Treemap
- Ranked parts: Stacked bar chart
- Simple share: 100% stacked bar

### Hierarchy
- Basic hierarchy: Treemap
- Drill-down: Sunburst chart
- Simple levels: Stacked bar with grouping

### Over Time
- Changing shares: 100% stacked column chart
- Absolute changes: Stacked column chart
- Multiple periods: Stacked area chart

## Comparisons

### Between Items

- Simple comparison: Bar chart (vertical or horizontal)
- Multiple measures: Clustered bar chart
- Few items: Column chart
- Many items: Horizontal bar chart
- Ranked items: Sorted bar chart


### Over Time

- Continuous trend: Line chart
- Periodic comparison: Column chart
- Multiple trends: Multi-line chart
- Cumulative: Area chart


### Against Reference

- Single reference: Bar chart with reference line
- Multiple references: Bullet chart
- Progress to goal: Gauge chart
- Simple status: KPI card


## Relationships

### Numbers That Move Together

- Two variables: Scatter plot
- Multiple variables: Matrix
- With size: Bubble chart


### Things That Go Together

- Category pairs: Heat map
- Basic correlation: Matrix
- Simple mapping: Table with conditional formatting


### Patterns Over Time

- Multiple series: Multi-line chart
- Combined trends: Combo chart (line and column)
- Period comparison: Small multiples