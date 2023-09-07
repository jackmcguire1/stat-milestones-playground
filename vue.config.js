module.exports = {
  productionSourceMap: false,

  chainWebpack: config => {
    config.resolve.alias.set('vue', '@vue/compat');

    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => {
        return {
          ...options,
          compilerOptions: {
            compatConfig: {
              MODE: 2
            }
          }
        }
      })
  },

  pages: {
    index: {
      entry: 'src/main.js',
      template: './twitch-template.html',
      filename: 'index.html',
      title: 'stat-milestones'
    },
    panel: {
      entry: 'src/main.js',
      template: './twitch-template.html',
      filename: 'panel.html',
      title: 'stat-milestones'
    },
  },

  runtimeCompiler: true,

  publicPath: process.env.NODE_ENV === "production" ? "/stat-milestones-playground/" : "/",
  outputDir: 'dist',
}