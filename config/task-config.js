module.exports = {
  html: true,
  images: false,
  fonts: false,
  static: true,
  svgSprite: false,
  ghPages: true,
  stylesheets: true,

  javascripts: {
    entry: {
      // files paths are relative to
      // javascripts.dest in path-config.json
      app: ['./app.js'],
    },
  },

  browserSync: {
    server: {
      // should match `dest` in
      // path-config.json
      baseDir: 'public',
    },
  },

  production: {
    rev: true,
  },
};
