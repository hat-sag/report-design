window.$docsify = window.$docsify || {};
window.$docsify.plugins = (window.$docsify.plugins || []).concat((hook, vm) => {
  let state = { 
    currentNode: null, 
    tree: null,
    history: []
  };

  // Initialize plugin when the script is loaded
  hook.init(() => {
    fetch('plugins/chart-adventure-config.json')
      .then(response => response.json())
      .then(config => {
        state.tree = config;
        state.currentNode = config;
      })
      .catch(error => console.error('Error loading chart adventure config:', error));
  });

  // Replace shortcode with container before parsing markdown
  hook.beforeEach((content) => {
    return content.replace(/\[chart-adventure\]/g, '<div id="chart-adventure" class="markdown-section"></div>');
  });

  // Render the adventure after DOM is ready
  hook.doneEach(() => {
    const container = document.getElementById('chart-adventure');
    if (container && state.currentNode) {
      renderStep(container);
    }
  });

  const renderStep = (container) => {
    if (!state.currentNode) return;
    
    container.innerHTML = '';

    // Add navigation buttons container
    const navigationContainer = document.createElement('div');
    navigationContainer.classList.add('navigation-container');

    // Add back button if we have history
    if (state.history.length > 0) {
      const backButton = document.createElement('button');
      backButton.textContent = '← Back';
      backButton.classList.add('back-button');
      backButton.onclick = () => {
        state.currentNode = state.history.pop();
        renderStep(container);
      };
      navigationContainer.appendChild(backButton);
    }

    container.appendChild(navigationContainer);

    if (state.currentNode.result) {
      // Render result
      const resultElement = document.createElement('h2');
      resultElement.textContent = state.currentNode.result;
      resultElement.classList.add('result');
      container.appendChild(resultElement);

      if (state.currentNode.description) {
        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = state.currentNode.description;
        descriptionElement.classList.add('description');
        container.appendChild(descriptionElement);
      }

      if (state.currentNode.considerations) {
        const considerationsTitle = document.createElement('h3');
        considerationsTitle.textContent = "Considerations:";
        considerationsTitle.classList.add('considerations-title');
        container.appendChild(considerationsTitle);

        const considerationsList = document.createElement('ul');
        considerationsList.classList.add('considerations-list');
        state.currentNode.considerations.forEach((consideration) => {
          const listItem = document.createElement('li');
          listItem.textContent = consideration;
          listItem.classList.add('consideration-item');
          considerationsList.appendChild(listItem);
        });
        container.appendChild(considerationsList);
      }

      // Render restart button
      const restartButton = document.createElement('button');
      restartButton.textContent = 'Restart';
      restartButton.classList.add('restart');
      restartButton.onclick = () => {
        state.currentNode = state.tree;
        state.history = [];
        renderStep(container);
      };
      container.appendChild(restartButton);
    } else if (state.currentNode.question) {
      // Render question
      const questionElement = document.createElement('h2');
      questionElement.textContent = state.currentNode.question;
      questionElement.classList.add('question');
      container.appendChild(questionElement);

      // Create options container
      const optionsContainer = document.createElement('div');
      optionsContainer.classList.add('options-container');
      
      // Render options
      state.currentNode.options.forEach((option) => {
        const button = document.createElement('button');
        button.textContent = option.text;
        button.classList.add('option-button');
        button.onclick = () => {
          state.history.push(state.currentNode);
          state.currentNode = option;
          renderStep(container);
        };
        optionsContainer.appendChild(button);
      });
      
      container.appendChild(optionsContainer);
    }
  };
});