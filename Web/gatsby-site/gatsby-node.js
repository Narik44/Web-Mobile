const path = require('path');
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it



exports.modifyWebpackConfig = ({ config, _stage }) => {
    console.log("*********config._config.context: ", config._config.context)
  return config.merge({
    resolve: {
      alias: {
        Common: path.resolve(config._config.context, '../common'),
      },
    },
  })
}
