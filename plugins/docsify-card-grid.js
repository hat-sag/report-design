(function () {
  const cardGridPlugin = function (hook, vm) {
    hook.beforeEach(function (content) {
      return content.replace(/<!-- card-grid -->([\s\S]*?)<!-- end-card-grid -->/g, (match, gridContent) => {
        const cards = [];
        const cardRegex = /<!-- card(?:\s+(\{.*?\}))?\s*-->([\s\S]*?)<!-- end-card -->/g;
        let cardMatch;

        const icons = {
          composition: `<svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <circle cx="12" cy="12" r="10"/>
                          <path d="M12 2a10 10 0 0110 10H12V2z"/>
                        </svg>`,
          comparison: `<svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M20 20H4V4"/>
                          <path d="M4 16.5L12 9l3 3 4.5-4.5"/>
                        </svg>`,
          correlation: `<svg class="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <circle cx="6" cy="6" r="2"/>
                          <circle cx="12" cy="12" r="2"/>
                          <circle cx="18" cy="8" r="2"/>
                          <circle cx="16" cy="16" r="2"/>
                          <circle cx="8" cy="18" r="2"/>
                        </svg>`
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
                        ${vm.compiler.compile(tag.link)}
                        <div class="tag-content">
                          <div class="tag-wrapper">
                            <strong class="tag-label">${tag.label}</strong>
                            ${tag.question ? `<span class="tag-question">${tag.question}</span>` : ''}
                          </div>
                        </div>
                        <span class="chevron-right"></span>
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

  if (window.$docsify) {
    window.$docsify.plugins = [].concat(
      cardGridPlugin,
      window.$docsify.plugins || []
    );
  }
})();