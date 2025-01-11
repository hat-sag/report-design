window.$docsify = window.$docsify || {};
window.$docsify.plugins = (window.$docsify.plugins || []).concat((hook, vm) => {
  let state = { step: 'start', steps: {} };

  // Fetch the JSON configuration file
  fetch(`./plugins/chart-adventure-config.json?${new Date().getTime()}`)
  .then((response) => response.json())
  .then((config) => {
    state.steps = config;
  })
  .catch((error) => console.error('Error loading chart adventure config:', error));


  hook.beforeEach((content) => {
    // Replace [chart-adventure] shortcode with the plugin container
    return content.replace(/\\[chart-adventure\\]/g, '<div id=\"chart-adventure\"></div>');
  });

  hook.doneEach(() => {
    const adventureContainer = document.getElementById('chart-adventure');
    if (!adventureContainer) return;

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

    // Initial render
    if (Object.keys(state.steps).length > 0) renderStep();
  });
});
