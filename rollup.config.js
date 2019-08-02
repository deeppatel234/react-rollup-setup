import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import del from 'rollup-plugin-delete';

const INPUT_FILE = 'src/index.js';
const DIST_DIR = 'dist';

const EXTENSIONS = ['.js', '.jsx'];

const GLOBALS = {
  react: 'React',
  'prop-types': 'PropTypes',
  'styled-components': 'styled',
};

const BABEL_CONFIG = {
  extensions: EXTENSIONS,
  exclude: 'node_modules/**',
};

const OUTPUTS = {
  globals: GLOBALS,
  name: 'ReactRollup',
  format: 'umd',
};

module.exports = [
  {
    input: INPUT_FILE,
    external: Object.keys(GLOBALS),
    output: {
      ...OUTPUTS,
      file: `${DIST_DIR}/bundle.js`,
    },
    plugins: [
      del({ targets: 'dist/*' }),
      resolve({
        extensions: EXTENSIONS,
      }),
      babel(BABEL_CONFIG),
    ],
  },
  {
    input: INPUT_FILE,
    external: Object.keys(GLOBALS),
    output: {
      ...OUTPUTS,
      file: `${DIST_DIR}/bundle.min.js`,
    },
    plugins: [
      resolve({
        extensions: EXTENSIONS,
      }),
      babel(BABEL_CONFIG),
      terser(),
    ],
  },
];
