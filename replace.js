const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

const rootVars = `:root {
  --bg-color: #ffffff;
  --text-color: #000000;
  --text-secondary: rgb(85, 85, 85);
  --nav-bg-scrolled: rgba(255, 255, 255, 0.4);
  --menu-bg: #ffffff;
  --card-bg: #ffffff;
  --card-light-bg: rgb(250, 250, 250);
  --border-color: rgb(163, 163, 163);
  --btn-border: rgb(53, 53, 53);
  --btn-color: rgb(53, 53, 53);
  --btn-hover: rgb(0, 0, 0);
  --btn-text: #ffffff;
}

body.dark-mode {
  --bg-color: #121212;
  --text-color: #f1f1f1;
  --text-secondary: #aaaaaa;
  --nav-bg-scrolled: rgba(18, 18, 18, 0.6);
  --menu-bg: #1e1e1e;
  --card-bg: #1e1e1e;
  --card-light-bg: #252525;
  --border-color: #444444;
  --btn-border: #ffffff;
  --btn-color: #ffffff;
  --btn-hover: #dddddd;
  --btn-text: #000000;
}

body.dark-mode #particles-js {
  filter: invert(1);
}

body.dark-mode .icon {
  filter: invert(1);
}

`;

css = rootVars + css;

css = css.replace(/body \{\n/g, 'body {\n  background-color: var(--bg-color);\n  color: var(--text-color);\n  transition: background-color 0.3s ease, color 0.3s ease;\n');
css = css.replace(/color: rgb\(85, 85, 85\);/g, 'color: var(--text-secondary);');
css = css.replace(/color: #262626;/g, 'color: var(--text-color);');
css = css.replace(/color: black;/g, 'color: var(--text-color);');
css = css.replace(/color:black;/g, 'color: var(--text-color);');
css = css.replace(/color: #000;/g, 'color: var(--text-color);');
css = css.replace(/background: #ffffff;/g, 'background: var(--menu-bg);');
css = css.replace(/background-color: white;/g, 'background-color: var(--card-bg);');
css = css.replace(/background: white;/g, 'background: var(--card-bg);');
css = css.replace(/background: rgb\(250, 250, 250\);/g, 'background: var(--card-light-bg);');
css = css.replace(/border-color: rgb\(163, 163, 163\);/g, 'border-color: var(--border-color);');
css = css.replace(/border: 1px solid rgb\(163, 163, 163\);/g, 'border: 1px solid var(--border-color);');
css = css.replace(/border: 0.1rem solid rgb\(163, 163, 163\);/g, 'border: 0.1rem solid var(--border-color);');
css = css.replace(/border: rgb\(53, 53, 53\) 0.1rem solid;/g, 'border: var(--btn-border) 0.1rem solid;');
css = css.replace(/background: rgb\(53, 53, 53\);/g, 'background: var(--btn-color);');
css = css.replace(/background: rgb\(0, 0, 0\);/g, 'background: var(--btn-hover);');
css = css.replace(/color: white;/g, 'color: var(--btn-text);');
css = css.replace(/background: rgba\(255, 255, 255, 0.4\)/g, 'background: var(--nav-bg-scrolled)');
css = css.replace(/border: rgb\(255, 255, 255\) 0.1rem solid;/g, 'border: var(--bg-color) 0.1rem solid;');

fs.writeFileSync('style.css', css);
console.log('Done!');
