# Chart anatomy
> Axes, labels, gridlines, and legends

## **Chart parts**

### Number Formatting

- Use full number where possible — 1,000 favored over 1K.
- In charts, the shortened version of the number may be more appropriate — this is an editorial decision — use when the full number is harder to read or if the chart looks too busy.
- Use commas in full numbers.
- Exclude decimal points where not critical for data interpretation (data values are separated by 10 vs. data values are separated by .1)

### Chart Titling

- The title of a chart should be descriptive and reflect the main insight the data reveals.
- A basic template is “[measure] by [dimension]”
- Shouldn’t exceed 8 words.
- Dynamic titles that display data values are okay, but still should make apparent the chart content.

### Chart Subtitles

Use to:

- **Provide context:** Explicit context about the range of dates being included or any notable limitations.
- **Delineate UX affordances:** Provide clarity to any key interactions with the chart (drill down, toggle, hover, etc.) that the user may not be aware of.

### Axis Labels

- Show all labels on a categorical axis.
- **Opt for data value labels instead of measure axis labels.**
- **Use axis labels if data values add too much clutter.**
- If label is used then the chart should have gridlines.

### Axis Titles

- Don’t include axis titles when:
    - Scales are self evident (date, time)
    - **Scales are captured in chart title and therefore don’t need to be repeated.** This is the most common case.
- Include an axis title when there is no chart title. Which should be rare, but does happen.

### Gridlines

- Default to no gridlines.
- In complex or busy charts that may be hard to follow, gridlines can be added.
- **Use gridlines when using axis labels.**

### Annotation

**Use cases**

- Use trendlines to help users interpret fluctuations in the data.
- Do not use annotations that obstruct the view of data.
- Do not use trendlines for short time frames.

**Styling**

- Dashed line for trend/average lines.
- Contrast here is very, very important. When selecting colors, reference the [color contrast checker](https://webaim.org/resources/contrastchecker/) to ensure accessibility – the Graphical Objects and User Interface Components test should have a pass.

Open image-20240709-171939.png

Yes

Open image-20240709-172014.png

No

Open image-20240709-174112.png

## **Legends**

### **Quantitative encoding**

- Never use a legend when the color is used to encode the same metric used in the chart.
- When encoding a separate measure, always add a legend, and always give it a title.

### **Qualitative encoding**

- **Avoid categorical legends.** Categorical legends separate the data from its context, and users are forced to alternate between the data points and the legend just to make sense of the whole picture.
- **Try to instead label data directly.** If data labels are too cluttered or text is cut off, use a legend.
    - In donut charts, the legend goes on right. If there’s not enough horizontal space, on the bottom.
    - For all other charts, the legend goes at the top or left.

### Tooltips

**A tooltip should**

1. **Provide context:**
    
    **Such as showing a drill down from a hierarchy, a percent breakdown of an aggregated value or a further granular view of a data point.**
    
2. Provide clarity:
    
    The tooltip keeps to 2-3 metrics or a simple chart that is easy to read and provides insight. It does not complete for visual attention with the rest of the dashboard or the visual it’s attached to.
    

# **Chart color**

### Rules of thumb

- Aline Blue is *always* appropriate to use, and is a reliable default.
- **Use a single color as the default for data visualizations.** Only add more colors when needing to differentiate between data categories or create visual interest.
- Generally, do not use more than one color in your data visualization if the additional colors don’t serve any communication purpose.
- Dark-to-light sequential palettes of a single color can be used if a chart is displaying volume.
- Employ consistent use of categorical palette across data values.
- Darker colors imply larger numbers.

## **By dimension (qualitative)**

### Categorical

- This is where the theme palette comes into play.
- For use when data categories need to be visually distinct from one another.
- For use when there are more than 3 data values.

### Sequential

Aline Brand guidelines use sequential palettes for encoding non-numeric meaning. Which, technically, is not best practice.

- For the sake of consistency and brand alignment, but to maintain accessibility, we will use it sparingly.
- Use when encoding 3 or less dimension values.
- If exceeds 3 dimensions, use the categorical palette.

**Sequential in practice:** Select colors from the same column in the Power BI color picker. Do not use colors directly next to each other in the picker, so as to maintain contrast.

## **By measure (quantitative)**

- Can be used to create visual interest when encoding the same value shown in the chart.
- Depends on report context, but potentially can add confusion when coloring by a different measure than is used in the chart (true even when a legend is used)
- Sequential and diverging color scales are often an editorial choice – they tell different stories.

### Sequential

- Try to default to using different shades of the same hue, ideally the Aline blue.
- If the data value has a definite negative connotation – that to have any value at all is bad – use shades of Aline orange or pink.
- When the opposite is true – the data value, no matter how big or small, is still a net positive – consider one of the provided gradients that use Aline gold or one of our green variations.
- Legend not needed when coloring by same metric used in chart.

### Diverging

Diverging colors also have numeric meaning. They’re useful when dealing with negative values or ranges that have two extremes with a baseline in the middle. Diverging palettes are a pair of 2 gradations of colors that meet in the center.

**Use when**

1. If there’s a meaningful middle point (zero, average, target)
2. To emphasize extremes
3. To emphasize more differences in the data.