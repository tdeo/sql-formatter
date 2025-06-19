#!/usr/bin/env node

'use strict';

const { execSync } = require('node:child_process');

process.argv.slice(2).forEach(file => {
  execSync(`sql-formatter ${file} --fix --language=postgresql`);
});
