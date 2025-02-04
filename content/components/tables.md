# **Table & Matrix Design**

> Best practices for creating actionable, user-friendly tables and matrices in Power BI.
> The below requirements are just that -- required. The content that follows contains ideas and best practices.



?> **Requirements:** Use the "Minimal" style preset. Bold column headers. Strive for no horizontal scroll, but don't resize so much that the table is too hard to read. 

---

## **1. Define the User's Purpose**

### **1.1 Understand the Intended Use**

Before designing a table or matrix, clarify the user’s primary needs:

- **Action-Oriented**: The table supports workflow actions (e.g., clicking ticket IDs to open detailed views).
- **Info-Oriented**: The table presents rich datasets for exploration or decision-making.
- **Mixed Use**: Combines depth of information with actionable features for power users.

📌 **Power BI Considerations**:

- Use **actionable links** (e.g., clickable ticket IDs, icons for external links).
- Add tooltips for context or guidance on actions.

---

### **1.2 Customizable Viewing Options**

Should the table offer **user controls** to adjust the view?

- **Options to include**:
    - Sorting (e.g., by priority, date, or value).
    - Filtering (e.g., slicers for timeframes, categories).
    - Search functionality (e.g., search for a specific community or ticket).
    - Show/hide columns dynamically (Power BI **field parameters** are ideal for this).

---

## **2. Key Elements of a Table or Matrix**

A table in Power BI is made of three core components:

- **Data**: The rows (values or records).
- **Columns**: Headers and fields.
- **Interaction**: How users explore or act on the data.

### **2.1 Data Alignment**

### Text Columns:

- Always **left-align** text to improve readability.
- Align **headers with their content** (left-align text headers).
- Avoid **center alignment**; it disrupts scanning.

### Numeric Columns:

- **Right-align** numeric fields for easy comparison.
- Align numbers by their **decimal points**.
- Exceptions:
    - **Dates, postal codes, phone numbers** → Left-align these because they’re more qualitative.

### Power BI Tip:

- Use **field formatting options** to set consistent alignment for columns in your visual.

---

### **2.2 Column and Row Guidelines**

### Column Headers:

- Always **bold headers** to differentiate them from data rows.
- Use **human-readable names** (e.g., "Date Created" instead of "CreateDT").

### Column Width:

- Adjust column widths to minimize horizontal scrolling.
- Avoid splitting values into multiple lines unless absolutely necessary.
- Use **auto-size** sparingly—ensure critical fields remain visible.

### Rows:

- Use **alternating row colors** to enhance readability (apply Power BI’s "Minimal" style preset).
- Prioritize important fields for the first few columns to improve scannability.

### Sparklines:

- Use sparklines only when trends are relevant to the context.
- Keep the column width proportional to the sparkline size.
- Avoid **excessive markers**—they clutter the visualization.

---

## **3. Table Customization Options**

### **3.1 Managing Too Many Columns**

If the table has too many columns:

- **Prioritize key fields** in the default view.
- Allow users to **add or remove columns dynamically** (via field parameters).
- Use **horizontal scrolling** if necessary but freeze the leftmost column for orientation.
- Resizing columns is acceptable but ensure values aren’t truncated or split awkwardly.

---

### **3.2 Sorting & Filtering**

- **Default sorting** should align with user expectations (e.g., descending by date or priority).
- Add filters for:
    - Categories (e.g., "Unit Care Type").
    - Date ranges (e.g., slicer for "Last X Months").
    - Priority levels or metrics.

---

### **3.3 Hyperlinks & Icons**

- Use **clickable links** for actionable fields (e.g., Ticket IDs, URLs).
- Add a **hyperlink icon** next to text when the link isn’t self-explanatory.

---

## **4. Styling & Formatting**

### **4.1 Colors**

- Use **the lightest background colors** in the palette for emphasis (e.g., conditional formatting).
- Conditional formatting for KPIs:
    - **Green**: Target met.
    - **Red**: Target missed.
    - **Neutral colors** for non-actionable rows.

---

### **4.2 Matrix Layouts**

Choose the appropriate layout style:

- **Compact Form**: Saves space by nesting child items under parent categories.
- **Outline Form**: Better for displaying grouped data clearly when space isn’t an issue.

---

### **4.3 Accessibility**

- Use **font sizes of 10px or higher** to ensure readability.
- Test visual contrast to ensure it meets **WCAG standards** (e.g., dark text on light backgrounds).
- Avoid overcrowding cells with excessive text or icons.

---

## **5. Interactivity**

### **5.1 Drill-Down and Hierarchies**

- Enable **drill-down** in matrices to support hierarchical exploration (e.g., Region → Location → Unit Care).
- Use **expandable rows** for clarity when showing multiple levels of data.

### **5.2 Dynamic Titles**

- Create **dynamic table titles** that reflect slicer selections (e.g., "Ticket Details for [Last 30 Days]").

---

### **Closing Notes**

By following these guidelines, your Power BI tables and matrices will be:

- **Readable and scannable.**
- **Actionable for end-users.**
- Optimized for both **info-oriented and action-oriented tasks.**