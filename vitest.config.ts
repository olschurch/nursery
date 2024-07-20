import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
export default function config() {
  return defineConfig({
    plugins: [react()],

    test: {
      globals: true,
      // have some trouble with the setup
      // not finishing before tests are run occassionally
      // which causes getComputedStyle to not be defined. Seems
      // to happen like 1 in 5 times, but setting concurrency to 1
      // seems to fix it

      environment: 'jsdom',
      include: ['./src/**/*.{test,spec}.{ts,tsx}'],
      setupFiles: ['./test_setup.ts'],
      deps: {
        interopDefault: true,
      },

      // turn off css module scoping
      // so we can test for human readable
      // classnames
      css: {
        modules: {
          classNameStrategy: 'non-scoped',
        },
      },
      reporters: ['verbose'],

      coverage: {
        reporter: ['text'],
        include: ['src/**/*'],
        exclude: [
          'src/types/*',
          'src/__fixtures__/*',
          'src/**/types.ts',
          'src/**/*.d.ts',
        ],
      },
    },
  });
}
