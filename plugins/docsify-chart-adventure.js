window.$docsify = window.$docsify || {};
window.$docsify.plugins = (window.$docsify.plugins || []).concat((hook, vm) => {
  hook.beforeEach((content) => {
    // Replace [chart-adventure] shortcode with the plugin container
    return content.replace(/\[chart-adventure\]/g, '<div id="chart-adventure"></div>');
  });

  hook.doneEach(() => {
    const adventureContainer = document.getElementById('chart-adventure');
    if (!adventureContainer) return;

    // Initial state
    const state = {
      step: 'start',
      steps: {
        start: {
          question: 'What type of data do you have?',
          options: [
            { text: 'Categorical data', next: 'categorical' },
            { text: 'Numerical data', next: 'numerical' },
            { text: 'Time-series data', next: 'time-series' },
          ],
        },
        categorical: {
          question: 'Do you want to compare categories or show proportions?',
          options: [
            { text: 'Compare categories', next: 'bar-chart' },
            { text: 'Show proportions', next: 'pie-chart' },
          ],
        },
        numerical: {
          question: 'Do you want to show distribution or correlation?',
          options: [
            { text: 'Distribution', next: 'histogram' },
            { text: 'Correlation', next: 'scatter-plot' },
          ],
        },
        'time-series': {
          question: 'Do you want to highlight trends or specific values?',
          options: [
            { text: 'Highlight trends', next: 'line-chart' },
            { text: 'Highlight specific values', next: 'area-chart' },
          ],
        },
        'bar-chart': {
          result: 'Recommended Chart: Bar Chart',
          description: 'Use a bar chart to compare categorical data side by side.'
        },
        'pie-chart': {
          result: 'Recommended Chart: Pie Chart',
          description: 'Use a pie chart to show proportions of a whole.'
        },
        histogram: {
          result: 'Recommended Chart: Histogram',
          description: 'Use a histogram to show the distribution of numerical data.'
        },
        'scatter-plot': {
          result: 'Recommended Chart: Scatter Plot',
          description: 'Use a scatter plot to show the relationship between two numerical variables.'
        },
        'line-chart': {
          result: 'Recommended Chart: Line Chart',
          description: 'Use a line chart to highlight trends in time-series data.'
        },
        'area-chart': {
          result: 'Recommended Chart: Area Chart',
          description: 'Use an area chart to highlight cumulative values or trends.'
        },
      },
    };

    const renderStep = () => {
      const step = state.steps[state.step];
      adventureContainer.innerHTML = '';

      if (step.result) {
        // Render result
        const resultElement = document.createElement('h2');
        resultElement.textContent = step.result;
        adventureContainer.appendChild(resultElement);

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = step.description;
        adventureContainer.appendChild(descriptionElement);

        const restartButton = document.createElement('button');
        restartButton.textContent = 'Restart';
        restartButton.onclick = () => {
          state.step = 'start';
          renderStep();
        };
        adventureContainer.appendChild(restartButton);
      } else {
        // Render question and options
        const questionElement = document.createElement('h2');
        questionElement.textContent = step.question;
        adventureContainer.appendChild(questionElement);

        step.options.forEach((option) => {
          const button = document.createElement('button');
          button.textContent = option.text;
          button.onclick = () => {
            state.step = option.next;
            renderStep();
          };
          adventureContainer.appendChild(button);
        });
      }
    };

    renderStep();
  });
});
