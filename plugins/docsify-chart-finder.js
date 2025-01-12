(function() {
  // Chart decision tree data
  const chartDecisions = {
    distribution: {
      question: 'What type of distribution do you want to show?',
      options: {
        single: {
          result: 'histogram',
          description: 'Use a histogram to show the distribution of a single continuous variable'
        },
        multiple: {
          question: 'How many distributions?',
          options: {
            two: {
              result: 'boxplot',
              description: 'Use box plots to compare distributions between groups'
            },
            many: {
              result: 'ridgeline',
              description: 'Use a ridge line plot to compare many distributions'
            }
          }
        }
      }
    },
    comparison: {
      question: 'What are you comparing?',
      options: {
        categories: {
          question: 'How many categories?',
          options: {
            few: {
              result: 'barChart',
              description: 'Use a bar chart for comparing a few categories'
            },
            many: {
              result: 'lollipop',
              description: 'Use a lollipop chart for many categories to reduce visual clutter'
            }
          }
        },
        timeSeries: {
          question: 'What aspect of time series?',
          options: {
            trend: {
              result: 'lineChart',
              description: 'Use a line chart to show trends over time'
            },
            cumulative: {
              result: 'areaChart',
              description: 'Use an area chart to show cumulative values over time'
            }
          }
        }
      }
    },
    relationship: {
      question: 'What type of relationship?',
      options: {
        correlation: {
          question: 'How many variables?',
          options: {
            two: {
              result: 'scatterPlot',
              description: 'Use a scatter plot to show correlation between two variables'
            },
            three: {
              result: 'bubbleChart',
              description: 'Use a bubble chart to show relationships between three variables'
            }
          }
        },
        composition: {
          question: 'Is it part-to-whole?',
          options: {
            yes: {
              result: 'pieChart',
              description: 'Use a pie chart for showing parts of a whole'
            },
            no: {
              result: 'treemap',
              description: 'Use a treemap for hierarchical data'
            }
          }
        }
      }
    }
  };

  function createChartFinder(initialNode = chartDecisions) {
    let currentNode = initialNode;
    let html = '<div class="chart-finder">';
    
    if (currentNode.question) {
      html += `<h3>${currentNode.question}</h3><div class="chart-finder-options">`;
      Object.entries(currentNode.options).forEach(([key, value]) => {
        html += `<button onclick="window.selectChartOption(this, '${JSON.stringify(value).replace(/'/g, "\\'")}')">${key}</button>`;
      });
      html += '</div>';
    }
    
    if (currentNode.result) {
      html += `
        <div class="chart-finder-result">
          <h3>Recommended: ${currentNode.result}</h3>
          <p>${currentNode.description}</p>
          <button onclick="window.resetChartFinder(this)">Start Over</button>
        </div>`;
    }
    
    html += '</div>';
    return html;
  }

  // Plugin function
  var chartFinderPlugin = function(hook) {
    hook.afterEach(function(html) {
      // Replace <!-- chart-finder --> with the initial chart finder HTML
      return html.replace(
        /<!-- chart-finder -->/g,
        createChartFinder()
      );
    });
  };

  // Add global functions for the buttons to work
  window.selectChartOption = function(element, optionData) {
    const chartFinder = element.closest('.chart-finder');
    const option = JSON.parse(optionData);
    chartFinder.innerHTML = createChartFinder(option);
  };

  window.resetChartFinder = function(element) {
    const chartFinder = element.closest('.chart-finder');
    chartFinder.innerHTML = createChartFinder();
  };

  // Add styles
  const style = document.createElement('style');
  style.textContent = `
    .chart-finder {
      margin: 2em 0;
      padding: 1em;
      border: 1px solid #eee;
      border-radius: 4px;
    }
    
    .chart-finder-options {
      display: flex;
      gap: 1em;
      margin: 1em 0;
    }
    
    .chart-finder-options button {
      padding: 0.5em 1em;
      border: 1px solid #ddd;
      border-radius: 4px;
      background: #f8f8f8;
      cursor: pointer;
      transition: background 0.2s;
    }
    
    .chart-finder-options button:hover {
      background: #eee;
    }
    
    .chart-finder-result {
      margin-top: 1em;
      padding: 1em;
      background: #f8f8f8;
      border-radius: 4px;
    }
  `;
  document.head.appendChild(style);

  // Register plugin
  window.$docsify = window.$docsify || {};
  window.$docsify.plugins = [].concat(chartFinderPlugin, window.$docsify.plugins || []);
})();