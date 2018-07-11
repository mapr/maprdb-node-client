module.exports = {
  out: './docs',

  includes: './src',
  exclude: [
    '**/lib/ConnectionInfo.ts',
    '**/lib/logging.ts',
    '**/lib/utils.ts',
    '**/ojai/OJAIUtils.ts',
    '**/types/ConnectionOptions.ts',
    '**/types/index.ts',
    '**/index.ts',
    '**/test/config.ts',
  ],

  mode: 'file',
  excludeExternals: true,
  excludeNotExported: true,
  excludePrivate: true
};
