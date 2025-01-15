# Composition

### Static: Part-to-Whole & Hierarchy
<!-- card-grid -->

<!-- card {"variant": "navy", "type": "composition"} -->
#### Donut chart
Shows the proportions of a few categories within a whole, focusing on overall composition rather than exact slice sizes.

**Donut charts work best with up to five categories.** If you have more, consider a stacked column or stacked bar chart for tidier labeling.

<!-- end-card -->

<!-- card {"variant": "navy", "type": "comparison"} -->
#### Stacked bar chart
Shows how components contribute to a total across categories or time, allowing a view of both individual parts and overall composition.

**Stacked bar charts work best with 3–5 components.** If you have more, group smaller categories into an "Other" category or use a different visualization to keep the chart clear.

<!-- end-card -->

<!-- card {"variant": "green", "type": "correlation"} -->
#### Treemap
Displays hierarchical part-to-whole relationships with multiple levels, showing both size and structure within a dataset.

**Treemaps work best when you have many categories and sub-categories.** If you only have a few, consider a simpler chart like a donut or stacked bar.

<!-- end-card -->

<!-- card {"variant": "navy", "type": "comparison"} -->
#### 100% stacked bar chart
Shows the proportion of each component as a percentage of the total, making it easy to compare category breakdowns.

**100% stacked bar charts work best with 3–6 components.** If you have more, consider grouping smaller segments into an "Other" category to maintain clarity.

<!-- end-card -->

<!-- end-card-grid -->

### Over Time

<!-- card-grid -->
<!-- card {"variant": "navy", "type": "temporal"} -->
#### 100% stacked column chart
Best for showing how relative proportions within a whole change over time, where the focus is on comparing percentage breakdowns between different time periods. Each column always totals 100%.

**100% stacked column charts work best with 3-5 components maximum.** More components make it difficult to track patterns across time periods. Consider grouping smaller categories into an "Other" category to maintain clarity.

**100% stacked column charts are not the best choice when absolute values matter.** Since everything is converted to percentages, readers lose sense of how the total size changes over time. If actual values are important, use regular stacked columns instead.
<!-- end-card -->

<!-- card {"variant": "navy", "type": "temporal"} -->
#### Stacked column chart
Best for tracking both the total size and its composition as they change over time. Particularly useful when you want to show how different components contribute to an overall trend while preserving the ability to see absolute values.

**Stacked column charts work best with fewer than 8 segments in each stack.** Too many segments make it hard to track individual categories over time and can create visual clutter. Consider grouping smaller categories if needed.

**Stacked column charts are not the best choice when precise comparisons between non-baseline components are needed across time periods.** When components are stacked, it becomes difficult to compare values that don't share the bottom baseline.
<!-- end-card -->

<!-- card {"variant": "navy", "type": "temporal"} -->
#### Stacked area chart
Best for emphasizing the overall volume and showing how different components contribute to a total trend over time. The continuous nature of the area fills helps emphasize the flow and evolution of the data.

**Stacked area charts work best with smooth, gradual changes over time.** They're particularly effective when you want to highlight the cumulative nature of the components and show how they collectively form a larger whole.

**Stacked area charts are not the best choice when your data has frequent crossovers between categories or is very spiky.** The overlapping fills can become confusing and hard to interpret when there's high volatility or when categories frequently change their relative positions.
<!-- end-card -->
<!-- end-card-grid -->

## Comparisons
### Between Items

<!-- card-grid -->
<!-- card {"variant": "navy", "type": "comparison"} -->
#### Bar chart (horizontal)
Best for comparing values across different categories, especially when you need to emphasize and clearly show the differences between items. Horizontal orientation is particularly effective for longer category names and larger datasets.

**Horizontal bar charts work best with up to 20-30 categories.** Beyond this, consider filtering, grouping, or using interactive features like scrolling. Order bars by value (ascending/descending) unless there's a more meaningful organization.

**Horizontal bar charts are not the best choice for comparing changes over time.** If you need to show temporal patterns, consider a line chart or column chart instead.
<!-- end-card -->

<!-- card {"variant": "navy", "type": "comparison"} -->
#### Column chart (vertical bar)
Best for comparing values across a small number of categories, particularly when category names are short and the focus is on direct value comparisons.

**Column charts work best with fewer than 10 categories.** When dealing with more categories, switch to a horizontal bar chart for better readability. Maintain consistent column width and spacing to aid comparison.

**Column charts are not the best choice with long category labels.** The vertical orientation makes long labels difficult to read. Use horizontal bars instead when dealing with lengthy category names.
<!-- end-card -->

<!-- card {"variant": "navy", "type": "comparison"} -->
#### Grouped bar chart
Best for comparing multiple related metrics across categories, allowing readers to see both overall patterns and specific differences within subgroups.

**Grouped bar charts work best with 2-4 subgroups and fewer than 8 main categories.** More groups or subgroups create visual clutter and make comparisons difficult. Keep colors distinct but related for subgroups.

**Grouped bar charts are not the best choice when one metric is significantly more important.** If you have a primary metric and secondary metrics, consider using a simpler bar chart for the main comparison and supplementary charts for additional metrics.
<!-- end-card -->

<!-- card {"variant": "navy", "type": "comparison"} -->
#### Heatmap
Best for comparing values across two categorical dimensions simultaneously, especially when dealing with large datasets where patterns and relative differences are more important than exact values.

**Heatmaps work best when you have many categories in both dimensions.** They're particularly effective for datasets with 10+ categories in each dimension, where traditional bar charts would become unwieldy.

**Heatmaps are not the best choice when precise value comparisons are crucial.** Color variations can be harder to interpret than length-based encodings. If exact comparisons are needed, consider using bar charts or tables instead.
<!-- end-card -->
<!-- end-card-grid -->

### Over Time

<!-- card-grid -->
<!-- card {"variant": "navy", "type": "temporal"} -->
#### Line chart
Best for showing how values change over time, particularly when you want to emphasize trends, patterns, and rates of change. The continuous path makes it easy for readers to follow the direction and shape of change.

**Line charts work best with many data points (20+ timestamps).** They can handle dense data while remaining readable, making them ideal for showing detailed temporal patterns. They're also excellent for comparing multiple series when you have 2-5 distinct metrics to track.

**Line charts are not the best choice when exact values at specific points matter more than the overall trend.** The emphasis on continuity and interpolation between points can make it harder to read precise values. If discrete comparisons are crucial, consider column charts instead.
<!-- end-card -->

<!-- card {"variant": "navy", "type": "temporal"} -->
#### Column chart
Best for comparing discrete values across regular time intervals, especially when precise value comparisons at specific points in time are important.

**Column charts work best with fewer than 20 time periods.** They're particularly effective for showing monthly, quarterly, or annual comparisons where each period should be treated as distinct. Space columns consistently to maintain readability.

**Column charts are not the best choice for showing smooth trends or handling many data points.** When you have frequent measurements or need to emphasize the continuous nature of change, use a line chart instead.
<!-- end-card -->

<!-- card {"variant": "navy", "type": "temporal"} -->
#### Area chart
Best for emphasizing the magnitude or volume of change over time, particularly when you want to draw attention to the total size of values rather than just their trajectory.

**Area charts work best with smooth, gradual changes over time.** They're particularly effective when showing cumulative values or when the filled space helps convey meaning (like market share or resource usage). Limit to 1-3 series to maintain clarity.

**Area charts are not the best choice when your data is volatile or has frequent crossovers between series.** Sharp spikes and dips can create awkward shapes, and overlapping fills can become visually confusing. Use line charts instead for volatile data.
<!-- end-card -->

<!-- card {"variant": "navy", "type": "temporal"} -->
#### Ribbon chart
Best for showing how rankings or relative positions change over time while maintaining category identity through consistent colors.

**Ribbon charts work best with 2-7 categories that change rank positions meaningfully over time.** They're particularly effective when the focus is on ordering and movement between positions rather than absolute values.

**Ribbon charts are not the best choice when exact values are important or when ranks rarely change.** If positions remain mostly stable or you need to show precise measurements, consider a line or column chart instead.
<!-- end-card -->
<!-- end-card-grid -->

### Against Reference

<!-- card-grid -->
<!-- card {"variant": "navy", "type": "comparison"} -->
#### Bar chart with reference line
Best for comparing multiple values against a single benchmark, target, or threshold. The reference line provides a clear visual standard that makes it easy to see which items are above or below the target.

**Reference line bar charts work best with 5-15 categories.** Order bars by value to make it easy to see patterns in relation to the reference. Use clear visual distinction between bars and the reference line.

**Reference line bar charts are not the best choice when comparing against multiple different targets.** If each category has its own unique target, or if there are multiple thresholds, consider using a different visualization that can better show individual targets.
<!-- end-card -->

<!-- card {"variant": "navy", "type": "comparison"} -->
#### Gauge chart
Best for showing progress toward a single target or goal, particularly when you want to emphasize how close you are to reaching 100% or a specific threshold.

**Gauge charts work best with a single key metric.** They're particularly effective for executive dashboards or high-level overviews where immediate understanding is crucial. Use clear color coding to indicate status (e.g., red, yellow, green zones).

**Gauge charts are not the best choice when precise values or multiple metrics need comparison.** The curved scale can make exact readings difficult, and multiple gauges take up too much space. Use bar charts or KPI cards for multiple metrics.
<!-- end-card -->

<!-- card {"variant": "navy", "type": "comparison"} -->
#### KPI card
Best for highlighting a single important metric and its status relative to a target. Combines numerical precision with visual status indicators for quick understanding.

**KPI cards work best with 1-3 related metrics maximum.** Focus on the most important number, with optional supporting metrics or context. Use consistent formatting and clear visual hierarchy to guide attention.

**KPI cards are not the best choice when detailed comparison or trends are needed.** If you need to show patterns over time or compare multiple values in detail, use a more data-dense visualization like a bar or line chart.
<!-- end-card -->

<!-- end-card-grid -->

## Relationships

### Numeric Relationships

<!-- card-grid -->
<!-- card {"variant": "navy", "type": "relationship"} -->
#### Scatter plot
Best for revealing relationships, correlations, and outliers between two numeric variables. Particularly effective for large datasets where patterns and distributions matter.

**Scatter plots work best with 50+ data points.** They're excellent for showing clusters, trends, and outliers in large datasets. Use transparency or density mapping when dealing with thousands of points to reveal overlapping patterns.

**Scatter plots are not the best choice with very few data points.** When working with small datasets (less than 20 points), consider using a table or different visualization that better highlights individual values.
<!-- end-card -->

<!-- card {"variant": "navy", "type": "relationship"} -->
#### Bubble chart
Best for exploring relationships between three numeric variables, using the x-axis, y-axis, and bubble size to reveal patterns across multiple dimensions.

**Bubble charts work best with 20-100 data points.** Keep the number of bubbles manageable to avoid overcrowding. Use clear size scaling and ensure the smallest bubbles remain visible.

**Bubble charts are not the best choice when precise size comparisons are crucial.** Comparing circle areas is difficult for humans – if exact proportions matter, consider breaking into separate charts or using a different visualization.
<!-- end-card -->

<!-- card {"variant": "navy", "type": "relationship"} -->
#### Correlation matrix
Best for comparing multiple numeric variables simultaneously to identify patterns and relationships across many dimensions.

**Correlation matrices work best with 4-15 variables.** Use color coding to indicate correlation strength and direction. Include clear labels and consider reordering variables to highlight clusters.

**Correlation matrices are not the best choice when you need to see individual data points.** They show aggregate relationships only – if you need to examine specific values or outliers, use scatter plots or tables instead.
<!-- end-card -->
<!-- end-card-grid -->

### Categorical

<!-- card-grid -->


<!-- card {"variant": "navy", "type": "relationship"} -->
#### Heatmap
Best for showing relationships between two categorical dimensions through color-coded intensity or frequency values.

**Heatmaps work best with 5-20 categories in each dimension.** Use an intuitive color scale (e.g., sequential for frequency, diverging for comparison). Order categories meaningfully when possible.

**Heatmaps are not the best choice when exact values need to be compared.** The color encoding makes precise comparisons difficult – if exact numbers are crucial, consider a table with conditional formatting.
<!-- end-card -->

<!-- card {"variant": "navy", "type": "relationship"} -->
#### Association matrix
Best for showing how multiple categorical variables relate to each other through color-coded relationship strength or frequency.

**Association matrices work best with 3-10 categorical variables.** Use clear visual encoding for relationship strength and consistent ordering to reveal patterns. Consider adding hierarchical clustering to group related categories.

**Association matrices are not the best choice for continuous variables or when precise values matter.** They're designed for categorical relationships – use correlation matrices for numeric variables instead.
<!-- end-card -->

<!-- card {"variant": "navy", "type": "relationship"} -->
#### Formatted table
Best for showing relationships in small datasets where seeing exact values is important while still highlighting patterns through color or symbols.

**Formatted tables work best with fewer than 100 cells.** Use subtle color scales or simple symbols to add relationship context without obscuring the numbers. Maintain consistent formatting and alignment.

**Formatted tables are not the best choice for large datasets or when patterns are more important than individual values.** For larger datasets or pattern discovery, use heatmaps or matrices instead.
<!-- end-card -->
<!-- end-card-grid -->