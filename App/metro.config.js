const path = require('path');
/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */


module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  projectRoot: path.resolve(__dirname),
// tell the builder to also look in the shared directory for imports
watchFolders: [
 path.resolve(__dirname, "../common")
]
};
