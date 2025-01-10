(function () {
  const cardGridPlugin = function(hook, vm) {
    hook.mounted(function() {
      const style = document.createElement('style');
      style.textContent = `
        .card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 1.5rem;
          padding: 1rem;
          margin: 1rem 0;
        }

        .card {
          background: var(--card-background-color, #ffffff);
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          transition: transform 0.2s ease;
          overflow: hidden;
          border: 1px solid var(--card-border-color, #eaecef);
          height: 100%;
        }

        .card:hover {
          transform: translateY(-4px);
          box-shadow: 0 4px 8px rgba(0,0,0,0.15);
        }

        /* Card variants */
        .card[data-variant="primary"] {
          border-top: 4px solid var(--theme-color, #42b983);
        }

        .card[data-variant="info"] {
          border-top: 4px solid #0088cc;
        }

        .card[data-variant="warning"] {
          border-top: 4px solid #f1b70e;
        }

        .card[data-variant="success"] {
          border-top: 4px solid #42b983;
        }

        .card[data-variant="danger"] {
          border-top: 4px solid #ed4014;
        }

        .card-content {
          padding: 1.5rem;
        }

        .card-title {
          margin: 0 0 0.75rem;
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-color-base, #2c3e50);
          border: none;
        }

        .card-description {
          margin: 0;
          color: var(--text-color-secondary, #666);
          line-height: 1.6;
        }

        .card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid var(--card-border-color, #eaecef);
        }

        .card-tag {
          padding: 0.25rem 0.5rem;
          background: var(--card-tag-bg, #f0f0f0);
          border-radius: 4px;
          font-size: 0.875rem;
          color: var(--text-color-secondary, #666);
        }

        /* Ensure cards don't appear in sidebar */
        .sidebar .card-grid {
          display: none;
        }
      `;
      document.head.appendChild(style);
    });

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

          cards.push(`
            <div class="card" ${options.variant ? `data-variant="${options.variant}"` : ''}>
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