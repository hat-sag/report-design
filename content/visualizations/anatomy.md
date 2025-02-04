# **Chart Anatomy & General Visualization Standards**


## **1. Principles of Effective Chart Design**

A chart should present **no barriers to entry**—users should **immediately grasp its key insights** without unnecessary complexity.

- **Start with a blank slate**—no labels, titles, or gridlines—**then add only what is necessary.**
- A **high-impact chart** makes the insight **immediately visible** and **intuitive to interpret.**
- A **refined chart** includes only the elements **necessary for comprehension**, ensuring a **clean, effective design.**

By **following this minimalist-first approach**, we ensure that every element added serves a **clear and essential purpose** in communication.

---

## **2. Chart Construction Order**

To maintain clarity, build charts in the following order, **ensuring each element is necessary before adding it back in**:

1. **Base Chart** → Start with only the **raw data visualization** (no labels, titles, or gridlines).
2. **Title & Context** → Add a **clear, human-readable title** that concisely explains what’s shown.
3. **Data Labels & Legends** → Include **only when necessary** to aid interpretation.
4. **Axes & Gridlines** → Use **sparingly**, only when they improve clarity.
5. **Styling & Layout Refinements** → Final touches, ensuring a **balanced and accessible visual structure**.

> Key principle: If an element does not actively enhance readability, it should not be included.
> 

---

## **3. Titling & Context**

### **3.1 General Titling Guidelines**

✅ **Every chart should have a title unless it is an obvious supplementary visual.**

✅ **Titles must be descriptive yet simple.** They should **clearly define** what is being shown **without unnecessary abbreviations or vague wording.**

**Recommended Format:**

🟢 **[Measure] by [Dimension]** (e.g., "Occupancy by Month")

🔴 **Avoid vague or unclear phrasing** (e.g., "Occupancy Trends" lacks specificity).

📌 **If your data fields have unclear names**, rename them in the chart settings to ensure human readability.

📌 **For dynamic Power BI reports using hierarchies**, be aware that **titles may update dynamically based on drill-down selections.** Ensure titles make sense **at all hierarchy levels.**

---

### **3.2 Time-Based Titles**

Titles should reflect the nature of the analysis:

- **Point-in-time comparisons** → `[Measure] by [Month/Quarter/Year]`
- **Trends & changes over time** → `[Measure] Over Time`

---

### **3.3 Multiple Variables in Titles**

**When displaying multiple variables, choose the correct title structure:**

| **Scenario** | **Use This Format** | **Example** |
| --- | --- | --- |
| Comparing two measures against each other | **"vs."** | "Revenue vs. Expenses" |
| Showing two measures side by side (not in direct comparison) | **"and"** | "Revenue and Cost by Region" |
| Showing two dimensions by one measure | **"and"** | "Revenue by Region and Product" |

---

### **3.4 Titling Tables**

📌 **Tables need a title when:**

- They are **standalone elements** without supporting charts.
- **Time periods or dimensions** aren’t immediately obvious.
- Visual alignment with other report elements **would be disrupted without a title.**

📌 **Tables can omit a title when:**

- Their context is **completely apparent from nearby charts or column headers.**

**Recommended Formats:**

✅ General: `"Sales Metrics"`

✅ Contextual: `"Sales Metrics (YTD)"`

✅ If needed, **use subtitles** to clarify table functionality.

---

### **3.5 Visualizations Using Field Parameters**

Since **Power BI does not dynamically update measure names in titles**, follow one of these approaches:

**Option 1:** If the slicer selection is visible and intuitive, name the measure broadly (e.g., `"Conversion Rates"`).

**Option 2:** Create a measure that dynamically references the selected parameter in the title.

> Guiding principle: Choose the approach that makes the parameter’s function most obvious without requiring extra effort from the user.
> 

---

## **4. Labels & Axes**

### **4.1 Category Labels**

✅ **Prefer direct category labels** instead of relying on legends.

✅ **Ensure clarity**—users should not have to scan across the page to connect labels to data.

---

### **4.2 Data Labels vs. Axis Labels**

**Use data labels whenever possible.** Only use axis labels when **data density is too high** for direct labeling.

📌 **Best Practices:**

- ✅ **Use data labels when exact values matter** (e.g., bar charts, column charts).
- ✅ **Use axis labels only when labeling every data point would create clutter.**
- 🚫 **Avoid overuse of labels**—they should not overpower the chart.

📌 **For sparklines, data labels are often unnecessary.**

---

### **4.3 Axes Guidelines**

✅ **Use axis labels only when data labels are impractical.**

✅ **Always title axes when:**

- The chart **has dual axes.**
- The **title alone does not fully explain the chart contents.**

📌 **Chart-specific recommendations:**

- **Horizontal bar charts** → Avoid axis labels (eye movement distance issue).
- **Line charts** → Y-axis labels help users scan along the chart naturally.
- **When using time-based data, use a continuous date axis** instead of categorical when possible.

---

## **5. Layout & Formatting Standards**

### **5.1 Chart Size & Data-to-Pixel Ratio Considerations**

✅ **Charts should be large enough to clearly display data but not waste space.**

✅ **Larger charts imply greater importance**—size should reflect significance.

✅ **Maintain a good data-to-pixel ratio** (avoid excessive empty space).

✅ **Expand y-axis width (32px or 36px if needed) to avoid truncation.**

---

### **5.2 Universal Formatting**

📌 **Technical Standards:**

- **Padding:** `12-12-12-8` (top-right-left-bottom)
- **Background:** Always white (no unnecessary background colors).
- **Font:** Segoe UI, minimum **9px** size (exceptions for constrained spaces).
- **Text alignment:** Left-aligned.
- **Font emphasis:** Semi-bold preferred over bold.

---

### **5.3 Legends**

🚫 **Avoid legends whenever possible—direct labeling is preferred.**

📌 **If necessary, place based on chart orientation:**

- **Wide charts:** Position at **top or bottom**.
- **Tall charts:** Position at **left or right**.

---

## **6. Additional Contextual Elements**

### **6.1 Tooltips**

✅ **Use tooltips only when critical chart context is missing.**

🚫 **Avoid over-complex tooltips** (such as extra visualizations) unless they align with common UI patterns.

---

### **6.2 Trendlines & Sparklines**

✅ **Use when:**

- A **single important metric needs context** (e.g., small charts alongside KPIs).
- **Trend insight adds value** to absolute measures.

🚫 **Avoid when:**

- The **pattern is already clear.**
- They **add more noise than signal.**

📌 **Styling:** Dashed `1px`, high contrast with chart color.

---

### **6.3 Reference Lines**

✅ **Use reference lines when:**

- A **zero baseline helps users orient to positive/negative values.**
- **Benchmarking is essential to interpretation.**

🚫 **Avoid reference lines when:**

- They **compete visually with key data points.**

📌 **Styling:**

- **Dynamic targets:** Dotted `2px`, contrast color.
- **Static baselines:** Solid, medium grey to blend naturally.