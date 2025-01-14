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

Show correlation over time. Use combo charts when:

1. **Displaying different types of data on the same chart**  
    Combine, for example, bars and lines to represent different metrics that share the same time axis.
    
2. **Highlighting relationships between datasets**  
    Use different chart types within the same visualization to emphasize how two metrics interact or influence each other.
    
3. **Maximizing data density without sacrificing clarity**  
    Effectively display multiple data series without overcrowding the chart, allowing for easy comparison.
    
4. **Emphasizing primary and secondary metrics**  
    Assign distinct visual encodings (like bars for primary metrics and lines for secondary) to differentiate their importance and roles.

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
    


## Magnitude

### Bar Chart

Use bar charts when:

1. **Comparing discrete categories**  
    Bar charts are ideal for showing comparisons among different groups or categories.
    
2. **Emphasizing the size of each category**  
    The length of the bars makes it easy to see which categories are larger or smaller.
    
3. **Displaying data with a clear ordering**  
    Arrange bars in a meaningful order (e.g., ascending or descending) to enhance readability.
    
4. **Highlighting differences between categories**  
    Bar charts make it straightforward to identify and compare variations across groups.
    
5. **Handling moderate numbers of categories**  
    Bar charts work best with a manageable number of categories to maintain clarity.

### Grouped Bar Chart

Use grouped bar charts when:

1. **Comparing subgroups within main categories**  
    Grouped bars allow you to see differences within each main category across subgroups.
    
2. **Displaying multiple related metrics**  
    Show various metrics side-by-side for each category to facilitate comparison.
    
3. **Maintaining clarity with a limited number of groups**  
    Ensure that the number of groups and subgroups is small enough to keep the chart readable.
    
4. **Highlighting patterns across groups**  
    Easily identify trends or discrepancies between different subgroups within each category.
    
5. **Facilitating direct comparisons**  
    Grouped bars allow for straightforward side-by-side comparison of related data points.

### Heatmap

Use heatmaps when:

1. **Visualizing data density or intensity**  
    Heatmaps effectively show the concentration or intensity of data points across two dimensions.
    
2. **Displaying large datasets**  
    Manage and represent extensive data in a compact and interpretable format.
    
3. **Identifying patterns and correlations**  
    Easily spot trends, clusters, and anomalies through color variations.
    
4. **Comparing multiple variables simultaneously**  
    Represent interactions between different variables by using color gradients.
    
5. **Enhancing readability with clear color scales**  
    Use intuitive and consistent color scales to make the heatmap easy to interpret.

## Ranking

### Bar Chart

Use bar charts for ranking when:

1. **Displaying ordered categories**  
    Arrange bars in a specific order (e.g., highest to lowest) to emphasize rankings.
    
2. **Highlighting top or bottom performers**  
    Easily identify the leading or trailing categories in a ranked list.
    
3. **Comparing relative positions**  
    Show how categories stack up against each other in terms of rank.
    
4. **Simplifying complex rankings**  
    Break down intricate ranking data into a clear and understandable visual format.
    
5. **Facilitating quick assessment**  
    Allow viewers to rapidly grasp the ranking hierarchy through bar lengths and ordering.

## Correlation and Relationships

### Scatter Plots

Illustrate the relationship between two numerical variables. Use scatter plots when:

1. **Assessing correlations**  
    Identify positive, negative, or no correlation between variables.
    
2. **Detecting trends and patterns**  
    Spot linear or nonlinear relationships and clusters within the data.
    
3. **Identifying outliers**  
    Easily see data points that deviate significantly from others.
    
4. **Visualizing large datasets**  
    Handle numerous data points without becoming cluttered, especially with techniques like transparency or aggregation.
    

### Bubble Charts

Extend scatter plots by adding a third variable through bubble size. Use bubble charts when:

1. **Adding an additional dimension**  
    Represent a third numerical variable by varying the size of the bubbles.
    
2. **Enhancing data density**  
    Convey more information without overcrowding the chart.
    
3. **Highlighting specific data points**  
    Use bubble size to emphasize particular aspects or metrics.
    
4. **Visualizing multi-variable relationships**  
    Show interactions between three variables simultaneously.
    

## Geographic Data

### Choropleth Maps

Display data aggregated by geographic regions. Use choropleth maps when:

1. **Visualizing regional data**  
    Show variations across different geographic areas like countries, states, or counties.
    
2. **Highlighting spatial patterns**  
    Identify trends and disparities across regions.
    
3. **Comparing multiple regions**  
    Easily compare data across various geographic boundaries.
    
4. **Emphasizing relative differences**  
    Use color intensity to represent data values relative to other regions.
    

### Filled Maps

Use filled maps to represent data density or values across geographic areas. Use filled maps when:

1. **Displaying precise geographic boundaries**  
    Highlight specific regions with clear demarcations.
    
2. **Visualizing aggregated data**  
    Show totals or averages for defined geographic areas.
    
3. **Enhancing spatial context**  
    Provide a clear geographic backdrop to the data being presented.
    
4. **Comparing regions side-by-side**  
    Facilitate direct comparisons between adjacent or related geographic areas.
    

## Distribution and Composition

### Waterfall Charts

Visualize cumulative effects of sequential positive and negative values. Use waterfall charts when:

1. **Showing how an initial value is affected by a series of changes**  
    Break down contributions to a final value step-by-step.
    
2. **Highlighting incremental changes**  
    Clearly display additions and subtractions over time or categories.
    
3. **Simplifying complex calculations**  
    Make it easier to understand how individual components contribute to the total.
    
4. **Enhancing financial data representation**  
    Commonly used for financial statements like profit and loss.
    

### Funnel Charts

Represent stages in a process and show potential drop-offs. Use funnel charts when:

1. **Visualizing conversion rates**  
    Show how users or customers progress through different stages.
    
2. **Identifying bottlenecks**  
    Highlight stages where significant drop-offs occur.
    
3. **Simplifying complex processes**  
    Provide a clear overview of sequential steps and their outcomes.
    
4. **Enhancing sales and marketing analysis**  
    Track performance metrics across various stages of a campaign or sales funnel.
    