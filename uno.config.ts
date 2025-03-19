import { defineConfig, presetAttributify, presetWind4 } from 'unocss';

export default defineConfig({
  presets: [presetAttributify(), presetWind4()],
  cli: {
    entry: {
      patterns: ['src/**/*.html', 'src/**/*.ts'],
      outFile: './src/styles.css',
    },
  },
});
