(function () {
  const cardGridPlugin = function(hook, vm) {
    // Process markdown content
    hook.beforeEach(function(content) {
      return content.replace(/<!-- card-grid -->([\s\S]*?)<!-- end-card-grid -->/g, (match, gridContent) => {
        const cards = [];
        const cardRegex = /<!-- card(?:\s+(\{.*?\}))?\s*-->([\s\S]*?)<!-- end-card -->/g;
        let cardMatch;

        while ((cardMatch = cardRegex.exec(gridContent))) {
          const [_, cardOptions, cardContent] = cardMatch;
          let options = {};
          
          if (cardOptions) {
            try {
              options = JSON.parse(cardOptions);
            } catch (e) {
              console.warn('Invalid card options:', cardOptions);
            }
          }

          // Get header content for use as ID
          const headerMatch = cardContent.match(/####\s+(.*?)(?:\n|$)/);
          const headerId = headerMatch 
            ? headerMatch[1].toLowerCase().replace(/[^\w]+/g, '-') 
            : '';

          cards.push(`
            <div class="card" 
                 ${options.variant ? `data-variant="${options.variant}"` : ''}
                 onclick="if(event.target.tagName !== 'A') window.location.hash='#${headerId}'">
              <div class="card-content">
                ${vm.compiler.compile(cardContent)}
                ${options.tags ? `
                  <div class="card-tags">
                    ${options.tags.map(tag => `<span class="card-tag">${tag}</span>`).join('')}
                  </div>
                ` : ''}
              </div>
            </div>
          `);
        }

        return `<div class="card-grid">${cards.join('')}</div>`;
      });
    });
  };

  // Register the plugin
  if (window.$docsify) {
    window.$docsify.plugins = [].concat(
      cardGridPlugin,
      window.$docsify.plugins || []
    );
  }
})();