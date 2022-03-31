# Source Replacement

[![semantic-release](https://img.shields.io/badge/semantic-release-e10079.svg?logo=semantic-release)](https://github.com/semantic-release/semantic-release)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![ts](https://badgen.net/badge/Built%20With/TypeScript/blue) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Module to enhance ability of source replacement for website

Note: Not using this in production environment

## Installation

```
yarn add source-replacement
```

### Usage

Attach `source-replacement/build/executors/source-replacement` on the script tag in `<head>` or mark it as `async type=module`

In your source import `source-replacement/build/code-blocker.js` to prevent executing your source during the process of replacement

#### On your browser

Enter page with the following example

```
https://example.com/#targetReplacementSource=https://your-target-js-source-url
```
