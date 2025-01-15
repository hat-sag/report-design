# Chart Anatomy

## Data Labels

## Axes
<!-- card-grid -->

<!-- card {"variant": "navy", "type": "temporal"} -->
#### Scale

To start at zero, or not to start at zero. This is potentially history's longest debate.

**When starting at non-zero is good**  
Line charts and scatter plots are less sensitive to this distortion because they are intended to communicate trends and not the relative size of the difference. In these cases, cropping the Y axis helps users more easily identify the direction of change.

**When starting at zero is mandatory**  
Always start numerical axes at zero for part-to-whole and comparisons charts, such as bar and area chart. Truncating the Y axis can distort the perception, making a small difference look big and significant.

Note: For bar charts, the numerical axis should always start at zero to prevent visual distortion.
<!-- end-card -->

<!-- card {"variant": "navy", "type": "temporal"} -->
#### Annotation
Axis annotation can either aid in insights or contribute to clutter. Default to using neither.

**Labels**  
- Axis labels should only be used when value labels look too cluttered, or the overall pattern is of concern.  
- Avoid slanted labels. If not a time series, use a horizontal bar to fit labels.

**Titles**  
- Show axis titles if the measure or dimension is not implicit or stated in the chart title, or if the unit of measurement is not obvious.  
- Title should always be a human-readable value -- not an unlabeled expression.
<!-- end-card -->

<!-- card {"variant": "navy", "type": "temporal"} -->
#### Grid Lines
To eliminate chart clutter, default to no gridlines, and only add back as necessary.

**When to use grid lines**  
Use grid lines when precise value reading is important, or when comparing values across multiple categories is essential.

**When to minimize grid lines**  
Reduce or remove grid lines when:
- The chart is meant to show overall patterns rather than exact values
- The data visualization is already simple and easy to interpret
- You want to reduce visual noise in dense visualizations

Note: If using grid lines, keep them subtle and use a light gray color to avoid competing with the data.
<!-- end-card -->


<!-- end-card-grid -->

## General Annotations
<!-- card-grid -->

<!-- card {"variant": "navy", "type": "temporal"} -->
#### Data Labels

To start at zero, or not to start at zero. This is potentially history's longest debate.

**When starting at non-zero is good**  
Line charts and scatter plots are less sensitive to this distortion because they are intended to communicate trends and not the relative size of the difference. In these cases, cropping the Y axis helps users more easily identify the direction of change.

**When starting at zero is mandatory**  
Always start numerical axes at zero for part-to-whole and comparisons charts, such as bar and area chart. Truncating the Y axis can distort the perception, making a small difference look big and significant.

Note: For bar charts, the numerical axis should always start at zero to prevent visual distortion.
<!-- end-card -->

<!-- card {"variant": "navy", "type": "temporal"} -->
#### Legends
**Quantitative encoding**  
Never use a legend when the color is used to encode the same metric used in the chart. When encoding a separate measure, always add a legend, and always give it a title.

**Qualitative encoding**  
Avoid categorical legends. Categorical legends separate the data from its context, and users are forced to alternate between the data points and the legend just to make sense of the whole picture. Try to instead label data directly. If data labels are too cluttered or text is cut off, use a legend.

In donut charts, the legend goes on right. If there’s not enough horizontal space, on the bottom. For all other charts, the legend goes at the top or left.


<!-- end-card -->

<!-- card {"variant": "navy", "type": "temporal"} -->
#### Helpers
To eliminate chart clutter, default to no gridlines, and only add back as necessary.

**Reference Lines**
- Reference lines should be dotted or dashed, and be easily distinguished from the data.
- Color contrast here is incredibly important.
- Avoid use in charts with multiple lines or data encoding.

##### Use tooltips to

**Provide context:**  
Such as showing a drill down from a hierarchy, a percent breakdown of an aggregated value or a further granular view of a data point.

**Provide clarity:**  
The tooltip keeps to 2-3 metrics or a simple chart that is easy to read and provides insight. It does not complete for visual attention with the rest of the dashboard or the visual it’s attached to.
<!-- end-card -->


<!-- end-card-grid -->

