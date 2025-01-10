(function() {
  var colorPalette = function(hook) {
    hook.afterEach(function(html) {
      return html.replace(
        /\{colors:\s*((?:#[A-Fa-f0-9]{6},?)+)\}/g,
        function(match, colors) {
          const colorArray = colors.split(',');
          let html = '<div class="color-row">';
          colorArray.forEach(color => {
            html += `
              <div class="color-block" 
                   style="background-color: ${color}" 
                   onclick="copyColor(this, '${color}')">
                <span class="color-code">${color}</span>
                <span class="copy-feedback">Copied!</span>
              </div>`;
          });
          html += '</div>';
          return html;
        }
      );
    });
  };

  // Add the copy function globally
  window.copyColor = function(element, color) {
    navigator.clipboard.writeText(color);
    element.classList.add('copied');
    setTimeout(() => {
      element.classList.remove('copied');
    }, 1000);
  };

  window.$docsify = window.$docsify || {};
  window.$docsify.plugins = [].concat(colorPalette, window.$docsify.plugins || []);
})();