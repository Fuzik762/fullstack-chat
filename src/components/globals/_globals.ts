// Globally register all base components for convenience, because they
// will be used very frequently. Components are registered using the
// PascalCased version of their file name.

import { app } from '@/main';

// https://webpack.js.org/guides/dependency-management/#require-context
export const registerGlobalComponents = () => {
  const requireComponent = require.context(
    // Look for files in the current directory
    '.',
    // Do not look in subdirectories
    true,
    // Only include "_base-" prefixed .vue files
    /_chat-[\w-]+\.vue$/,
  );

  // For each matching file name...
  requireComponent.keys().forEach((fileName: string) => {
    // Get the component config
    const componentConfig = requireComponent(fileName);
    // Get the PascalCase version of the component name
    const componentName = fileName
      // Remove the "./_" from the beginning
      .replace(/^\.\/_/, '')
      // Remove the file extension from the end
      .replace(/\.\w+$/, '')
      // Remove subdir name from file name
      .replace(/.\/[a-z]+\/_+/g, '')
      // Split up kebabs
      .split('-')
      // Upper case
      .map(kebab => kebab.charAt(0).toUpperCase() + kebab.slice(1))
      // Concatenated
      .join('');

    // Globally register the component
    app.component(componentName, componentConfig.default || componentConfig);
  });
};
