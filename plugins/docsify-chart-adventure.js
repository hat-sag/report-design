window.$docsify = window.$docsify || {};
window.$docsify.plugins = (window.$docsify.plugins || []).concat((hook, vm) => {
  let state = { currentNode: {}, tree: {} };

  // Fetch the JSON configuration file
  fetch('plugins/chart-adventure-config.json')
    .then((response) => response.json())
    .then((config) => {
      state.tree = config; // Load the hierarchical JSON as the tree
      state.currentNode = config; // Start at the root
    })
    .catch((error) => console.error('Error loading JSON:', error));

  hook.beforeEach((content) => {
    // Replace [chart-adventure] shortcode with the plugin container
    return content.replace(/\[chart-adventure\]/g, '<div id="chart-adventure"></div>');
  });

  hook.doneEach(() => {
    const adventureContainer = document.getElementById('chart-adventure');
    if (!adventureContainer) return;

    const renderStep = () => {
      const currentNode = state.currentNode;
      adventureContainer.innerHTML = ''; // Clear the container

      if (currentNode.result) {
        // Render result
        const resultElement = document.createElement('h2');
        resultElement.textContent = currentNode.result;
        resultElement.classList.add('result'); // Add CSS class for styling
        adventureContainer.appendChild(resultElement);

        // Render description
        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = currentNode.description;
        descriptionElement.classList.add('description'); // Add CSS class for styling
        adventureContainer.appendChild(descriptionElement);

        // Render considerations (if any)
        if (currentNode.considerations) {
          const considerationsTitle = document.createElement('h3');
          considerationsTitle.textContent = "Considerations:";
          considerationsTitle.classList.add('considerations-title'); // Add CSS class
          adventureContainer.appendChild(considerationsTitle);

          const considerationsList = document.createElement('ul');
          considerationsList.classList.add('considerations-list'); // Add CSS class
          currentNode.considerations.forEach((consideration) => {
            const listItem = document.createElement('li');
            listItem.textContent = consideration;
            listItem.classList.add('consideration-item'); // Add CSS class
            considerationsList.appendChild(listItem);
          });
          adventureContainer.appendChild(considerationsList);
        }

        // Render restart button
        const restartButton = document.createElement('button');
        restartButton.textContent = 'Restart';
        restartButton.classList.add('restart'); // Add CSS class for restart-specific styling
        restartButton.onclick = () => {
          state.currentNode = state.tree; // Restart from the root
          renderStep();
        };
        adventureContainer.appendChild(restartButton);
      } else {
        // Render question
        const questionElement = document.createElement('h2');
        questionElement.textContent = currentNode.question;
        questionElement.classList.add('question'); // Add CSS class for question
        adventureContainer.appendChild(questionElement);

        // Render options as buttons
        currentNode.options.forEach((option) => {
          const button = document.createElement('button');
          button.textContent = option.text;
          button.classList.add('option-button'); // Add CSS class for option buttons
          button.onclick = () => {
            state.currentNode = option; // Navigate to the selected option's node
            renderStep();
          };
          adventureContainer.appendChild(button);
        });
      }
    };

    // Initial render
    if (Object.keys(state.tree).length > 0) renderStep();
  });
});
