function chartDocsPlugin(hook, vm) {
    let chartData = null;
  
    hook.init(async function() {
      // Fetch your JSON file (adjust path if needed)
      const response = await fetch('plugins/charts.json');
      chartData = await response.json();
    });
  
    function generateChartDocsHTML() {
      if (!chartData || !chartData.categories) return '';
  
      let html = '<div class="chart-docs-container">';
  
      // Loop over each category
      chartData.categories.forEach((category) => {
        html += `
          <div class="category-section">
            <h2 class="category-title">${category.title}</h2>
        `;
  
        // Now loop over each subCategory
        if (category.subCategories && Array.isArray(category.subCategories)) {
          category.subCategories.forEach((subCat) => {
            html += `
              <div class="subcategory-section">
                <h3 class="subcategory-title">${subCat.title}</h3>
                <div class="subcategory-charts-grid">
            `;
  
            // Loop over the charts in this subCategory
            if (subCat.charts && Array.isArray(subCat.charts)) {
              subCat.charts.forEach((chart) => {
                html += `
                  <div class="chart-card">
                    <h4 class="chart-name">${chart.name}</h4>
                    <p class="chart-subtitle">${chart.subtitle || ''}</p>
                    ${renderUseAvoid(chart)}
                    ${renderNotes(chart)}
                  </div>
                `;
              });
            }
  
            html += `</div></div>`; // close subcategory-charts-grid & subcategory-section
          });
        }
  
        html += `</div>`; // close category-section
      });
  
      html += `</div>`; // close chart-docs-container
      return html;
    }
  
    // Helper: Render "Use When" + "Avoid When" lists if present
    function renderUseAvoid(chart) {
      let output = '';
      if (chart.use || chart.avoid) {
        output += `<div class="chart-use-avoid">`;
        if (chart.use && chart.use.length) {
          output += `<div class="chart-use"><h5>Use When</h5><ul>`;
          chart.use.forEach(item => {
            output += `<li>${item}</li>`;
          });
          output += `</ul></div>`;
        }
        if (chart.avoid && chart.avoid.length) {
          output += `<div class="chart-avoid"><h5>Avoid When</h5><ul>`;
          chart.avoid.forEach(item => {
            output += `<li>${item}</li>`;
          });
          output += `</ul></div>`;
        }
        output += `</div>`;
      }
      return output;
    }
  
    // Helper: Render any "notes" array
    function renderNotes(chart) {
      if (!chart.notes) return '';
      let output = `<div class="chart-notes"><ul>`;
      chart.notes.forEach(note => {
        output += `<li>${note}</li>`;
      });
      output += `</ul></div>`;
      return output;
    }
  
    // Insert the generated HTML into the page where marker is found
    hook.afterEach(function (html, next) {
      const marker = "<!-- chart-docs -->";
      if (html.includes(marker)) {
        const chartDocsHTML = generateChartDocsHTML();
        html = html.replace(marker, chartDocsHTML);
      }
      next(html);
    });
  }
  
  // Register the plugin
  window.$docsify = window.$docsify || {};
  window.$docsify.plugins = (window.$docsify.plugins || []).concat(chartDocsPlugin);
  