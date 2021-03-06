#!/usr/bin/env node
// @flow

const fs = require('fs-extra');
const path = require('path');
const { hasPkgProp, hasFile, root } = require('about-this-app');

const hasConfig =
  hasFile('.eslintrc') || hasFile('.eslintrc.js') || hasPkgProp('eslintConfig');

const projectRc = path.resolve(root, '.eslintrc');
const builtInRc = path.resolve(__dirname, '../.eslintrc');

if (hasConfig) {
  console.log('Project already has an eslint config.');
} else {
  fs.copySync(builtInRc, projectRc);
  console.log(`${projectRc} created.`);
}
