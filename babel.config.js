module.exports = {
  presets: ['module:@react-native/babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          components: './src/components',
          constants: './src/constants',
          contexts: './src/contexts',
          features: './src/features',
          hooks: './src/hooks',
          shared: './src/shared',
          navigation: './src/navigation',
          screens: './src/screens',
          types: './src/types',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
