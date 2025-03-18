import { defineConfig, presetWind4 } from 'unocss';

export default defineConfig({
  presets: [presetWind4()],
  cli: {
    entry: {
      patterns: ['src/**/*.html', 'src/**/*.ts'],
      outFile: './src/styles.css',
    },
  },
});
