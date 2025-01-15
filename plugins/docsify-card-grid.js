(function () {
  const cardGridPlugin = function(hook, vm) {
    // Process markdown content
    hook.beforeEach(function(content) {
      return content.replace(/<!-- card-grid -->([\s\S]*?)<!-- end-card-grid -->/g, (match, gridContent) => {
        const cards = [];
        const cardRegex = /<!-- card(?:\s+(\{.*?\}))?\s*-->([\s\S]*?)<!-- end-card -->/g;
        let cardMatch;

        const icons = {
          composition: `<svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"/><path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"/></svg>`,
          comparison: `<svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 20H4V4"/><path d="M4 16.5L12 9l3 3 4.5-4.5"/></svg>`,
          correlation: `<svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/></svg>`
        };

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

          cards.push(`
            <div class="card" ${options.variant ? `data-variant="${options.variant}"` : ''}>
              <div class="card-content">
                ${icons[options.type] || ''}
                ${vm.compiler.compile(cardContent)}
                ${options.tags ? `
                  <ul class="list-group">
                    ${options.tags.map(tag => `
                      <li class="list-group-item">
                        <a href="${tag.href}" class="list-group-link">
                          <span>${tag.label}</span>
                          <span class="chevron-right"></span>
                        </a>
                      </li>
                    `).join('')}
                  </ul>
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