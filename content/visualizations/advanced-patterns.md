# Color Palettes

> Guidelines for creating effective and accessible data visualizations using color

<!-- tabs:start -->

#### **Quick Guide**

## Essential Principles
<!-- card-grid -->

<!-- card {"variant": "plum", "type": "color"} -->
#### Core Guidelines

**Key Principles**
- Aline Blue is the universal default choice
- Start with single color visualizations
- Add colors only when semantically necessary
- Darker colors suggest larger values
- Maintain categorical color consistency

?> **Pro Tip**  
When in doubt, use Aline Blue. It's always appropriate and provides excellent readability.
<!-- end-card -->

<!-- card {"variant": "plum", "type": "color"} -->
#### Color Selection

**Primary Palette**  
{colors:#466a82,#56829f,#6d96b0,#88aabf,#a2bdcd}

**Supporting Primary**  
{colors:#FF5733,#FF795D,#FF9B87,#FFBDB1,#FFDFD9}

!> **Important**  
Use Aline Orange sparingly. Its high contrast can be visually distracting and carries negative connotations.
<!-- end-card -->

<!-- end-card-grid -->

#### **Usage Guidelines**

## Strategic Color Implementation
<!-- card-grid -->

<!-- card {"variant": "plum", "type": "color"} -->
#### Default State

**Single Color Best Practices**
- Use one muted color for most visualizations
- Single dimension + single measure = single color
- Add accent colors only for specific insights
- Choose neutral base colors for extended viewing

**Default Blue Variations**  
{colors:#466a82,#56829f,#6d96b0,#88aabf,#a2bdcd}
<!-- end-card -->

<!-- card {"variant": "plum", "type": "color"} -->
#### Supporting Colors

**Pink Tints**  
{colors:#FF7F7F,#FFA3A3,#FFC7C7,#FFE1E1,#FFF5F5}

**Gold Tints**  
{colors:#B5A642,#C7BA6E,#D9CE9A,#EBE2C6,#FDF6F2}

!> **Note on Gold**  
Despite its name, Aline Gold appears greenish. Use carefully as green often implies "good" or "success".
<!-- end-card -->

<!-- card {"variant": "plum", "type": "color"} -->
#### Categorical Usage

**Best Practices**
- Maintain consistent colors across all charts
- Ensure sufficient contrast between categories
- Test for colorblindness compatibility
- Maintain minimum 3:1 contrast ratio

?> **Accessibility Tip**  
Always verify color combinations using [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
<!-- end-card -->

<!-- end-card-grid -->

#### **Advanced Applications**

## Complex Color Systems
<!-- card-grid -->

<!-- card {"variant": "plum", "type": "color"} -->
#### Sequential & Diverging

**Sequential Palettes**
- Best for showing ordered data
- Emphasizes largest values
- Often doesn't need legends
- Limited to 3 or fewer values for dimensions

**Diverging Example**  
{colors:#FF897D,#E9DFDE,#95ABBA}
<!-- end-card -->

<!-- card {"variant": "plum", "type": "color"} -->
#### Brand & Theme

**Theme Colors**  
{colors:#2B4C6F,#FF5733,#B5A642,#FF7F7F}

**Brand Colors**  
{colors:#2B4C6F,#FF5733,#B5A642,#FFB1B1}

**Accessible Colors**  
{colors:#2B4C6F,#1A3B5E,#FF5733}
<!-- end-card -->

<!-- card {"variant": "plum", "type": "color"} -->
#### Sentiment & Neutral

**Sentiment Scale**  
{colors:#2B4C6F,#95ABBA,#FF5733,#FF897D,#B5A642,#C7BA6E}

**Neutral Palette**  
{colors:#000000,#4D4D4D,#999999,#E6E6E6,#FFFFFF}
<!-- end-card -->

<!-- end-card-grid -->

<!-- tabs:end -->

## Implementation Guide

### Power BI Tips
- Select colors from the same column in color picker
- Skip adjacent colors for better contrast
- Use theme colors for consistency

### Accessibility Checklist
- [x] Verify contrast ratios (minimum 3:1)
- [x] Test against white and dark backgrounds
- [x] Check colorblind-friendly combinations
- [x] Ensure consistent color meaning

### Editorial Considerations
- Sequential scales tell progressive stories
- Diverging scales emphasize extremes
- Color choices shape data narrative
- Consider cultural color implications

?> **Best Practice**: Always test your color schemes with actual data before finalizing the design.