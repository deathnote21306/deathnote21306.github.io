module.exports = {
  multipass: true,
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          // keep viewBox if you need responsive sizing
          removeViewBox: false,
        },
      },
    },
    { name: 'cleanupNumericValues', params: { floatPrecision: 1 } },
    { name: 'convertPathData', params: { floatPrecision: 1 } },
    { name: 'removeDimensions' },
    { name: 'removeUselessDefs' },
    { name: 'removeHiddenElems' },
    { name: 'collapseGroups' },
  ],
};