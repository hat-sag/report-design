# Chart Selection
> Before selecting a chart, you must first determine what kind of insight you want to communicate. What should the takeaway be? What story are you telling using the data?

Charts should be:

1. **Impactful**  
    Choose insights that will directly influence your audience's decisions or change their understanding of an important issue.
    
2. **Intuitive**  
    Select insights where visualization will make the pattern or relationship immediately clear.
    
3. **Essential**  
    Focus on the single most important finding that your audience needs to grasp.
    

## Time-Series Visualizations

### Column Charts

Compare data over time. Column charts should only be used for time-series when:

1. **The exact absolute value is more relevant than trend.**  
    Column charts excel at communicating discrete data points. They emphasize individual data points rather than the connections between them.
    
2. **There are less than 20 data points.**  
    A column chart is too dense and difficult to interpret when there are more than 20 data points. Consider using a drilldown dimension to minimize the number of data points and let the user zoom in where they need to. 


    
   > When working with grouped bar charts, this rule still applies. Two bars for every month of a year still impacts readability and time-to-insights.
    

### Line Charts

Show trends over time. Use line charts to:

1. **Communicate the trend of a metric**  
    Lines create a continuous path that makes it easier for our brains to follow the direction and pattern of change. The slope instantly communicates the rate of change between points.
    
2. **Encode a large amount of data points**  
    Line charts can handle many more data points than columns while remaining readable. The connected points create a clear visual path even when data points are densely packed.
    
3. **Show continuous data**  
    When your data represents a continuous measure where interpolation between points makes sense, lines better represent the continuous nature of the measurement.
    
4. **Compare multiple series over time**  
    Multiple lines can overlap while remaining distinct and readable. The continuous nature of lines makes it easy to spot relationships, convergence, and divergence between different metrics.
    

### Area Charts

Emphasize the magnitude of change over time. Use area charts when:

1. **You want to emphasize volume or magnitude**  
    The filled space below the line creates a stronger visual emphasis on the total size or quantity of the metric, making it feel more substantial and weighty.
    
2. **Showing part-to-whole relationships over time**  
    Stacked area charts are excellent for showing how different components contribute to a total, while still maintaining the ability to see the overall trend.
    
3. **Data doesn't have too many crossovers**  
    When multiple series frequently cross each other, area charts can become visually confusing as the fills obscure each other.
    
4. **You have relatively smooth data**  
    Sharp spikes and dips can create awkward-looking shapes in area charts, so they work better with smoother trends.
    
### Combo Charts

Show correlation over time.

1. 

### Ribbon Charts

Use ribbon charts when:

1. **Showing rank changes over time**  
    Ribbon charts excel at showing how different categories change rank position over time while maintaining their identity through consistent colors.
    
2. **The absolute values are less important than relative position**  
    The focus is on the ordering and movement between positions rather than the exact values of the metric.
    
3. **Tracking a limited number of categories**  
    Like grouped bars, ribbon charts work best with 2-7 categories. Too many ribbons become visually overwhelming.
    
4. **There are meaningful position changes**  
    If ranks rarely change, a regular line or area chart might be more appropriate.
    

## Part-to-Whole

### Pie Charts

Show the relationship of parts to the whole or highlight proportions. Use pie charts when:

1. **You have 6 or fewer categories**  
More slices make it hard for humans to compare angles accurately.
2. **Categories sum to a meaningful total**  
The whole pie should represent something meaningful, like 100% of market share or total budget.
3. **At least one component is substantially different**  
If all slices are similar sizes, other charts will be more effective.
4. **Exact comparisons aren't critical**  
Humans are poor at comparing angles precisely, so pie charts work better when rough proportions are sufficient.

### Treemaps

Use treemaps when:

1. **You have many categories (>10)**  
Treemaps can handle many more categories than pie charts while remaining readable.
2. **You have hierarchical data**  
The nested rectangle structure works well for showing multiple levels of categorization.
3. **Space efficiency is important**  
Treemaps make very efficient use of space compared to other part-to-whole visualizations.
4. **The data has widely varying magnitudes**  
Treemaps can effectively show both very large and very small values in the same view.

### Stacked Bar Charts

Show the parts that contribute to the total and compare change over time. Use stacked bars when:

1. **You want to show both absolute size AND composition**  
Unlike pie charts which only show proportions, stacked bars can show both the total size and the breakdown of components.
2. **You have 3-8 categories to stack**  
More than 8 stacks become hard to read, especially for segments not aligned to the baseline.
3. **The order of stacks is meaningful**  
The position in the stack should follow a logical order (e.g., funnel stages from top to bottom, or risk levels from high to low).
4. **The bottom (base) category is the most important**  
Only the bottom segment can be easily compared across bars since it's aligned to the axis.
5. **Seeing the total is as important as seeing the parts**  
The full height of the bar gives an immediate sense of the total, while the segments show composition.

Avoid stacked bars when:

1. **You need to compare non-baseline segments**  
Segments not aligned to the baseline are hard to compare across bars since they have different starting points.
2. **The data has many small values**  
Thin segments become hard to see and even harder to compare.
3. **Precise comparisons are needed**  
Consider using grouped bars instead if exact comparisons between categories are important.

### Area Charts

## Magnitude

### Bar Chart

### Grouped Bar Chart

### Heatmap

## Correlation
### Scatter Plot / Bubble Chart