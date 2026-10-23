#!/usr/bin/env node
'use strict';

const fs = require('node:fs');
const path = require('node:path');

// List build assets explicitly: directory entries cannot select filesystem paths.
fs.mkdirSync(path.resolve(__dirname, '../dist/nodes/Ascerta'), { recursive: true });
fs.mkdirSync(path.resolve(__dirname, '../dist/credentials'), { recursive: true });
fs.copyFileSync(
	path.resolve(__dirname, '../nodes/Ascerta/ascerta_logo.svg'),
	path.resolve(__dirname, '../dist/nodes/Ascerta/ascerta_logo.svg'),
);
fs.copyFileSync(
	path.resolve(__dirname, '../nodes/Ascerta/Ascerta.node.json'),
	path.resolve(__dirname, '../dist/nodes/Ascerta/Ascerta.node.json'),
);
fs.copyFileSync(
	path.resolve(__dirname, '../credentials/ascerta_logo.svg'),
	path.resolve(__dirname, '../dist/credentials/ascerta_logo.svg'),
);

console.log('copy-icons: 3 file(s) copied to dist/');
